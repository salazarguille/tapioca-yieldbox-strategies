// SPDX-License-Identifier: MIT
pragma solidity 0.8.22;

import {Test} from "forge-std/Test.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {YvTokenStrategy} from "../../../contracts/yvToken/YvTokenStrategy.sol";
import {Errors} from "../../../contracts/utils/Errors.sol";
import {MockDecimalsERC20} from "../../../contracts/mocks/MockDecimalsERC20.sol";
import {MockERC4626} from "../../../contracts/mocks/MockERC4626.sol";
import {IVault} from "../../../contracts/interfaces/yearnv3/IVault.sol";

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
 * @notice Tests the YvTokenStrategy.constructor.
 */
contract YvTokenStrategyConstructorTest is Test {
    IERC20 public token;
    IVault public yvToken;

    function setUp() external {
        token = IERC20(address(new MockDecimalsERC20("MockToken", "MT", 18)));
        yvToken = IVault(address(new MockERC4626(token)));
    }

    function test_RevertWhen_The_yieldBoxIsEmpty(
        address _cluster,
        address _token,
        address _yvToken,
        address _owner,
        uint256 _depositThreshold
    ) external {
        vm.assume(_cluster != address(0));
        vm.assume(_token != address(0));
        vm.assume(_yvToken != address(0));
        vm.assume(_owner != address(0));
        vm.assume(_depositThreshold > 0);
        address yieldBox = address(0);

        vm.expectRevert(abi.encodeWithSelector(Errors.AddressNotValid.selector, yieldBox));
        new YvTokenStrategy(yieldBox, _cluster, _token, _yvToken, _owner, _depositThreshold);
    }

    function test_RevertWhen_The_clusterIsEmpty(
        address _yieldBox,
        address _token,
        address _yvToken,
        address _owner,
        uint256 _depositThreshold
    ) external {
        vm.assume(_yieldBox != address(0));
        vm.assume(_token != address(0));
        vm.assume(_yvToken != address(0));
        vm.assume(_owner != address(0));
        vm.assume(_depositThreshold > 0);
        address cluster = address(0);

        vm.expectRevert(abi.encodeWithSelector(Errors.AddressNotValid.selector, cluster));
        new YvTokenStrategy(_yieldBox, cluster, _token, _yvToken, _owner, _depositThreshold);
    }

    function test_RevertWhen_The_yvTokenIsEmpty(
        address _yieldBox,
        address _cluster,
        address _token,
        address _owner,
        uint256 _depositThreshold
    )
        external
    {
        vm.assume(_yieldBox != address(0));
        vm.assume(_cluster != address(0));
        vm.assume(_token != address(0));
        vm.assume(_owner != address(0));
        vm.assume(_depositThreshold > 0);
        address _yvToken = address(0);

        vm.expectRevert(abi.encodeWithSelector(Errors.TokenNotValid.selector, _yvToken));
        new YvTokenStrategy(_yieldBox, _cluster, _token, _yvToken, _owner, _depositThreshold);
    }

    function test_RevertWhen_The_ownerIsEmpty(
        address _yieldBox,
        address _cluster,
        address _token,
        address _yvToken,
        uint256 _depositThreshold
    ) external {
        vm.assume(_yieldBox != address(0));
        vm.assume(_cluster != address(0));
        vm.assume(_token != address(0));
        vm.assume(_yvToken != address(0));
        vm.assume(_depositThreshold > 0);
        address owner = address(0);

        vm.expectRevert(abi.encodeWithSelector(Errors.AddressNotValid.selector, owner));
        new YvTokenStrategy(_yieldBox, _cluster, _token, _yvToken, owner, _depositThreshold);
    }

    function test_RevertWhen_TheDepositThresholdIsZero(address _yieldBox, address _cluster, address _owner) external {
        vm.assume(_yieldBox != address(0));
        vm.assume(_cluster != address(0));
        vm.assume(_owner != address(0));
        uint256 _depositThreshold = 0;

        vm.expectRevert(abi.encodeWithSelector(Errors.AmountNotValid.selector, _depositThreshold));
        new YvTokenStrategy(_yieldBox, _cluster, address(token), address(yvToken), _owner, _depositThreshold);
    }

    modifier givenTokenIsNotEmpty() {
        _;
    }

    function test_RevertWhen_TheTokenDecimalsIsNotEqualTo18(
        address _yieldBox,
        address _cluster,
        address _owner,
        uint256 _depositThreshold,
        uint8 _decimals
    ) external givenTokenIsNotEmpty {
        vm.assume(_decimals > 0);
        vm.assume(_decimals != 18);
        vm.assume(_yieldBox != address(0));
        vm.assume(_cluster != address(0));
        vm.assume(_owner != address(0));
        vm.assume(_depositThreshold > 0);

        address _token = address(new MockDecimalsERC20("MockToken", "MT", _decimals));
        address _yvToken = address(new MockERC4626(IERC20(_token)));

        vm.expectRevert(abi.encodeWithSelector(Errors.ValueNotValid.selector, _decimals));
        new YvTokenStrategy(_yieldBox, _cluster, _token, _yvToken, _owner, _depositThreshold);
    }

    modifier given_yvTokensAssetIsNotEmpty() {
        _;
    }

    function test_RevertWhen__tokenIsEmpty(
        address _yieldBox,
        address _cluster,
        address _owner,
        uint256 _depositThreshold
    ) external given_yvTokensAssetIsNotEmpty {
        vm.assume(_yieldBox != address(0));
        vm.assume(_cluster != address(0));
        vm.assume(_owner != address(0));
        vm.assume(_depositThreshold > 0);
        address _token = address(0);

        vm.expectRevert(abi.encodeWithSelector(Errors.TokenNotValid.selector, _token));
        new YvTokenStrategy(
            _yieldBox,
            _cluster,
            _token,
            address(yvToken),
            _owner,
            _depositThreshold
        );
    }

    modifier when_tokenIsNotEmpty() {
        _;
    }

    function test_Given_tokenIsEqualTo_yvTokensAsset(
        address _yieldBox,
        address _cluster,
        address _owner,
        uint256 _depositThreshold
    ) external given_yvTokensAssetIsNotEmpty when_tokenIsNotEmpty {
        vm.assume(_yieldBox != address(0));
        vm.assume(_cluster != address(0));
        vm.assume(_owner != address(0));
        vm.assume(_depositThreshold > 0);

        vm.startPrank(_owner);
        YvTokenStrategy strategy = new YvTokenStrategy(
            _yieldBox,
            _cluster,
            address(token),
            address(yvToken),
            _owner,
            _depositThreshold
        );
        vm.stopPrank();

        assertEq(address(strategy.yieldBox()), _yieldBox, "Yield box is not valid");
        assertEq(address(strategy.asset()), address(token), "Token is not valid");
        assertEq(address(strategy.yvToken()), address(yvToken), "yvToken is not valid");
        assertEq(strategy.name(), "tyvDai", "Name is not valid");
        assertEq(strategy.description(), "yvDai strategy for dai assets", "Description is not valid");
        assertEq(strategy.depositThreshold(), _depositThreshold, "Deposit threshold is not valid");
    }

    function test_RevertGiven__tokenIsNotEqualTo_yvTokensAsset(
        address _yieldBox,
        address _cluster,
        address _token,
        address _owner,
        uint256 _depositThreshold
    ) external given_yvTokensAssetIsNotEmpty when_tokenIsNotEmpty {
        vm.assume(_yieldBox != address(0));
        vm.assume(_cluster != address(0));
        vm.assume(_token != address(0));
        vm.assume(_token != address(token));
        vm.assume(_owner != address(0));
        vm.assume(_depositThreshold > 0);

        vm.expectRevert(abi.encodeWithSelector(Errors.TokensNotMatch.selector, address(token), _token));
        new YvTokenStrategy(
            _yieldBox,
            _cluster,
            _token,
            address(yvToken),
            _owner,
            _depositThreshold
        );
    }
}
