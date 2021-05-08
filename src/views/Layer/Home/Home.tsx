import React from 'react'
import styled from 'styled-components'
import { Heading, BaseLayout } from '@pancakeswap-libs/uikit'
import CardNav from 'components/CardNav'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from './components/FarmStakingCard'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import Divider from './components/Divider'

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

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <Hero>
        <div>
          <Heading as="h1" size="xxl" mb="16px">
            Layer 1
          </Heading>
          <ul>
            <li>{TranslateString(5800, 'Layered Mining is highly volatile')}</li>
            <li>{TranslateString(4040, 'please do your own research before investing')}</li>
          </ul>
        </div>
      </Hero>
      <Center>
        <CardNav />
      </Center>
      <Divider />
      <div>
        <Cards>
          <FarmStakingCard />
          <CakeStats />
          <TotalValueLockedCard />
        </Cards>
      </div>
    </Page>
  )
}

export default Home
