// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.22;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {IWrappedNative} from "yieldbox/interfaces/IWrappedNative.sol";
import {IStrategy} from "yieldbox/interfaces/IStrategy.sol";
import {YieldBox, TokenType} from "yieldbox/YieldBox.sol";
import {YieldBoxURIBuilder} from "yieldbox/YieldBoxURIBuilder.sol";
import {Pearlmit} from "tap-utils/pearlmit/Pearlmit.sol";
import {Cluster} from "tap-utils/Cluster/Cluster.sol";
import {yvTokenStrategy} from "../../../contracts/yvToken/yvTokenStrategy.sol";
import {IVault} from "../../../contracts/interfaces/yearnv3/IVault.sol";
import {ForkUtils} from "../utils/ForkUtils.sol";

/*
████████╗ █████╗ ██████╗ ██╗ ██████╗  ██████╗ █████╗ 
╚══██╔══╝██╔══██╗██╔══██╗██║██╔═══██╗██╔════╝██╔══██╗
   ██║   ███████║██████╔╝██║██║   ██║██║     ███████║
   ██║   ██╔══██║██╔═══╝ ██║██║   ██║██║     ██╔══██║
   ██║   ██║  ██║██║     ██║╚██████╔╝╚██████╗██║  ██║
   ╚═╝   ╚═╝  ╚═╝╚═╝     ╚═╝ ╚═════╝  ╚═════╝╚═╝  ╚═╝
*/
/**
 * @title yvTokenStrategyForkTest
 * @author Guillermo Salazar
 * @notice Tests for the yvTokenStrategy contract forking Ethereum mainnet.
 * @dev The tests were created to validate the yvTokenStrategy contract on the Ethereum mainnet fork. It tests:
 * - A valid deposit
 * - A valid withdraw
 * - A valid emergency withdraw
 */
contract yvTokenStrategyForkTest is ForkUtils {
    uint256 public forkId;
    address public owner;
    address public weth;
    YieldBox public yieldBox;
    yvTokenStrategy public strategy;
    uint256 public initialDepositThreshold;
    IERC20 public dai;
    IVault public yvDAI;
    Pearlmit public pearlmit;
    Cluster public cluster;
    uint256 public daiAssetId;

    /**
     * @notice It sets up the environment for the tests.
     */
    function setUp() public {
        string memory rpcUrl = vm.envString(RPC_URL);
        forkId = vm.createSelectFork(rpcUrl);
        owner = address(0x1234567890);
        weth = address(0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2);
        dai = IERC20(address(0x6B175474E89094C44Da98b954EedeAC495271d0F)); // DAI
        yvDAI = IVault(address(0x028eC7330ff87667b6dfb0D94b954c820195336c)); // yvDAI
        require(yvDAI.deposit_limit() > 0, "Deposit limit is zero");
        initialDepositThreshold = 10000e18;

        vm.startPrank(owner);
        // Deploy required contracts
        pearlmit = new Pearlmit("Pearlmit", "1", address(this), 0);
        cluster = new Cluster(1, owner);
        yieldBox = new YieldBox(
            IWrappedNative(weth),
            new YieldBoxURIBuilder(),
            pearlmit,
            address(this)
        );
        // Deploy strategy
        strategy = new yvTokenStrategy(
            address(yieldBox),
            address(cluster),
            address(dai),
            address(yvDAI),
            owner,
            initialDepositThreshold
        );
        // Register asset
        daiAssetId = yieldBox.registerAsset(
            TokenType.ERC20,
            address(dai),
            IStrategy(address(strategy)),
            0
        );
        require(daiAssetId > 0, "daiAssetId is 0");
        vm.stopPrank();

        vm.label(address(strategy), "yvTokenStrategy");
        vm.label(address(yieldBox), "yieldBox");
        vm.label(address(pearlmit), "pearlmit");
        vm.label(address(cluster), "cluster");
        vm.label(weth, "weth");
        vm.label(address(dai), "dai");
        vm.label(address(yvDAI), "yvDAI");
        vm.label(owner, "owner");
    }

    function test_deposit_valid(address _user, uint256 _amount) external {
        vm.assume(_user != address(0));
        vm.assume(_user != owner);
        vm.assume(_user != address(yieldBox));
        vm.assume(_amount > 0);
        vm.assume(_amount < dai.balanceOf(DAI_WHALE));
        vm.assume(_amount < yvDAI.deposit_limit());
        vm.assume(_amount < yvDAI.maxDeposit(_user));
        uint256 _share = 0;

        _transferDaiTo(dai, _user, _amount);

        vm.startPrank(address(_user));
        dai.approve(address(yieldBox), _amount);
        yieldBox.depositAsset(daiAssetId, _user, _user, _amount, _share);
        vm.stopPrank();
        uint256 currentBalance = strategy.currentBalance();
        assertTrue(currentBalance > 0, "Current balance is zero");
        uint256 amountOf = yieldBox.amountOf(_user, daiAssetId);
        assertTrue(amountOf > 0, "User amount of is zero");
    }

    function test_withdraw_valid(address _user, uint256 _amount) external {
        vm.assume(_user != address(0));
        vm.assume(_user != owner);
        vm.assume(_user != address(yieldBox));
        vm.assume(_amount > 1);
        vm.assume(_amount < dai.balanceOf(DAI_WHALE));
        vm.assume(_amount < yvDAI.deposit_limit());
        vm.assume(_amount < yvDAI.maxDeposit(_user));

        (uint256 assets, ) = _deposit(yieldBox, dai, daiAssetId, _user, _amount);

        // To avoid rounding errors.
        assets = assets - 1;
        vm.startPrank(address(_user));
        (uint256 amountOut, uint256 shareOut) = yieldBox.withdraw(
            daiAssetId,
            _user,
            _user,
            assets,
            0
        );
        vm.stopPrank();
        assertTrue(amountOut > 0, "User amount out is zero");
        assertTrue(shareOut > 0, "User share out is zero");
    }

    function test_emergencyWithdraw_valid(address _user1, uint256 _amount1, address _user2, uint256 _amount2) external {
        vm.assume(_user1 != address(0));
        vm.assume(_user1 != owner);
        vm.assume(_user1 != address(yieldBox));
        vm.assume(_amount1 > 1);
        vm.assume(_amount1 < type(uint112).max);
        vm.assume(_user2 != address(0));
        vm.assume(_user2 != owner);
        vm.assume(_user2 != address(yieldBox));
        vm.assume(_amount2 > 1);
        vm.assume(_amount2 < type(uint112).max);
        vm.assume(_amount1 + _amount2 < dai.balanceOf(DAI_WHALE));
        vm.assume(_amount1 + _amount2 < yvDAI.deposit_limit());

        _deposit(yieldBox, dai, daiAssetId, _user1, _amount1);
        _deposit(yieldBox, dai, daiAssetId, _user2, _amount2);
        uint256 totalDeposited = _amount1 + _amount2;

        uint256 _daiOwnerBalanceBefore = dai.balanceOf(owner);
        address _owner = strategy.owner();

        vm.startPrank(_owner);
        strategy.emergencyWithdraw();
        vm.stopPrank();

        uint256 _daiOwnerBalanceAfter = dai.balanceOf(owner);

        assertApproxEqAbs(_daiOwnerBalanceAfter - _daiOwnerBalanceBefore , totalDeposited, 2, "Owner balance is incorrect");
    }
}
