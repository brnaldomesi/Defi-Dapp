import React, { useEffect, Suspense, lazy } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { ResetCSS } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js'
import { useFetchPublicData } from 'state/hooks'
import GlobalStyle from './style/Global'
import Menu from './components/Menu'
import PageLoader from './components/PageLoader'

// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page'
const Home = lazy(() => import('./views/Home'))
const Farms = lazy(() => import('./views/Farms'))

const Home3 = lazy(() => import('./views/Layer/Home'))
const Farms3 = lazy(() => import('./views/Layer/Farms'))

const Lottery = lazy(() => import('./views/Lottery'))
const Referrals = lazy(() => import('./views/Referrals'))
const Pools = lazy(() => import('./views/Pools'))
const NotFound = lazy(() => import('./views/NotFound'))
// const Layered = lazy(() => import('./views/Layered'))
const Roadmap = lazy(() => import('./views/Roadmap'))
const Whitepaper = lazy(() => import('./views/Whitepaper'))

// This config is required for number formating
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})




const App: React.FC = () => {
  const { account, connect } = useWallet()
  useEffect(() => {
    if (!account && window.localStorage.getItem('accountStatus')) {
      connect('injected')
    }
  }, [account, connect])

  useFetchPublicData()

  return (
    <Router>
      <ResetCSS />
      <GlobalStyle />
      <Menu>
        <Suspense fallback={<PageLoader />}>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/mines">
              <Farms />
            </Route>
            <Route path="/nodes">
              <Farms tokenMode />
            </Route>
            <Route path="/layer/info" exact>
              <Home3 />
            </Route>
            <Route path="/layer/mines">
              <Farms3 />
            </Route>
            <Route path="/layer/nodes">
              <Farms3 tokenMode />
            </Route>
            <Route path="/supersaiyanpool">
             <Pools />
            </Route>
            <Route path="/Whitepaper">
              <Whitepaper />
            </Route>
            <Route path="/lottery">
              <Lottery />
            </Route>
            <Route path="/referrals">
              <Referrals/>
            </Route>
            {/* <Route path="/Layered">
              <Layered />
            </Route> */}
            {/* <Route path="/nft"> */}
            {/*  <Nft /> */}
            {/* </Route> */}
            {/* Redirect */}
            {/* <Route path="/staking"> */}
            {/*  <Redirect to="/pools" /> */}
            {/* </Route> */}
            <Route path="/Roadmap">
              <Roadmap />
            </Route>
            <Route path="/syrup">
              <Redirect to="/nodes" />
            </Route>
            <Route path="/nests">
              <Redirect to="/nodes" />
            </Route>
            {/* 404 */}
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Menu>
    </Router>
  )
}

export default React.memo(App)
