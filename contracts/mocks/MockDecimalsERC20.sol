// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.22;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
 * @title MockDecimalsERC20
 * @author Guillermo Salazar
 * @notice Mock contract to test ERC20 with decimals
 */
contract MockDecimalsERC20 is ERC20 {
    uint8 private _decimals;

    constructor(
        string memory name_,
        string memory symbol_,
        uint8 decimals_
    ) ERC20(name_, symbol_) {
        _decimals = decimals_;
    }

    function decimals() public view virtual override returns (uint8) {
        return _decimals;
    }

    // @dev mint tokens to an account
    // @param account the account to mint to
    // @param amount the amount of tokens to mint
    function mint(address account, uint256 amount) external {
        _mint(account, amount);
    }

    // @dev burn tokens from an account
    // @param account the account to burn tokens for
    // @param amount the amount of tokens to burn
    function burn(address account, uint256 amount) external {
        _burn(account, amount);
    }

    function approve(
        address spender,
        uint256 amount
    ) public virtual override returns (bool) {
        if (amount == type(uint256).max) {
            revert("MockERC20: approving max amount not permitted");
        }
        address owner = _msgSender();
        _approve(owner, spender, amount);
        return true;
    }
}
