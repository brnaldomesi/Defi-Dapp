import React from 'react'
import styled from 'styled-components'
import { BaseLayout, Image} from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'

const Hero = styled.div`
  align-items: center;
  background-image: ;
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: ;
    background-position: left center, right center;
    height: 165px;
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

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <Hero>
        <hr/>
        <hr/>
        <hr/>
        <hr/>
        <hr/>
        <hr/>
        <hr/>
        <hr/>
        <hr/>
        <hr/>
        <hr/>
        <hr/>
        <hr/>
        <hr/>
        <Image src="/images/egg/roadmap.png" alt="Roadmap" width={1352} height={600} responsive />
      </Hero>
    </Page>
  )
}

export default Home
