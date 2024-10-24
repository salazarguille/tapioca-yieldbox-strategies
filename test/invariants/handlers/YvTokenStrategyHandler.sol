// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.22;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {YvTokenStrategy} from "../../../contracts/yvToken/YvTokenStrategy.sol";
import {YieldBox} from "yieldbox/YieldBox.sol";
import {CommonBase} from "forge-std/Base.sol";
import {StdCheats} from "forge-std/StdCheats.sol";
import {StdUtils} from "forge-std/StdUtils.sol";

/*
████████╗ █████╗ ██████╗ ██╗ ██████╗  ██████╗ █████╗ 
╚══██╔══╝██╔══██╗██╔══██╗██║██╔═══██╗██╔════╝██╔══██╗
   ██║   ███████║██████╔╝██║██║   ██║██║     ███████║
   ██║   ██╔══██║██╔═══╝ ██║██║   ██║██║     ██╔══██║
   ██║   ██║  ██║██║     ██║╚██████╔╝╚██████╗██║  ██║
   ╚═╝   ╚═╝  ╚═╝╚═╝     ╚═╝ ╚═════╝  ╚═════╝╚═╝  ╚═╝
*/
/**
 * @title YvTokenStrategyHandler
 * @author Guillermo Salazar
 * @notice This contract is used to test the invariants of the YvTokenStrategy contract.
 * @dev This contract interacts directly with the strategy with the purpose of testing the invariants.
 */
contract YvTokenStrategyHandler is CommonBase, StdCheats, StdUtils {
    using SafeERC20 for IERC20;

    YvTokenStrategy public strategy;
    address private tokenWhale;
    uint256 public assetId;

    mapping(address user => uint256 amount) private depositedAmounts;
    mapping(address user => uint256 amount) private withdrawnAmounts;

    /**
     * @notice Creates the YvTokenStrategyHandler contract
     * @param _tokenWhale The token whale address
     * @param _yvTokenStrategy The YvTokenStrategy instance
     * @param _assetId The asset id
     */
    constructor(
        address _tokenWhale,
        YvTokenStrategy _yvTokenStrategy,
        uint256 _assetId
    ) {
        tokenWhale = _tokenWhale;
        strategy = _yvTokenStrategy;
        assetId = _assetId;
    }

    /**
     * @notice Get the YieldBox instance
     * @return The YieldBox instance
     */
    function yieldBox() public view returns (YieldBox) {
        return YieldBox(address(strategy.yieldBox()));
    }

    /**
     * @notice Get the asset token
     * @return The asset token
     */
    function asset() public view returns (IERC20) {
        return strategy.asset();
    }

    /**
     * @notice Get the token whale balance
     * @return The token whale balance
     */
    function tokenWhaleBalance() public view returns (uint256) {
        return asset().balanceOf(tokenWhale);
    }

    /**
     * @notice Get the deposited balance of the user
     * @param _user The user address
     * @return The deposited balance of the user
     */
    function depositedBalanceOf(address _user) public view returns (uint256) {
        return depositedAmounts[_user];
    }

    /**
     * @notice Transfer tokens to the user
     * @dev It impersonates the a token whale to transfer tokens to the user
     * @param _user The user address
     * @param _amount The amount of tokens to transfer
     */
    function _transferTokensFromWhaleTo(
        address _user,
        uint256 _amount
    ) internal {
        IERC20 token = asset();
        uint256 userBalance = token.balanceOf(_user);
        if (userBalance >= _amount) {
            return;
        }
        vm.startPrank(tokenWhale);
        token.safeTransfer(_user, _amount - userBalance);
        vm.stopPrank();
    }

    /**
     * @notice Deposit tokens to the YieldBox
     * @param _depositor The depositor address
     * @param _amount The amount of tokens to deposit
     * @return assets The amount of deposited assets
     * @return shares The amount of deposited shares
     */
    function deposit(
        address _depositor,
        uint256 _amount
    ) external returns (uint256 assets, uint256 shares) {
        uint256 _share = 0;

        _transferTokensFromWhaleTo(_depositor, _amount);

        vm.startPrank(_depositor);

        YieldBox _yieldBox = yieldBox();
        asset().safeApprove(address(_yieldBox), _amount);
        (assets, shares) = _yieldBox.depositAsset(
            assetId,
            _depositor,
            _depositor,
            _amount,
            _share
        );

        vm.stopPrank();
        depositedAmounts[_depositor] += assets;
    }

    /**
     * @notice Withdraw tokens from the YieldBox
     * @param _user The user address
     * @param _amount The amount of tokens to withdraw
     * @return assets The amount of withdrawn assets
     * @return shares The amount of withdrawn shares
     */
    function withdraw(
        address _user,
        uint256 _amount
    ) external returns (uint256 assets, uint256 shares) {
        uint256 _share = 0;
        YieldBox _yieldBox = yieldBox();
        vm.startPrank(_user);

        (assets, shares) = _yieldBox.withdraw(
            assetId,
            _user,
            _user,
            _amount,
            _share
        );
        vm.stopPrank();
        withdrawnAmounts[_user] += assets;
    }
}
