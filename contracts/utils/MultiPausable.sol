// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.22;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {ICluster} from "tap-utils/interfaces/periph/ICluster.sol";
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
 * @title MultiPausable
 * @author Guillermo Salazar
 * @notice Contract that allows to pause the deposit and withdraw operations.
 */
abstract contract MultiPausable is Ownable, Errors {
    /**
     * @notice The cluster address
     * @dev It manages the access roles.
     */
    ICluster public immutable cluster;

    /**
     * @notice The pause status for the deposit operations.
     */
    bool public depositPaused;

    /**
     * @notice The pause status for the withdraw operations.
     */
    bool public withdrawPaused;

    /**
     * @notice Pause type enumeration
     */
    enum PauseType {
        Deposit,
        Withdraw
    }

    /**
     * @notice Emitted when the pause status changes
     * @param previous the previous pause status
     * @param current the current pause status
     * @param pauseType the pause type
     */
    event Paused(
        bool indexed previous,
        bool indexed current,
        PauseType indexed pauseType
    );

    /**
     * @notice Modifier to check if the deposit is paused
     */
    modifier notDepositPaused() {
        if (depositPaused) revert DepositPaused();
        _;
    }

    /**
     * @notice Modifier to check if the withdraw is paused
     */
    modifier notWithdrawPaused() {
        if (withdrawPaused) revert WithdrawPaused();
        _;
    }

    /**
     * @notice Create a new MultiPausable contract
     * @dev The cluster address must be valid
     * @param _cluster the cluster address
     */
    constructor(address _cluster) {
        if (_cluster == address(0)) revert AddressNotValid(_cluster);

        cluster = ICluster(_cluster);
    }

    /**
     * @notice Set the pause status for a given pause type.
     * @dev Only a pausable role can call this function.
     * @param _val the new pause status
     * @param _pauseType the pause type
     */
    function setPause(bool _val, PauseType _pauseType) external {
        if (
            !cluster.hasRole(msg.sender, keccak256("PAUSABLE")) &&
            msg.sender != owner()
        ) revert PauserNotAuthorized(msg.sender);

        _setPause(_val, _pauseType);
    }

    /**
     * @notice Updates the pause status for a given pause type.
     * @dev It can be used by inheriting contracts to update the pause status.
     * @param _status the new pause status.
     * @param _pauseType the pause type.
     */
    function _setPause(bool _status, PauseType _pauseType) internal {
        if (_pauseType == PauseType.Deposit) {
            depositPaused = _status;
            emit Paused(depositPaused, _status, _pauseType);
        } else {
            withdrawPaused = _status;
            emit Paused(withdrawPaused, _status, _pauseType);
        }
    }
}
