// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.22;

import {SafeERC20, IERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {IERC20Metadata} from "@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol";
import {ReentrancyGuard} from "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {BaseERC20Strategy} from "yieldbox/strategies/BaseStrategy.sol";
import {IYieldBox} from "yieldbox/interfaces/IYieldBox.sol";
import {IVault} from "../interfaces/yearnv3/IVault.sol";
import {EthRescuable} from "../utils/EthRescuable.sol";
import {MultiPausable} from "../utils/MultiPausable.sol";
import {Errors} from "../utils/Errors.sol";

/*
████████╗ █████╗ ██████╗ ██╗ ██████╗  ██████╗ █████╗ 
╚══██╔══╝██╔══██╗██╔══██╗██║██╔═══██╗██╔════╝██╔══██╗
   ██║   ███████║██████╔╝██║██║   ██║██║     ███████║
   ██║   ██╔══██║██╔═══╝ ██║██║   ██║██║     ██╔══██║
   ██║   ██║  ██║██║     ██║╚██████╔╝╚██████╗██║  ██║
   ╚═╝   ╚═╝  ╚═╝╚═╝     ╚═╝ ╚═════╝  ╚═════╝╚═╝  ╚═╝
*/
/**
 * @title yvTokenStrategy
 * @author Guillermo Salazar
 * @notice Strategy contract for yvToken (Yearn v3 vaults).
 * @dev This contract allows to deposit and withdraw tokens from the yvToken vault.
 * @dev The contract is pausable for the deposit and withdraw operations.
 * @dev This is not required but the contract allows to rescue ETH from the contract. A use case could be when the contract receives ETH by mistake.
 */
contract yvTokenStrategy is
    BaseERC20Strategy,
    Errors,
    MultiPausable,
    EthRescuable,
    ReentrancyGuard
{
    using SafeERC20 for IERC20;

    /**
     * @notice Queues tokens up to depositThreshold
     * @dev When the amount of tokens is greater than the threshold, a deposit operation is performed
     */
    uint256 public depositThreshold;

    /**
     * @notice The Yearn v3 vault address associated to the strategy
     */
    IVault public immutable yvToken;

    /**
     * @notice Emitted when the deposit threshold changes
     * @param _old the previous deposit threshold
     * @param _new the new deposit threshold
     */
    event DepositThreshold(uint256 indexed _old, uint256 indexed _new);
    /**
     * @notice Emitted when the deposited amount is queued
     * @param amount the amount
     */
    event AmountQueued(uint256 indexed amount);
    /**
     * @notice Emitted when the amount is deposited
     * @param amount the amount
     */
    event AmountDeposited(uint256 indexed amount);
    /**
     * @notice Emitted when the amount is withdrawn
     * @param to the recipient
     * @param amount the amount
     */
    event AmountWithdrawn(address indexed to, uint256 indexed amount);

    /**
     * @notice Creates a new yvToken strategy
     * @dev The contract is pausable for the deposit and withdraw operations.
     * @dev If the vault asset is not the same as the token asset, it will revert.
     * @param _yieldBox the yield box address
     * @param _cluster the cluster address
     * @param _token the token address associated to the stratehy.
     * @param _yvToken the Yearn v3 vault address associated to the strategy.
     * @param _owner the owner of the contract
     * @param _depositThreshold the deposit threshold
     */
    constructor(
        address _yieldBox,
        address _cluster,
        address _token,
        address _yvToken,
        address _owner,
        uint256 _depositThreshold
    )
        BaseERC20Strategy(IYieldBox(_yieldBox), _token)
        MultiPausable(_cluster)
        EthRescuable(_owner)
    {
        if (_yieldBox == address(0)) revert AddressNotValid(_yieldBox);
        if (_token == address(0)) revert TokenNotValid(_token);
        if (_yvToken == address(0)) revert TokenNotValid(_yvToken);
        if (IVault(_yvToken).asset() != _token)
            revert TokensNotMatch(IVault(_yvToken).asset(), _token);
        if (_depositThreshold == 0) revert AmountNotValid(_depositThreshold);
        if (IERC20Metadata(_token).decimals() != 18)
            revert ValueNotValid(IERC20Metadata(_token).decimals());
        yvToken = IVault(_yvToken);
        depositThreshold = _depositThreshold;
        transferOwnership(_owner);
    }

    /**
     * @notice Sets the deposit threshold
     * @dev This function is called only by the owner of the contract.
     * @param amount The new deposit threshold
     */
    function setDepositThreshold(uint256 amount) external onlyOwner {
        emit DepositThreshold(depositThreshold, amount);
        depositThreshold = amount;
    }

    /**
     * @notice withdraws everything from the strategy and transfers the tokens to the owner.
     * @dev This function is called only by the owner of the contract.
     * @dev This function pauses the deposit and withdraw operations.
     */
    function emergencyWithdraw() external onlyOwner {
        // Pause the deposit and withdraw operations
        _setPause(true, PauseType.Deposit);
        _setPause(true, PauseType.Withdraw);

        // Get max withdraw amount
        uint256 maxWithdraw = yvToken.maxWithdraw(address(this));

        if (maxWithdraw > 0) {
            // Withdraw the tokens from the yvToken vault
            // slither-disable-next-line reentrancy-events
            uint256 sharesAmount = yvToken.withdraw(
                maxWithdraw,
                address(this),
                address(this)
            );
            // If no shares were withdrawn, revert
            // It could be improved by adding a boolean to throw an error or not. In some cases, you want to withdraw the funds even with slippage.
            if (sharesAmount == 0)
                revert WithdrawFailed(
                    address(yvToken),
                    address(this),
                    maxWithdraw
                );
        }

        // Transfer the tokens to the owner
        IERC20 token = asset();
        uint256 tokenAmount = token.balanceOf(address(this));
        if (tokenAmount > 0) {
            address msgSender = owner();
            token.safeTransfer(msgSender, tokenAmount);
            emit AmountWithdrawn(msgSender, tokenAmount);
        }
    }

    /**
     * @notice Returns the name of this strategy
     */
    function name() external pure override returns (string memory name_) {
        // Tapioca yvDai strategy
        return "tyvDai";
    }

    /**
     * @notice Gets the description of this strategy
     */
    function description()
        external
        pure
        override
        returns (string memory description_)
    {
        return "yvDai strategy for dai assets";
    }

    /**
     * @notice Returns the amount of tokens that can be harvested from the yvToken vault
     */
    function harvestable() external view returns (uint256 result) {
        result = yvToken.maxWithdraw(address(this));
    }

    /**
     * @notice Gets the asset token associated to the strategy
     */
    function asset() public view returns (IERC20) {
        return IERC20(contractAddress);
    }

    /**
     * @notice Deposits tokens into the yvToken vault or queues tokens if the 'depositThreshold' has not been met yet.
     * @dev This function is called when the user calls the YieldBox deposit function.
     * @param amount The amount of tokens to deposit
     */
    function _deposited(
        uint256 amount
    ) internal override nonReentrant notDepositPaused {
        // Assume that YieldBox already transferred the tokens to this address
        uint256 queued = _queuedTokens();

        // If the amount of tokens is greater than the threshold, a deposit operation is performed in the yvToken vault.
        if (queued >= depositThreshold) {
            IERC20 token = asset();
            token.safeApprove(address(yvToken), queued);
            // Since there is no a minShares parameter, we can't check the shares amount to avoid issues.
            uint256 shares = yvToken.deposit(queued, address(this));
            // slither-disable-next-line incorrect-equality
            if (shares == 0) revert DepositFailed(address(yvToken), address(this), queued);
            emit AmountDeposited(queued);
            return;
        }
        emit AmountQueued(amount);
    }

    /**
     * @notice Withdraws tokens from the yvToken vault.
     * @dev This function is called when the user calls the YieldBox withdraw function.
     * @param to The address where the tokens will be sent
     * @param amount The amount of tokens to withdraw
     */
    function _withdraw(
        address to,
        uint256 amount
    ) internal override nonReentrant notWithdrawPaused {
        uint256 queued = _queuedTokens();
        // If the amount requested is less than the amount queued, transfer the tokens.
        IERC20 token = asset();
        if (amount <= queued) {
            token.safeTransfer(to, amount);
            emit AmountWithdrawn(to, amount);
            return;
        }
        // Total amount of token that can be withdrawn from the pool
        uint256 maxWithdraw = yvToken.maxWithdraw(address(this));

        // If max withdraw is less than the amount requested, revert.
        if (maxWithdraw < amount) revert NotEnough(maxWithdraw, amount);

        // Withdraw from the pool.
        uint256 sharesWithdrawn = yvToken.withdraw(
            amount,
            address(this),
            address(this)
        );
        // If no shares were withdrawn, revert.
        if (sharesWithdrawn == 0)
            revert WithdrawFailed(address(yvToken), address(this), amount);

        // Transfer the requested amount
        token.safeTransfer(to, amount);
        emit AmountWithdrawn(to, amount);
    }

    /**
     * @notice Returns the amount of tokens that are queued in the contract.
     * @dev This is used to know the amount of tokens that are waiting to be deposited in the yvToken vault.
     */
    function _queuedTokens() internal view returns (uint256) {
        IERC20 token = asset();
        return token.balanceOf(address(this));
    }

    /**
     * @notice Returns the amount of tokens in the yvVault plus the queued amount that can be withdrawn from the contract
     */
    function _currentBalance() internal view override returns (uint256 amount) {
        uint256 tokensMaxWithdraw = yvToken.maxWithdraw(address(this));
        return tokensMaxWithdraw + _queuedTokens();
    }
}
