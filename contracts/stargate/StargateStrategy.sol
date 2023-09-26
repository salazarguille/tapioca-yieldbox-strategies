// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

import "@boringcrypto/boring-solidity/contracts/BoringOwnable.sol";
import "@boringcrypto/boring-solidity/contracts/interfaces/IERC20.sol";
import "@boringcrypto/boring-solidity/contracts/libraries/BoringERC20.sol";

import "tapioca-sdk/dist/contracts/YieldBox/contracts/strategies/BaseStrategy.sol";
import "../../tapioca-periph/contracts/interfaces/ISwapper.sol";

import "./interfaces/IRouter.sol";
import "./interfaces/IRouterETH.sol";
import "./interfaces/ILPStaking.sol";
import "../../tapioca-periph/contracts/interfaces/IOracle.sol";
import "../../tapioca-periph/contracts/interfaces/INative.sol";

/*

__/\\\\\\\\\\\\\\\_____/\\\\\\\\\_____/\\\\\\\\\\\\\____/\\\\\\\\\\\_______/\\\\\_____________/\\\\\\\\\_____/\\\\\\\\\____        
 _\///////\\\/////____/\\\\\\\\\\\\\__\/\\\/////////\\\_\/////\\\///______/\\\///\\\________/\\\////////____/\\\\\\\\\\\\\__       
  _______\/\\\________/\\\/////////\\\_\/\\\_______\/\\\_____\/\\\_______/\\\/__\///\\\____/\\\/____________/\\\/////////\\\_      
   _______\/\\\_______\/\\\_______\/\\\_\/\\\\\\\\\\\\\/______\/\\\______/\\\______\//\\\__/\\\_____________\/\\\_______\/\\\_     
    _______\/\\\_______\/\\\\\\\\\\\\\\\_\/\\\/////////________\/\\\_____\/\\\_______\/\\\_\/\\\_____________\/\\\\\\\\\\\\\\\_    
     _______\/\\\_______\/\\\/////////\\\_\/\\\_________________\/\\\_____\//\\\______/\\\__\//\\\____________\/\\\/////////\\\_   
      _______\/\\\_______\/\\\_______\/\\\_\/\\\_________________\/\\\______\///\\\__/\\\_____\///\\\__________\/\\\_______\/\\\_  
       _______\/\\\_______\/\\\_______\/\\\_\/\\\______________/\\\\\\\\\\\____\///\\\\\/________\////\\\\\\\\\_\/\\\_______\/\\\_ 
        _______\///________\///________\///__\///______________\///////////_______\/////_____________\/////////__\///________\///__
*/

//TODO: decide if we need to start with ETH and wrap it into WETH; stargate allows ETH. not WETH, while others allow WETH, not ETH
//TODO: handle rewards deposits to yieldbox

//Wrapped-native strategy for Stargate
contract StargateStrategy is BaseERC20Strategy, BoringOwnable, ReentrancyGuard {
    using BoringERC20 for IERC20;

    // ************ //
    // *** VARS *** //
    // ************ //
    IERC20 public immutable wrappedNative;
    ISwapper public swapper;
    address public stgEthPool;

    IRouterETH public immutable addLiquidityRouter;
    IRouter public immutable router;
    ILPStaking public immutable lpStaking;

    uint256 public lpStakingPid;
    uint256 public lpRouterPid;
    IERC20 public stgNative; //ex: stEth
    IERC20 public stgTokenReward;

    bool public paused;

    /// @notice Queues tokens up to depositThreshold
    /// @dev When the amount of tokens is greater than the threshold, a deposit operation to Stargate is performed
    uint256 public depositThreshold;

    bytes public defaultSwapData;

    IOracle public oracle;
    bytes public oracleData;

    uint256 private _slippage = 50;

    // ************** //
    // *** EVENTS *** //
    // ************** //
    event MultiSwapper(address indexed _old, address indexed _new);
    event DepositThreshold(uint256 _old, uint256 _new);
    event AmountQueued(uint256 amount);
    event AmountDeposited(uint256 amount);
    event AmountWithdrawn(address indexed to, uint256 amount);

    constructor(
        IYieldBox _yieldBox,
        address _token,
        address _ethRouter,
        address _lpStaking,
        uint256 _stakingPid,
        address _lpToken,
        address _swapper,
        address _stgEthPool,
        address _oracle,
        bytes memory _oracleData
    ) BaseERC20Strategy(_yieldBox, _token) {
        wrappedNative = IERC20(_token);
        swapper = ISwapper(_swapper);
        stgEthPool = _stgEthPool;

        addLiquidityRouter = IRouterETH(_ethRouter);
        lpStaking = ILPStaking(_lpStaking);
        lpStakingPid = _stakingPid;

        router = IRouter(addLiquidityRouter.stargateRouter());
        lpRouterPid = addLiquidityRouter.poolId();

        stgNative = IERC20(_lpToken);
        stgNative.approve(_lpStaking, 0);
        stgNative.approve(_lpStaking, type(uint256).max);
        stgNative.approve(address(router), 0);
        stgNative.approve(address(router), type(uint256).max);

        stgTokenReward = IERC20(lpStaking.stargate());

        stgTokenReward.approve(_swapper, 0);
        stgTokenReward.approve(_swapper, type(uint256).max);

        oracle = IOracle(_oracle);
        oracleData = _oracleData;
    }

    // ********************** //
    // *** VIEW FUNCTIONS *** //
    // ********************** //
    /// @notice Returns the name of this strategy
    function name() external pure override returns (string memory name_) {
        return "Stargate";
    }

    /// @notice Returns the description of this strategy
    function description()
        external
        pure
        override
        returns (string memory description_)
    {
        return "Stargate strategy for wrapped native assets";
    }

    /// @notice returns compounded amounts in wrappedNative
    function compoundAmount() public view returns (uint256 result) {
        uint256 claimable = lpStaking.pendingStargate(
            lpStakingPid,
            address(this)
        );
        result = 0;
        if (claimable > 0) {
            ISwapper.SwapData memory swapData = swapper.buildSwapData(
                address(stgTokenReward),
                address(wrappedNative),
                claimable,
                0,
                false,
                false
            );
            result = swapper.getOutputAmount(swapData, "");
            result = result - (result * _slippage) / 10_000; //0.25%
        }
    }

    // *********************** //
    // *** OWNER FUNCTIONS *** //
    // *********************** //
    /// @notice sets the default swap data
    /// @param _data the new data
    function setDefaultSwapData(bytes calldata _data) external onlyOwner {
        defaultSwapData = _data;
    }

    /// @notice updates the pause state
    /// @param _val the new state
    function updatePaused(bool _val) external onlyOwner {
        paused = _val;
    }

    /// @notice sets the slippage used in swap operations
    /// @param _val the new slippage amount
    function setSlippage(uint256 _val) external onlyOwner {
        _slippage = _val;
    }

    /// @notice rescues unused ETH from the contract
    /// @param amount the amount to rescue
    /// @param to the recipient
    function rescueEth(uint256 amount, address to) external onlyOwner {
        (bool success, ) = to.call{value: amount}("");
        require(success, "StargateStrategy: transfer failed.");
    }

    /// @notice Sets the deposit threshold
    /// @param amount The new threshold amount
    function setDepositThreshold(uint256 amount) external onlyOwner {
        emit DepositThreshold(depositThreshold, amount);
        depositThreshold = amount;
    }

    /// @notice Sets the Swapper address
    /// @param _swapper The new swapper address
    function setMultiSwapper(address _swapper) external onlyOwner {
        emit MultiSwapper(address(swapper), _swapper);
        stgTokenReward.approve(address(swapper), 0);
        swapper = ISwapper(_swapper);
        stgTokenReward.approve(_swapper, type(uint256).max);
    }

    // ************************ //
    // *** PUBLIC FUNCTIONS *** //
    // ************************ //
    function compound(bytes memory dexData) public {
        uint256 unclaimed = lpStaking.pendingStargate(
            lpStakingPid,
            address(this)
        );

        if (unclaimed > 0) {
            lpStaking.deposit(lpStakingPid, 0);
        }

        uint256 stgBalanceAfter = stgTokenReward.balanceOf(address(this));
        if (stgBalanceAfter > 0) {
            ISwapper.SwapData memory swapData = swapper.buildSwapData(
                address(stgTokenReward),
                address(wrappedNative),
                stgBalanceAfter,
                0,
                false,
                false
            );

            // already has slippage due to Uni tick rounding down ( at least 0.01% )
            uint256 calcAmount = swapper.getOutputAmount(swapData, dexData);
            uint256 minAmount = calcAmount - (calcAmount * _slippage) / 10_000;
            swapper.swap(swapData, minAmount, address(this), dexData);

            uint256 queued = wrappedNative.balanceOf(address(this));
            _stake(queued);
        }
    }

    /// @notice withdraws everythig from the strategy
    function emergencyWithdraw() external onlyOwner returns (uint256 result) {
        paused = true;
        compound(defaultSwapData);

        (uint256 toWithdraw, ) = lpStaking.userInfo(
            lpStakingPid,
            address(this)
        );

        lpStaking.withdraw(lpStakingPid, toWithdraw);
        router.instantRedeemLocal(
            uint16(lpRouterPid),
            toWithdraw,
            address(this)
        );
        result = address(this).balance;
        INative(address(wrappedNative)).deposit{value: result}();
    }

    // ************************* //
    // *** PRIVATE FUNCTIONS *** //
    // ************************* //
    /// @dev queries 'getUserAccountData' from Stargate and gets the total collateral
    function _currentBalance() internal view override returns (uint256 amount) {
        uint256 queued = wrappedNative.balanceOf(address(this));
        (amount, ) = lpStaking.userInfo(lpStakingPid, address(this));

        //amount is the LP token; convert it to WETH
        (bool success, uint256 oraclePrice) = oracle.peek(oracleData);
        require(success, "Stargat: oracle call failed");
        amount = (amount * oraclePrice) / 1e18;

        uint256 claimableRewards = compoundAmount();
        return amount + queued + claimableRewards;
    }

    /// @dev deposits to Stargate or queues tokens if the 'depositThreshold' has not been met yet
    ///      - when depositing to Stargate, aToken is minted to this contract
    function _deposited(uint256 amount) internal override nonReentrant {
        require(!paused, "Stargate: paused");

        uint256 queued = wrappedNative.balanceOf(address(this));
        if (queued > depositThreshold) {
            _stake(queued);
        }
        emit AmountQueued(amount);
    }

    function _stake(uint256 amount) private {
        INative(address(wrappedNative)).withdraw(amount);

        addLiquidityRouter.addLiquidityETH{value: amount}();
        uint256 toStake = stgNative.balanceOf(address(this));
        lpStaking.deposit(lpStakingPid, toStake);
        emit AmountDeposited(amount);
    }

    /// @dev burns stgToken in exchange of Native and withdraws from Stargate Staking & Router
    function _withdraw(
        address to,
        uint256 amount
    ) internal override nonReentrant {
        uint256 available = _currentBalance();
        require(available >= amount, "StargateStrategy: amount not valid");

        uint256 queued = wrappedNative.balanceOf(address(this));
        if (amount > queued) {
            compound(defaultSwapData);
            uint256 toWithdraw = amount - queued;
            lpStaking.withdraw(lpStakingPid, toWithdraw);
            router.instantRedeemLocal(
                uint16(lpRouterPid),
                toWithdraw,
                address(this)
            );

            INative(address(wrappedNative)).deposit{
                value: address(this).balance
            }();
        }

        require(
            amount <= wrappedNative.balanceOf(address(this)),
            "Stargate: not enough"
        );
        wrappedNative.safeTransfer(to, amount);

        queued = wrappedNative.balanceOf(address(this));
        if (queued > 0) {
            _stake(queued);
        }

        emit AmountWithdrawn(to, amount);
    }

    receive() external payable {}
}
