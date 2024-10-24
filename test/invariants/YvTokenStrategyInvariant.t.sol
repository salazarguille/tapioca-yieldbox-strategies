// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.22;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {EnumerableSet} from "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";
import {IWrappedNative} from "yieldbox/interfaces/IWrappedNative.sol";
import {IStrategy} from "yieldbox/interfaces/IStrategy.sol";
import {YieldBox, TokenType} from "yieldbox/YieldBox.sol";
import {YieldBoxURIBuilder} from "yieldbox/YieldBoxURIBuilder.sol";
import {Pearlmit} from "tap-utils/pearlmit/Pearlmit.sol";
import {Cluster} from "tap-utils/Cluster/Cluster.sol";
import {YvTokenStrategy} from "../../contracts/yvToken/YvTokenStrategy.sol";
import {Test} from "forge-std/Test.sol";
import {IVault} from "../../contracts/interfaces/yearnv3/IVault.sol";
import {YvTokenStrategyHandler} from "./handlers/YvTokenStrategyHandler.sol";
import {YvTokenStrategyManager} from "./managers/YvTokenStrategyManager.sol";

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
 * @dev It is executed in a Ethereum mainnet fork environment.
 */
contract YvTokenStrategyInvariantTest is Test {
    using EnumerableSet for EnumerableSet.AddressSet;

    /**
     * @dev The RPC URL environment variable for the Ethereum mainnet fork
     */
    string constant RPC_URL = "RPC_URL";
    /**
     * @dev The total number of handlers
     */
    uint256 private constant TOTAL_HANDLERS = 2;
    /**
     * @dev The default depositor private key
     */
    uint256 private constant DEFAULT_DEPOSITOR_PK =
        999888777666555444333222111000999888777666555444333222111;

    /**
     * @dev The WETH address
     */
    address private constant WETH =
        address(0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2);
    /**
     * @dev The DAI address
     */
    IERC20 private constant DAI =
        IERC20(address(0x6B175474E89094C44Da98b954EedeAC495271d0F));
    /**
     * @dev The DAI whale address
     */
    address private constant DAI_WHALE =
        address(0xf6e72Db5454dd049d0788e411b06CfAF16853042);
    /**
     * @dev The yvDAI Yearn Finance vault address
     */
    IVault private constant YV_DAI =
        IVault(address(0x028eC7330ff87667b6dfb0D94b954c820195336c));

    EnumerableSet.AddressSet private tokens;
    uint256 private forkId;
    address private owner;
    uint256 private initialDepositThreshold;
    YvTokenStrategyHandler[] private handlers;
    YvTokenStrategyManager public manager;

    /**
     * @dev It deploys the contracts needed for the test.
     */
    function setUp() public {
        string memory rpcUrl = vm.envString(RPC_URL);
        forkId = vm.createSelectFork(rpcUrl);
        owner = address(0x1234567890987654321);
        initialDepositThreshold = 10000e18;
        (YieldBox yieldBox, Cluster cluster, ) = _deployTapiocaContracts(owner);
        handlers = _deployHandlersFor(
            owner,
            yieldBox,
            cluster,
            DAI_WHALE,
            DAI,
            YV_DAI,
            "yvDAIStrategy",
            initialDepositThreshold
        );
        tokens.add(address(DAI));

        vm.label(address(DAI), "DAI");
        vm.label(DAI_WHALE, "DAI_WHALE");
        vm.label(address(YV_DAI), "yvDAI");

        manager = new YvTokenStrategyManager(handlers, DEFAULT_DEPOSITOR_PK);
        targetContract(address(manager));
    }

    function invariant_total_deposited_assets_ge_total_withdrawn_assets()
        external
    {
        address[] memory _tokens = tokens.values();
        uint256 tokensLength = _tokens.length;
        for (uint256 i = 0; i < tokensLength; i++) {
            address token = _tokens[i];
            assertGe(
                manager.totalDepositedTokens(token),
                manager.totalWithdrawnTokens(token),
                "Invalid total deposited tokens ge total withdrawn tokens"
            );
        }
    }

    function invariant_total_deposited_shares_ge_total_withdrawn_shares()
        external
    {
        address[] memory _tokens = tokens.values();
        uint256 tokensLength = _tokens.length;
        for (uint256 i = 0; i < tokensLength; i++) {
            address token = _tokens[i];
            assertGe(
                manager.totalDepositedShares(token),
                manager.totalWithdrawnShares(token),
                "Invalid total deposited shares ge total withdrawn shares"
            );
        }
    }

    function _deployTapiocaContracts(
        address _owner
    ) internal returns (YieldBox yieldBox, Cluster cluster, Pearlmit pearlmit) {
        cluster = new Cluster(1, _owner);
        pearlmit = new Pearlmit("Pearlmit", "1", address(this), 0);
        yieldBox = new YieldBox(
            IWrappedNative(WETH),
            new YieldBoxURIBuilder(),
            pearlmit,
            address(this)
        );
        vm.label(address(yieldBox), "yieldBox");
        vm.label(address(pearlmit), "pearlmit");
        vm.label(address(cluster), "cluster");
    }

    function _deployHandlersFor(
        address _owner,
        YieldBox _yieldBox,
        Cluster _cluster,
        address _tokenWhale,
        IERC20 _token,
        IVault _yvToken,
        string memory _strategyLabel,
        uint256 _initialDepositThreshold
    ) internal returns (YvTokenStrategyHandler[] memory) {
        vm.startPrank(_owner);
        YvTokenStrategy strategy = new YvTokenStrategy(
            address(_yieldBox),
            address(_cluster),
            address(_token),
            address(_yvToken),
            _owner,
            _initialDepositThreshold
        );
        uint256 assetId = _yieldBox.registerAsset(
            TokenType.ERC20,
            address(_token),
            IStrategy(address(strategy)),
            0
        );
        require(assetId > 0, "Asset id is 0");
        vm.label(address(strategy), _strategyLabel);

        YvTokenStrategyHandler[]
            memory _handlers = new YvTokenStrategyHandler[](TOTAL_HANDLERS);
        for (uint256 i = 0; i < TOTAL_HANDLERS; i++) {
            YvTokenStrategyHandler handler = new YvTokenStrategyHandler(
                _tokenWhale,
                strategy,
                assetId
            );
            vm.label(
                address(handler),
                string(abi.encodePacked("handler_", i, "_", assetId))
            );
            _handlers[i] = handler;
        }
        vm.stopPrank();
        return _handlers;
    }
}
