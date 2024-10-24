// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.22;

import {Math} from "@openzeppelin/contracts/utils/math/Math.sol";
import {IVault} from "../../../contracts/interfaces/yearnv3/IVault.sol";
import {Test} from "forge-std/Test.sol";
import {YvTokenStrategyHandler} from "../handlers/YvTokenStrategyHandler.sol";

/*
████████╗ █████╗ ██████╗ ██╗ ██████╗  ██████╗ █████╗ 
╚══██╔══╝██╔══██╗██╔══██╗██║██╔═══██╗██╔════╝██╔══██╗
   ██║   ███████║██████╔╝██║██║   ██║██║     ███████║
   ██║   ██╔══██║██╔═══╝ ██║██║   ██║██║     ██╔══██║
   ██║   ██║  ██║██║     ██║╚██████╔╝╚██████╗██║  ██║
   ╚═╝   ╚═╝  ╚═╝╚═╝     ╚═╝ ╚═════╝  ╚═════╝╚═╝  ╚═╝
*/
/**
 * @title YvTokenStrategyInvariantTest
 * @author Guillermo Salazar
 * @notice This contract is used to test the invariants of the YvTokenStrategy contract.
 * @dev This contract manages the multiple handlers for the invariant tests.
 */
contract YvTokenStrategyManager is Test {

    // Private key must be less than the Secp256k1 curve order
    uint256 private constant SECP256K1_CURVE_ORDER =
        115792089237316195423570985008687907852837564279074904382605163141518161494337;

    YvTokenStrategyHandler[] private handlers;
    uint256 private defaultDepositorPk;

    mapping(address token => uint256 depositedAmount) public totalDepositedTokens;
    mapping(address token => uint256 depositedShares) public totalDepositedShares;

    mapping(address token => uint256 withdrawnAmount) public totalWithdrawnTokens;
    mapping(address token => uint256 withdrawnShares) public totalWithdrawnShares;

    /**
     * @notice Creates the YvTokenStrategyManager contract.
     * @param _handlers The list of handlers
     * @param _defaultDepositorPk The default depositor private key
     */
    constructor(
        YvTokenStrategyHandler[] memory _handlers,
        uint256 _defaultDepositorPk
    ) {
        handlers = _handlers;
        defaultDepositorPk = _defaultDepositorPk;
    }

    /**
     * @notice Deposits tokens into the YieldBox using a specific YvTokenStrategyHandler instance.
     * @param _handlerIndex The handler index
     * @param _depositorPk The depositor private key
     * @param _amount The amount to deposit
     */
    function deposit(
        uint256 _handlerIndex,
        uint256 _depositorPk,
        uint256 _amount
    ) external {
        uint256 handlerIndex = bound(_handlerIndex, 0, handlers.length - 1);
        YvTokenStrategyHandler handler = handlers[handlerIndex];

        uint256 depositorPk = _depositorPk == 0 || _depositorPk >= SECP256K1_CURVE_ORDER
            ? defaultDepositorPk
            : _depositorPk;
        address _depositor = vm.addr(depositorPk);

        uint256 amount = boundDepositAmount(handler, _depositor, _amount);
        (uint256 depositedAmount, uint256 shares) = handler.deposit(_depositor, amount);

        address _asset = address(handler.asset());
        totalDepositedTokens[_asset] += depositedAmount;
        totalDepositedShares[_asset] += shares;
    }

    /**
     * @notice Withdraws tokens from the YieldBox using a specific YvTokenStrategyHandler instance.
     * @param _handlerIndex The handler index
     * @param _userPk The user private key
     * @param _amount The amount to withdraw
     */
    function withdraw(
        uint256 _handlerIndex,
        uint256 _userPk,
        uint256 _amount
    ) external {
        uint256 handlerIndex = bound(_handlerIndex, 0, handlers.length - 1);
        YvTokenStrategyHandler handler = handlers[handlerIndex];

        uint256 userPk = _userPk == 0 || _userPk >= SECP256K1_CURVE_ORDER
            ? defaultDepositorPk
            : _userPk;
        address _user = vm.addr(userPk);

        uint256 amount = boundWithdrawAmount(handler, _user, _amount);
        (uint256 assets, uint256 shares) = handler.withdraw(_user, amount);

        address _asset = address(handler.asset());
        totalWithdrawnTokens[_asset] += assets;
        totalWithdrawnShares[_asset] += shares;
    }

    /**
     * @notice Bounds a value between a minimum and a maximum value for the withdraw function.
     * @param handler The YvTokenStrategyHandler instance
     * @param _user The user address
     * @param _amount The amount to withdraw
     * @return The bounded amount
     */
    function boundWithdrawAmount(
        YvTokenStrategyHandler handler,
        address _user,
        uint256 _amount
    ) internal view returns (uint256) {
        uint256 maxAmount = handler.depositedBalanceOf(_user);
        _amount = bound(_amount, 0, maxAmount);
        return _amount;
    }

    /**
     * @notice Bounds a value between a minimum and a maximum value for the deposit function.
     * @param handler The YvTokenStrategyHandler instance
     * @param _depositor The depositor address
     * @param _amount The amount to deposit
     */
    function boundDepositAmount(
        YvTokenStrategyHandler handler,
        address _depositor,
        uint256 _amount
    ) internal view returns (uint256) {
        IVault vault = handler.strategy().yvToken();

        uint256 maxAmount = Math.min(
            Math.min(vault.deposit_limit(), type(uint56).max),
            Math.min(vault.maxDeposit(_depositor), handler.tokenWhaleBalance())
        );
        return bound(_amount, 1, maxAmount);
    }
}
