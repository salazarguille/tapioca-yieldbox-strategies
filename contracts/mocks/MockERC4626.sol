// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.22;

import {ERC4626} from "@openzeppelin/contracts/token/ERC20/extensions/ERC4626.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
 * @title MockERC4626
 * @author Guillermo Salazar
 * @notice Mock contract to be used in the tests
 */
contract MockERC4626 is ERC4626 {
    constructor(
        IERC20 _asset
    ) ERC4626(_asset) ERC20("MockERC4626", "MERC4626") {}
}
