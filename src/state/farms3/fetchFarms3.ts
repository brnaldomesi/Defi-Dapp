import BigNumber from 'bignumber.js'
import erc20 from 'config/abi/erc20.json'
import masterchef3ABI from 'config/abi/masterchef3.json'
import multicall from 'utils/multicall'
import { getMasterChef3Address } from 'utils/addressHelpers'
import farms3Config from 'config/constants/farms3'
import { QuoteToken } from '../../config/constants/types'

const CHAIN_ID = process.env.REACT_APP_CHAIN_ID

const fetchFarms3 = async () => {
  const data = await Promise.all(
    farms3Config.map(async (farm3Config) => {
      const lpAdress = farm3Config.lpAddresses[CHAIN_ID]
      const calls = [
        // Balance of token in the LP contract
        {
          address: farm3Config.tokenAddresses[CHAIN_ID],
          name: 'balanceOf',
          params: [lpAdress],
        },
        // Balance of quote token on LP contract
        {
          address: farm3Config.quoteTokenAdresses[CHAIN_ID],
          name: 'balanceOf',
          params: [lpAdress],
        },
        // Balance of LP tokens in the master chef contract
        {
          address: farm3Config.isTokenOnly ? farm3Config.tokenAddresses[CHAIN_ID] : lpAdress,
          name: 'balanceOf',
          params: [getMasterChef3Address()],
        },
        // Total supply of LP tokens
        {
          address: lpAdress,
          name: 'totalSupply',
        },
        // Token decimals
        {
          address: farm3Config.tokenAddresses[CHAIN_ID],
          name: 'decimals',
        },
        // Quote token decimals
        {
          address: farm3Config.quoteTokenAdresses[CHAIN_ID],
          name: 'decimals',
        },
      ]

      const [
        tokenBalanceLP,
        quoteTokenBlanceLP,
        lpTokenBalanceMC,
        lpTotalSupply,
        tokenDecimals,
        quoteTokenDecimals
      ] = await multicall(erc20, calls)

      let tokenAmount;
      let lpTotalInQuoteToken;
      let tokenPriceVsQuote;
      if(farm3Config.isTokenOnly){
        tokenAmount = new BigNumber(lpTokenBalanceMC).div(new BigNumber(10).pow(tokenDecimals));
        if(farm3Config.tokenSymbol === QuoteToken.BUSD && farm3Config.quoteTokenSymbol === QuoteToken.BUSD){
          tokenPriceVsQuote = new BigNumber(1);
        }else{
          tokenPriceVsQuote = new BigNumber(quoteTokenBlanceLP).div(new BigNumber(tokenBalanceLP));
        }
        lpTotalInQuoteToken = tokenAmount.times(tokenPriceVsQuote);
      }else{
        // Ratio in % a LP tokens that are in staking, vs the total number in circulation
        const lpTokenRatio = new BigNumber(lpTokenBalanceMC).div(new BigNumber(lpTotalSupply))

        // Total value in staking in quote token value
        lpTotalInQuoteToken = new BigNumber(quoteTokenBlanceLP)
          .div(new BigNumber(10).pow(18))
          .times(new BigNumber(2))
          .times(lpTokenRatio)

        // Amount of token in the LP that are considered staking (i.e amount of token * lp ratio)
        tokenAmount = new BigNumber(tokenBalanceLP).div(new BigNumber(10).pow(tokenDecimals)).times(lpTokenRatio)
        const quoteTokenAmount = new BigNumber(quoteTokenBlanceLP)
          .div(new BigNumber(10).pow(quoteTokenDecimals))
          .times(lpTokenRatio)

        if(tokenAmount.comparedTo(0) > 0){
          tokenPriceVsQuote = quoteTokenAmount.div(tokenAmount);
        }else{
          tokenPriceVsQuote = new BigNumber(quoteTokenBlanceLP).div(new BigNumber(tokenBalanceLP));
        }
      }

      const [info, totalAllocPoint, senzuPerBlock] = await multicall(masterchef3ABI, [
        {
          address: getMasterChef3Address(),
          name: 'poolInfo',
          params: [farm3Config.pid],
        },
        {
          address: getMasterChef3Address(),
          name: 'totalAllocPoint',
        },
        {
          address: getMasterChef3Address(),
          name: 'senzuPerBlock',
        },
      ])

      const allocPoint = new BigNumber(info.allocPoint._hex)
      const poolWeight = allocPoint.div(new BigNumber(totalAllocPoint))

      return {
        ...farm3Config,
        tokenAmount: tokenAmount.toJSON(),
        // quoteTokenAmount: quoteTokenAmount,
        lpTotalInQuoteToken: lpTotalInQuoteToken.toJSON(),
        tokenPriceVsQuote: tokenPriceVsQuote.toJSON(),
        poolWeight: poolWeight.toNumber(),
        multiplier: `${allocPoint.div(100).toString()}X`,
        depositFeeBP: info.depositFeeBP,
        senzuPerBlock: new BigNumber(senzuPerBlock).toNumber(),
      }
    }),
  )
  return data
}

export default fetchFarms3
