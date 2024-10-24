// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.22;

import {Test} from "forge-std/Test.sol";
import {IERC4626} from "@openzeppelin/contracts/interfaces/IERC4626.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {Address} from "@openzeppelin/contracts/utils/Address.sol";
import {IWrappedNative} from "yieldbox/interfaces/IWrappedNative.sol";
import {IStrategy} from "yieldbox/interfaces/IStrategy.sol";
import {Pearlmit} from "tap-utils/pearlmit/Pearlmit.sol";
import {YieldBoxURIBuilder} from "yieldbox/YieldBoxURIBuilder.sol";
import {YvTokenStrategy} from "../../../contracts/yvToken/YvTokenStrategy.sol";
import {YieldBox} from "yieldbox/YieldBox.sol";
import {Errors} from "../../../contracts/utils/Errors.sol";
import {MockERC20} from "../../../contracts/mocks/MockERC20.sol";
import {MockERC4626} from "../../../contracts/mocks/MockERC4626.sol";
import {EthRescuable} from "../../../contracts/utils/EthRescuable.sol";
import {NoTransferEthContract} from "../utils/NoTransferEthContract.sol";
import {TransferEthContract} from "../utils/TransferEthContract.sol";

/*
████████╗ █████╗ ██████╗ ██╗ ██████╗  ██████╗ █████╗ 
╚══██╔══╝██╔══██╗██╔══██╗██║██╔═══██╗██╔════╝██╔══██╗
   ██║   ███████║██████╔╝██║██║   ██║██║     ███████║
   ██║   ██╔══██║██╔═══╝ ██║██║   ██║██║     ██╔══██║
   ██║   ██║  ██║██║     ██║╚██████╔╝╚██████╗██║  ██║
   ╚═╝   ╚═╝  ╚═╝╚═╝     ╚═╝ ╚═════╝  ╚═════╝╚═╝  ╚═╝
*/
/**
 * @title YvTokenStrategyConstructorTest
 * @author Guillermo Salazar
 * @notice Tests the YvTokenStrategy.rescueEth.
 */
contract YvTokenStrategyRescueEthTest is Test {
    using Address for address;
    YvTokenStrategy public strategy;
    address public owner;

    function setUp() external {
        owner = address(0x1234567890);
        uint256 depositThreshold = 10000e18;
        YieldBox yieldBox = new YieldBox(
            IWrappedNative(address(0x999999999999)),
            YieldBoxURIBuilder(address(0x888888888888)),
            Pearlmit(address(0x777777777777)),
            address(this)
        );
        IERC20 token = IERC20(address(new MockERC20("MockToken", "MT")));
        IERC4626 yvToken = new MockERC4626(token);
        vm.startPrank(owner);
        strategy = new YvTokenStrategy(
            address(yieldBox),
            address(0x666666666666),
            address(token),
            address(yvToken),
            owner,
            depositThreshold
        );
        vm.stopPrank();
    }

    function test_RevertWhen_TransactionSenderIsNotTheOwner(
        address _sender,
        address _to,
        uint256 _amount
    ) external {
        vm.assume(_sender != owner);
        vm.assume(_sender != address(0));
        vm.assume(_amount > 0);
        vm.assume(_to != address(0));

        vm.startPrank(_sender);
        vm.expectRevert("Ownable: caller is not the owner");
        strategy.rescueEth(_amount, _to);
        vm.stopPrank();
    }

    modifier whenTransactionSenderIsTheOwner() {
        _;
    }

    function test_GivenTheAmountIsGreaterThanZero(
        address _to,
        uint256 _amount
    ) external whenTransactionSenderIsTheOwner {
        vm.assume(_amount > 0);
        vm.assume(_to != address(0));
        vm.assume(!_to.isContract());
        uint256 toBalanceBefore = _to.balance;

        vm.deal(address(strategy), _amount);

        vm.startPrank(strategy.owner());
        vm.expectEmit(true, true, false, true, address(strategy));
        emit EthRescuable.EthRescued(_to, _amount);
        strategy.rescueEth(_amount, _to);
        vm.stopPrank();

        uint256 toBalanceAfter = _to.balance;
        assertEq(toBalanceAfter, toBalanceBefore + _amount, "Invalid balance");
    }

    function test_RevertGiven_TheAmountIsZero(
        address _to
    ) external whenTransactionSenderIsTheOwner {
        vm.assume(_to != address(0));
        uint256 _amount = 0;

        vm.startPrank(strategy.owner());
        vm.expectRevert(Errors.EmptyAmount.selector);
        strategy.rescueEth(_amount, _to);
        vm.stopPrank();
    }

    modifier whenToAddressIsAContract() {
        _;
    }

    modifier givenTheTransactionSenderIsTheOwner() {
        _;
    }

    function test_RevertWhen_TheCallToTheContractFails(
        uint256 _amount
    ) external whenToAddressIsAContract givenTheTransactionSenderIsTheOwner {
        vm.assume(_amount > 0);
        address _to = address(new NoTransferEthContract());

        vm.startPrank(strategy.owner());
        vm.expectRevert(
            abi.encodeWithSelector(
                Errors.TransferFailed.selector,
                strategy.ETH_TOKEN_ADDRESS(),
                _to,
                _amount
            )
        );
        strategy.rescueEth(_amount, _to);
        vm.stopPrank();
    }

    function test_WhenTheCallToTheContractSucceeds(
        uint256 _amount
    )
        external
        whenToAddressIsAContract
        givenTheTransactionSenderIsTheOwner
    {
        vm.assume(_amount > 0);
        address _to = address(new TransferEthContract());
        vm.deal(address(strategy), _amount);

        vm.startPrank(strategy.owner());
        vm.expectEmit(true, true, false, true, address(strategy));
        emit EthRescuable.EthRescued(_to, _amount);
        strategy.rescueEth(_amount, _to);
        vm.stopPrank();

        assertEq(_to.balance, _amount, "Invalid balance");
    }
}
