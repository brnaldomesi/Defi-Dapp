import React, { useEffect, useCallback, useState } from 'react'
import { Route, useRouteMatch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { provider } from 'web3-core'
import CardNav from 'components/CardNav'
import { Image, Heading, Text } from '@pancakeswap-libs/uikit'
import { BLOCKS_PER_YEAR } from 'config'
import FlexLayout from 'components/layout/Flex'
import Page from 'components/layout/Page'
import { useFarms3, usePrice3BnbBusd, usePrice3CakeBusd } from 'state/hooks'
import useRefresh from 'hooks/useRefresh'
import { fetchFarm3UserDataAsync } from 'state/actions'
import { QuoteToken } from 'config/constants/types'
import useI18n from 'hooks/useI18n'
import FarmCard, { FarmWithStakedValue } from './components/FarmCard/FarmCard'
import FarmTabButtons from './components/FarmTabButtons'
import Divider from './components/Divider'

export interface FarmsProps{
  tokenMode?: boolean
}

const Details = styled.div`
  display: flex;
  align-items: center; 
  justify-content: center;
  
`

const Hero = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  display: grid;
  grid-gap: 32px;
  grid-template-columns: 1fr;
  margin-left: auto;
  margin-right: auto;
  max-width: 250px;
  padding: 48px 0;
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    font-size: 16px;
    li {
      margin-bottom: 4px;
    }
  }
  img {
    height: auto;
    max-width: 100%;
  }
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    margin: 0;
    max-width: none;
  }
`

const Farms: React.FC<FarmsProps> = (farmsProps) => {
  const { path } = useRouteMatch()
  const TranslateString = useI18n()
  const farmsLP = useFarms3()
  const cakePrice = usePrice3CakeBusd()
  const bnbPrice = usePrice3BnbBusd()
  const { account, ethereum }: { account: string; ethereum: provider } = useWallet()
  const {tokenMode} = farmsProps;

  const dispatch = useDispatch()
  const { fastRefresh } = useRefresh()
  useEffect(() => {
    if (account) {
      dispatch(fetchFarm3UserDataAsync(account))
    }
  }, [account, dispatch, fastRefresh])

  const [stakedOnly, setStakedOnly] = useState(false)

  const activeFarms = farmsLP.filter((farm) => !!farm.isTokenOnly === !!tokenMode && farm.multiplier !== '0X')
  const inactiveFarms = farmsLP.filter((farm) => !!farm.isTokenOnly === !!tokenMode && farm.multiplier === '0X')

  const stakedOnlyFarms = activeFarms.filter(
    (farm) => farm.userData && new BigNumber(farm.userData.stakedBalance).isGreaterThan(0),
  )

  // /!\ This function will be removed soon
  // This function compute the APY for each farm and will be replaced when we have a reliable API
  // to retrieve assets prices against USD
  const farmsList = useCallback(
    (farmsToDisplay, removed: boolean) => {
      // const cakePriceVsBNB = new BigNumber(farmsLP.find((farm) => farm.pid === CAKE_POOL_PID)?.tokenPriceVsQuote || 0)
      const farmsToDisplayWithAPY: FarmWithStakedValue[] = farmsToDisplay.map((farm) => {
        // if (!farm.tokenAmount || !farm.lpTotalInQuoteToken || !farm.lpTotalInQuoteToken) {
        //   return farm
        // }
        const cakeRewardPerBlock = new BigNumber(farm.senzuPerBlock || 1).times(new BigNumber(farm.poolWeight)) .div(new BigNumber(10).pow(18))
        const cakeRewardPerYear = cakeRewardPerBlock.times(BLOCKS_PER_YEAR)

        let apy = cakePrice.times(cakeRewardPerYear);

        let totalValue = new BigNumber(farm.lpTotalInQuoteToken || 0);

        if (farm.quoteTokenSymbol === QuoteToken.BNB) {
          totalValue = totalValue.times(bnbPrice);
        }

        if(totalValue.comparedTo(0) > 0){
          apy = apy.div(totalValue);
        }

        return { ...farm, apy }
      })
      return farmsToDisplayWithAPY.map((farm) => (
        <FarmCard
          key={farm.pid}
          farm={farm}
          removed={removed}
          bnbPrice={bnbPrice}
          cakePrice={cakePrice}
          ethereum={ethereum}
          account={account}
        />
      ))
    },
    [bnbPrice, account, cakePrice, ethereum],
  )

  return (
    <Page>
      <Hero>
        <div>
        <Heading as="h1" size="xxl" mb="16px">
          Layer 1
        </Heading>
        <ul>
          <li>{TranslateString(58000, 'Layered Farming is highly volatile')}</li>
          <li>{TranslateString(40400, 'please do your own research before investing')}</li>
        </ul>
        </div>
      </Hero>
      <Details>{tokenMode ? <CardNav activeIndex={2} /> : <CardNav activeIndex={1} />}</Details>
      <Divider />
      <Heading as="h2" size="lg" color="primary" mb="50px" style={{ textAlign: 'center' }}>
        {tokenMode
          ? TranslateString(100020, 'Stake tokens to earn SENZU')
          : TranslateString(32000, 'Stake LP tokens to earn SENZU')}
      </Heading>
      <Heading as="h3" color="secondary" mb="50px" style={{ textAlign: 'center' }}>
        {TranslateString(100000, 'Deposit Fee will be used to buyback DBALL')}
      </Heading>
      <FarmTabButtons stakedOnly={stakedOnly} setStakedOnly={setStakedOnly} />
      <div>
        <Divider />
        <FlexLayout>
          <Route exact path={`${path}`}>
            {stakedOnly ? farmsList(stakedOnlyFarms, false) : farmsList(activeFarms, false)}
          </Route>
          <Route exact path={`${path}/history`}>
            {farmsList(inactiveFarms, true)}
          </Route>
        </FlexLayout>
      </div>
      <Image src="/images/egg/12.png" alt="illustration" width={1352} height={587} responsive />
    </Page>
  )
}

export default Farms
