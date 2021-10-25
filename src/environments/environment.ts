// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  smartContractLink:"https://bscscan.com/address/0xede5020492be8e265db6141cb0a1d2df9dbae9bb#code",
  smartContractAddress: "0xede5020492be8e265db6141cb0a1d2df9dbae9bb",
  contractAbi:[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"AccidentallySentBNBWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"AccidentallySentTokenWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"bool","name":"isExcluded","type":"bool"}],"name":"ExcludeFromFees","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address[]","name":"accounts","type":"address[]"},{"indexed":false,"internalType":"bool","name":"isExcluded","type":"bool"}],"name":"ExcludeMultipleAccountsFromFees","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"feeType","type":"string"},{"indexed":false,"internalType":"uint8[]","name":"oldRewardsFees","type":"uint8[]"},{"indexed":false,"internalType":"uint8[]","name":"newRewardsFees","type":"uint8[]"},{"indexed":false,"internalType":"uint8","name":"oldLiquidityFee","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"newLiquidityFee","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"oldMarketingFee","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"newMarketingFee","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"oldBurnFee","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"newBurnFee","type":"uint8"}],"name":"FeesChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"newValue","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"oldValue","type":"uint256"}],"name":"GasForProcessingUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldMarketingWallet","type":"address"},{"indexed":true,"internalType":"address","name":"newMarketingWallet","type":"address"}],"name":"MarketingWalletChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldMaxWalletAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newMaxWalletAmount","type":"uint256"}],"name":"MaxWalletAmountChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"iterations","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"claims","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lastProcessedIndex","type":"uint256"},{"indexed":true,"internalType":"bool","name":"automatic","type":"bool"},{"indexed":false,"internalType":"uint256","name":"gas","type":"uint256"},{"indexed":true,"internalType":"address","name":"processor","type":"address"}],"name":"ProcessedDividendTracker","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"rewardToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokensSwapped","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"SendDividends","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"pair","type":"address"},{"indexed":true,"internalType":"bool","name":"value","type":"bool"}],"name":"SetAutomatedMarketMakerPair","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldSwapAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newSwapAmount","type":"uint256"}],"name":"SwapAmountChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokensSwapped","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ethReceived","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensIntoLiquidity","type":"uint256"}],"name":"SwapAndLiquify","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newAddress","type":"address"},{"indexed":true,"internalType":"address","name":"oldAddress","type":"address"}],"name":"UpdateDividendManager","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newAddress","type":"address"},{"indexed":true,"internalType":"address","name":"oldAddress","type":"address"}],"name":"UpdateUniswapV2Router","type":"event"},{"inputs":[],"name":"BURN_ADDRESS","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"BUY","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CAKE","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SELL","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"automatedMarketMakerPairs","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"bool","name":"blacklist","type":"bool"}],"name":"blacklistAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"burnFee","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"checkIfExcludedFromFees","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"dividendManager","outputs":[{"internalType":"contract DividendManager","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"dividendTokenBalancesOf","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromAllDividends","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"bool","name":"excluded","type":"bool"}],"name":"excludeFromFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"bool[]","name":"excluded","type":"bool[]"}],"name":"excludeFromSelectedDividends","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"accounts","type":"address[]"},{"internalType":"bool","name":"excluded","type":"bool"}],"name":"excludeMultipleAccountsFromFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"gasForProcessing","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"dividendTrackerID","type":"uint256"}],"name":"getAccountDividendsInfo","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"int256","name":"","type":"int256"},{"internalType":"int256","name":"","type":"int256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"uint256","name":"dividendTrackerID","type":"uint256"}],"name":"getAccountDividendsInfoAtIndex","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"int256","name":"","type":"int256"},{"internalType":"int256","name":"","type":"int256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getClaimWaits","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLastProcessedIndexes","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNumberOfDividendTokenHolders","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"feeType","type":"uint8"}],"name":"getRewardTokenPercentages","outputs":[{"internalType":"uint256","name":"doughFeePercentage","type":"uint256"},{"internalType":"uint256","name":"cakeFeePercentage","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSumBuys","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSumSells","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalDividendsDistributed","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isBlacklisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"liquidityFee","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"liquidityTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenAmount","type":"uint256"}],"name":"manuallyTriggerSwap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"marketingFee","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketingTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketingWalletAddress","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxWalletAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"gas","type":"uint256"}],"name":"processDividendTrackers","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"setAntiBotStopAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"pair","type":"address"},{"internalType":"bool","name":"value","type":"bool"}],"name":"setAutomatedMarketMakerPair","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8[]","name":"_rewardsFee","type":"uint8[]"},{"internalType":"uint8","name":"_liquidityFee","type":"uint8"},{"internalType":"uint8","name":"_marketingFee","type":"uint8"},{"internalType":"uint8","name":"_burnFee","type":"uint8"}],"name":"setBuyFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"wallet","type":"address"}],"name":"setMarketingWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"maxWalletPermille","type":"uint8"}],"name":"setMaxWalletPermille","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8[]","name":"_rewardsFee","type":"uint8[]"},{"internalType":"uint8","name":"_liquidityFee","type":"uint8"},{"internalType":"uint8","name":"_marketingFee","type":"uint8"},{"internalType":"uint8","name":"_burnFee","type":"uint8"}],"name":"setSellFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_swapTokensAtAmount","type":"uint256"}],"name":"setSwapAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapTokensAtAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"transactionBuffer","outputs":[{"internalType":"uint8","name":"start","type":"uint8"},{"internalType":"uint8","name":"end","type":"uint8"},{"internalType":"uint8","name":"size","type":"uint8"},{"internalType":"uint8","name":"maxSize","type":"uint8"},{"internalType":"bool","name":"isInitialised","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniswapV2Pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapV2Router","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"claimWait","type":"uint256[]"}],"name":"updateClaimWaits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAddress","type":"address"}],"name":"updateDividendManager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newValue","type":"uint256"}],"name":"updateGasForProcessing","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAddress","type":"address"}],"name":"updateUniswapV2Router","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"withdrawExcessBNB","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"address","name":"_account","type":"address"}],"name":"withdrawOtherTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"withdrawableDividendsOf","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
