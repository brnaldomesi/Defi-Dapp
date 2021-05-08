import BigNumber from 'bignumber.js'
import { FarmConfig, Farm3Config, PoolConfig } from 'config/constants/types'

export interface Farm extends FarmConfig {
  tokenAmount?: BigNumber
  // quoteTokenAmount?: BigNumber
  lpTotalInQuoteToken?: BigNumber
  tokenPriceVsQuote?: BigNumber
  poolWeight?: number
  depositFeeBP?: number
  unstakingFeeBP?: number
  dballPerBlock?: number
    userData?: {
    allowance: BigNumber
    tokenBalance: BigNumber
    stakedBalance: BigNumber
    earnings: BigNumber
  }
}

export interface Farm3 extends Farm3Config {
  tokenAmount?: BigNumber
  // quoteTokenAmount?: BigNumber
  lpTotalInQuoteToken?: BigNumber
  tokenPriceVsQuote?: BigNumber
  poolWeight?: number
  depositFeeBP?: number
  senzuPerBlock?: number
  userData?: {
    allowance: BigNumber
    tokenBalance: BigNumber
    stakedBalance: BigNumber
    earnings: BigNumber
  }
}

export interface Pool extends PoolConfig {
  totalStaked?: BigNumber
  startBlock?: number
  endBlock?: number
  userData?: {
    allowance: BigNumber
    stakingTokenBalance: BigNumber
    stakedBalance: BigNumber
    pendingReward: BigNumber
  }
}

// Slices states

export interface FarmsState {
  data: Farm[]
}

export interface Farms3State {
  data: Farm3[]
}

export interface PoolsState {
  data: Pool[]
}

// Global state

export interface State {
  farms: FarmsState
  pools: PoolsState
  farms3: Farms3State
}
