// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.22;

/*
████████╗ █████╗ ██████╗ ██╗ ██████╗  ██████╗ █████╗ 
╚══██╔══╝██╔══██╗██╔══██╗██║██╔═══██╗██╔════╝██╔══██╗
   ██║   ███████║██████╔╝██║██║   ██║██║     ███████║
   ██║   ██╔══██║██╔═══╝ ██║██║   ██║██║     ██╔══██║
   ██║   ██║  ██║██║     ██║╚██████╔╝╚██████╗██║  ██║
   ╚═╝   ╚═╝  ╚═╝╚═╝     ╚═╝ ╚═════╝  ╚═════╝╚═╝  ╚═╝
*/
/**
 * @title Errors
 * @author Guillermo Salazar
 * @notice Contract that defines the errors for the contracts.
 */
abstract contract Errors {
    /**
     * @notice Emitted when the token is not valid
     * @param _token the token address
     */
    error TokenNotValid(address _token);
    /**
     * @notice Emitted when the amount is not valid
     * @param _amount the amount
     */
    error AmountNotValid(uint256 _amount);
    /**
     * @notice Emitted when the tokens do not match
     * @param _token1 the first token address
     * @param _token2 the second token address
     */
    error TokensNotMatch(address _token1, address _token2);
    /**
     * @notice Emitted when the sender is not authorized to pause the contract
     * @param _sender the sender address
     */
    error PauserNotAuthorized(address _sender);
    /**
     * @notice Emitted when the address is not valid.
     * @param _address the address
     */
    error AddressNotValid(address _address);
    /**
     * @notice Emitted when the deposit is paused
     */
    error DepositPaused();
    /**
     * @notice Emitted when the withdraw is paused
     */
    error WithdrawPaused();
    /**
     * @notice Emitted when the amount is not enough
     * @param _required the required amount
     * @param _available the available amount
     */
    error NotEnough(uint256 _required, uint256 _available);
    /**
     * @notice Emitted when the transfer failed
     * @param _token the token address
     * @param _to the recipient address
     * @param _amount the amount
     */
    error TransferFailed(address _token, address _to, uint256 _amount);
    /**
     * @notice Emitted when the deposit failed
     * @param _token the token address
     * @param _from the sender address
     * @param _amount the amount
     */
    error DepositFailed(address _token, address _from, uint256 _amount);
    /**
     * @notice Emitted when the withdraw failed
     * @param _vault the vault address
     * @param _to the recipient address
     * @param _amount the amount
     */
    error WithdrawFailed(address _vault, address _to, uint256 _amount);
    /**
     * @notice Emitted when the address is empty
     */
    error EmptyAddress();
    /**
     * @notice Emitted when the amount is empty
     */
    error EmptyAmount();
    /**
     * @notice Emitted when the value is not valid
     * @param _value the value
     */
    error ValueNotValid(uint256 _value);
}
