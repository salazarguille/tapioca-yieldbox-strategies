// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.22;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {YieldBox} from "yieldbox/YieldBox.sol";
import {Test} from "forge-std/Test.sol";

/*
████████╗ █████╗ ██████╗ ██╗ ██████╗  ██████╗ █████╗ 
╚══██╔══╝██╔══██╗██╔══██╗██║██╔═══██╗██╔════╝██╔══██╗
   ██║   ███████║██████╔╝██║██║   ██║██║     ███████║
   ██║   ██╔══██║██╔═══╝ ██║██║   ██║██║     ██╔══██║
   ██║   ██║  ██║██║     ██║╚██████╔╝╚██████╗██║  ██║
   ╚═╝   ╚═╝  ╚═╝╚═╝     ╚═╝ ╚═════╝  ╚═════╝╚═╝  ╚═╝
*/
/**
 * @title ForkUtils
 * @author Guillermo Salazar
 * @notice Utility functions for the Ethereum mainnet fork tests
 */
abstract contract ForkUtils is Test {
    using SafeERC20 for IERC20;

    /**
     * @dev The RPC URL environment variable for the Ethereum mainnet fork
     */
    string constant RPC_URL = "RPC_URL";

    /**
     * @dev The address of the DAI whale
     */
    address constant DAI_WHALE =
        address(0xf6e72Db5454dd049d0788e411b06CfAF16853042);

    /**
     * @notice Transfer DAI to the user
     * @dev It impersonates the DAI whale to transfer DAI to the user
     * @param _token The DAI token
     * @param _user The user address
     * @param _amount The amount of DAI to transfer
     */
    function _transferDaiTo(
        IERC20 _token,
        address _user,
        uint256 _amount
    ) internal {
        vm.startPrank(DAI_WHALE);
        _token.safeTransfer(_user, _amount);
        vm.stopPrank();
    }

    /**
     * @notice Deposit DAI into the strategy through the YieldBox instance.
     * @dev This uses the YieldBox implementation because the IYieldBox doesn't has some public/external functions.
     * @param _yieldBox the yield box address.
     * @param _token the token address.
     * @param _assetId the asset id registered in the yield box instance.
     * @param _user the user address.
     * @param _amount the amount to deposit.
     */
    function _deposit(
        YieldBox _yieldBox,
        IERC20 _token,
        uint256 _assetId,
        address _user,
        uint256 _amount
    ) internal returns (uint256 assets, uint256 shares) {
        _transferDaiTo(_token, _user, _amount);
        uint256 _share = 0;

        vm.startPrank(address(_user));
        _token.safeApprove(address(_yieldBox), _amount);
        (assets, shares) = _yieldBox.depositAsset(_assetId, _user, _user, _amount, _share);
    }
}
