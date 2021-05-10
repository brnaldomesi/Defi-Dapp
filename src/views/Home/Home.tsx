import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from './components/FarmStakingCard'
import CakeStats from './components/CakeStats'
import CakeStats3 from './components/CakeStats3'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'

const Hero = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-size: contain;
    background-image: url('/images/egg/'), url('/images/egg/LogoTextNewWhite.png');
    background-position: left center, right center;
    background-repeat: no-repeat;
    height: 240px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const Cards2 = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 32px;
  z-index: 5;

  & > div {
    grid-column: span 12 / auto;
    width: 100%;
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()
  
  return (
    <Page>
      <Hero>
        <Heading as="h1" size="xl" mb="24px" color="secondary">

        {TranslateString(576,'MountainDeFi Finance')}
        </Heading>
        <Text>{TranslateString(5780, 'All in one Defi platform in Binance Smart Chain.')}</Text>
      </Hero>
      <div>
        <Cards>
          <FarmStakingCard />
          <TwitterCard/>
          <CakeStats />
          <CakeStats3 />
        </Cards>
          <Cards2>
            <TotalValueLockedCard />
          </Cards2>
      </div>
    </Page>
  )
}

export default Home
