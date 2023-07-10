import { expect } from 'chai';
import { ethers } from 'hardhat';
import { registerFork } from '../test.utils';
import { loadFixture } from '@nomicfoundation/hardhat-network-helpers';

describe('TricryptoLPStrategy fork test', () => {
    it('should test initial strategy values', async () => {
        const { tricryptoLPStrategy, tricryptoLPGtter, weth, yieldBox } =
            await loadFixture(registerFork);

        const name = await tricryptoLPStrategy.name();
        const description = await tricryptoLPStrategy.description();

        expect(name).eq('Curve-Tricrypto-LP');
        expect(description).eq('Curve-Tricrypto strategy for TricryptoLP');

        const lpGaugeAddress = await tricryptoLPStrategy.lpGauge();
        expect(lpGaugeAddress.toLowerCase()).to.eq(
            process.env.TRICRYPTO_LP_GAUGE?.toLowerCase(),
        );

        const lpGetterAddress = await tricryptoLPStrategy.lpGetter();
        expect(lpGetterAddress.toLowerCase()).to.eq(
            tricryptoLPGtter.address.toLowerCase(),
        );

        const minterAddress = await tricryptoLPStrategy.minter();
        expect(minterAddress.toLowerCase()).to.eq(
            process.env.TRICRYPTO_MINTER?.toLowerCase(),
        );

        const rewardAddress = await tricryptoLPStrategy.rewardToken();
        expect(rewardAddress.toLowerCase()).to.eq(
            process.env.CRV_ADDRESS?.toLowerCase(),
        );

        const yieldBoxAddress = await tricryptoLPStrategy.yieldBox();
        expect(yieldBoxAddress.toLowerCase()).to.eq(
            yieldBox.address.toLowerCase(),
        );

        const currentBalance = await tricryptoLPStrategy.currentBalance();
        expect(currentBalance.eq(0)).to.be.true;

        const queued = await weth.balanceOf(tricryptoLPStrategy.address);
        expect(queued.eq(0)).to.be.true;
    });

    it('should allow setting the deposit threshold', async () => {
        const { tricryptoLPStrategy, weth, yieldBox } = await loadFixture(
            registerFork,
        );

        const currentThreshold = await tricryptoLPStrategy.depositThreshold();

        const newThreshold = ethers.BigNumber.from((1e18).toString()).mul(10);
        await tricryptoLPStrategy.setDepositThreshold(newThreshold);

        const finalThreshold = await tricryptoLPStrategy.depositThreshold();

        expect(currentThreshold).to.not.eq(finalThreshold);
    });

    it('should allow setting lp getter', async () => {
        const {
            tricryptoLPStrategy,
            tricryptoLPGtter,
            deployTricryptoLPGetter,
            weth,
            yieldBox,
        } = await loadFixture(registerFork);

        const currentLpGetter = await tricryptoLPStrategy.lpGetter();
        expect(currentLpGetter.toLowerCase()).to.eq(
            tricryptoLPGtter.address.toLowerCase(),
        );

        const liquidityPoolMock = await (
            await ethers.getContractFactory('TricryptoLiquidityPoolMock')
        ).deploy(weth.address);
        await liquidityPoolMock.deployed();
        const newTricryptoLpGetterDeployment = await deployTricryptoLPGetter(
            liquidityPoolMock.address,
            weth.address,
            weth.address,
            weth.address,
        );
        await tricryptoLPStrategy.setTricryptoLPGetter(
            newTricryptoLpGetterDeployment.tricryptoLPGtter.address,
        );

        const finalLpGetter = await tricryptoLPStrategy.lpGetter();
        expect(finalLpGetter.toLowerCase()).to.eq(
            newTricryptoLpGetterDeployment.tricryptoLPGtter.address.toLowerCase(),
        );
    });

    it('should queue and deposit when threshold is met', async () => {
        const { tricryptoLPStrategy, weth, yieldBox, deployer, binanceWallet } =
            await loadFixture(registerFork);

        const lpGaugeAddress = await tricryptoLPStrategy.lpGauge();
        const lpGaugeContract = await ethers.getContractAt(
            'ITricryptoLPGauge',
            lpGaugeAddress,
        );

        const lpGetterAddress = await tricryptoLPStrategy.lpGetter();
        const lpGetterContract = await ethers.getContractAt(
            'ITricryptoLPGetter',
            lpGetterAddress,
        );

        const lpTokenAddress = await tricryptoLPStrategy.lpToken();
        const lpTokenContract = await ethers.getContractAt(
            '@openzeppelin/contracts/token/ERC20/IERC20.sol:IERC20',
            lpTokenAddress,
        );

        await yieldBox.registerAsset(
            1,
            lpTokenContract.address,
            tricryptoLPStrategy.address,
            0,
        );

        const lpAssetId = await yieldBox.ids(
            1,
            lpTokenContract.address,
            tricryptoLPStrategy.address,
            0,
        );
        const amount = ethers.BigNumber.from((1e18).toString()).mul(10);
        await weth
            .connect(binanceWallet)
            .transfer(deployer.address, amount.mul(10));

        await weth.approve(
            lpGetterContract.address,
            ethers.constants.MaxUint256,
        );
        await lpGetterContract.addLiquidityWeth(amount, 0);

        let lpTokenObtained = await lpTokenContract.balanceOf(deployer.address);
        await tricryptoLPStrategy.setDepositThreshold(
            lpTokenObtained.mul(3).div(2),
        );

        await lpTokenContract.approve(
            yieldBox.address,
            ethers.constants.MaxUint256,
        );
        await yieldBox.depositAsset(
            lpAssetId,
            deployer.address,
            deployer.address,
            lpTokenObtained,
            0,
        );

        let strategyLpBalance = await lpTokenContract.balanceOf(
            tricryptoLPStrategy.address,
        );
        let lpGaugeBalance = await lpGaugeContract.balanceOf(
            tricryptoLPStrategy.address,
        );
        expect(strategyLpBalance.gt(0)).to.be.true;
        expect(lpGaugeBalance.eq(0)).to.be.true;

        await lpGetterContract.addLiquidityWeth(amount, 0);
        lpTokenObtained = await lpTokenContract.balanceOf(deployer.address);
        await yieldBox.depositAsset(
            lpAssetId,
            deployer.address,
            deployer.address,
            lpTokenObtained,
            0,
        );
        strategyLpBalance = await lpTokenContract.balanceOf(
            tricryptoLPStrategy.address,
        );
        lpGaugeBalance = await lpGaugeContract.balanceOf(
            tricryptoLPStrategy.address,
        );
        expect(strategyLpBalance.eq(0)).to.be.true;
        expect(lpGaugeBalance.gt(0)).to.be.true;
    });

    it('should emergency withdraw', async () => {
        const {
            tricryptoLPStrategy,
            weth,
            yieldBox,
            deployer,
            binanceWallet,
            eoa1,
        } = await loadFixture(registerFork);

        const lpGaugeAddress = await tricryptoLPStrategy.lpGauge();
        const lpGaugeContract = await ethers.getContractAt(
            'ITricryptoLPGauge',
            lpGaugeAddress,
        );

        const lpGetterAddress = await tricryptoLPStrategy.lpGetter();
        const lpGetterContract = await ethers.getContractAt(
            'ITricryptoLPGetter',
            lpGetterAddress,
        );

        const lpTokenAddress = await tricryptoLPStrategy.lpToken();
        const lpTokenContract = await ethers.getContractAt(
            '@openzeppelin/contracts/token/ERC20/IERC20.sol:IERC20',
            lpTokenAddress,
        );

        await yieldBox.registerAsset(
            1,
            lpTokenContract.address,
            tricryptoLPStrategy.address,
            0,
        );

        const lpAssetId = await yieldBox.ids(
            1,
            lpTokenContract.address,
            tricryptoLPStrategy.address,
            0,
        );
        const amount = ethers.BigNumber.from((1e18).toString()).mul(10);

        await weth
            .connect(binanceWallet)
            .transfer(deployer.address, amount.mul(10));

        await weth.approve(
            lpGetterContract.address,
            ethers.constants.MaxUint256,
        );
        await lpGetterContract.addLiquidityWeth(amount, 0);

        const lpTokenObtained = await lpTokenContract.balanceOf(
            deployer.address,
        );

        await lpTokenContract.approve(
            yieldBox.address,
            ethers.constants.MaxUint256,
        );
        await yieldBox.depositAsset(
            lpAssetId,
            deployer.address,
            deployer.address,
            lpTokenObtained,
            0,
        );

        let invested = await lpGaugeContract.balanceOf(
            tricryptoLPStrategy.address,
        );
        let strategyLpBalance = await lpTokenContract.balanceOf(
            tricryptoLPStrategy.address,
        );

        expect(strategyLpBalance.eq(0)).true;
        expect(invested.gt(0)).to.be.true;

        await expect(tricryptoLPStrategy.connect(eoa1).emergencyWithdraw()).to
            .be.reverted;

        await tricryptoLPStrategy.emergencyWithdraw();

        invested = await lpGaugeContract.balanceOf(tricryptoLPStrategy.address);
        strategyLpBalance = await lpTokenContract.balanceOf(
            tricryptoLPStrategy.address,
        );
        expect(strategyLpBalance.gt(0)).true;
        expect(invested.eq(0)).to.be.true;
    });
});
