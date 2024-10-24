// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.22;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {Errors} from "./Errors.sol";

/*
████████╗ █████╗ ██████╗ ██╗ ██████╗  ██████╗ █████╗ 
╚══██╔══╝██╔══██╗██╔══██╗██║██╔═══██╗██╔════╝██╔══██╗
   ██║   ███████║██████╔╝██║██║   ██║██║     ███████║
   ██║   ██╔══██║██╔═══╝ ██║██║   ██║██║     ██╔══██║
   ██║   ██║  ██║██║     ██║╚██████╔╝╚██████╗██║  ██║
   ╚═╝   ╚═╝  ╚═╝╚═╝     ╚═╝ ╚═════╝  ╚═════╝╚═╝  ╚═╝
*/
/**
 * @title EthRescuable
 * @author Guillermo Salazar
 * @notice Contract that allows to rescue ETH from the contract.
 */
abstract contract EthRescuable is Ownable, Errors {
    /**
     * @notice The address of the ETH token
     */
    address public constant ETH_TOKEN_ADDRESS =
        0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE;

    /**
     * @notice Emitted when ETH is rescued from the contract.
     * @param to the recipient of the ETH.
     * @param amount the amount of ETH rescued.
     */
    event EthRescued(address indexed to, uint256 indexed amount);

    /**
     * @notice Constructor
     * @param _owner the owner of the contract
     */
    constructor(address _owner) {
        if (_owner == address(0)) revert AddressNotValid(_owner);
        transferOwnership(_owner);
    }

    /**
     * @notice Fallback function to receive ETH
     */
    receive() external payable {}

    /**
     * @notice Rescues unused ETH from the contract
     * @dev only the owner can call this function
     * @dev the recipient must be a valid address
     * @dev the amount must be greater than 0
     * @param amount the amount to rescue
     * @param to the recipient
     */
    function rescueEth(uint256 amount, address to) external onlyOwner {
        if (to == address(0)) revert EmptyAddress();
        if (amount == 0) revert EmptyAmount();
        // slither-disable-next-line reentrancy-events
        (bool success, ) = to.call{value: amount}("");
        if (!success) revert TransferFailed(ETH_TOKEN_ADDRESS, to, amount);
        emit EthRescued(to, amount);
    }
}
