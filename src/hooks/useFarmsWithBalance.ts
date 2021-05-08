import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import multicall from 'utils/multicall'
import { getMasterChefAddress, getMasterChef3Address } from 'utils/addressHelpers'
import masterChefABI from 'config/abi/masterchef.json'
import masterChef3ABI from 'config/abi/masterchef3.json'
import { farmsConfig, farms3Config } from 'config/constants'
import { FarmConfig, Farm3Config } from 'config/constants/types'
import useRefresh from './useRefresh'

export interface FarmWithBalance extends FarmConfig {
  balance: BigNumber
}

export interface Farm3WithBalance extends Farm3Config {
  balance: BigNumber
}

const useFarmsWithBalance = () => {
  const [farmsWithBalances, setFarmsWithBalances] = useState<FarmWithBalance[]>([])
  const { account } = useWallet()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    const fetchBalances = async () => {
      const calls = farmsConfig.map((farm) => ({
        address: getMasterChefAddress(),
        name: 'pendingEgg',
        params: [farm.pid, account],
      }))

      const rawResults = await multicall(masterChefABI, calls)
      const results = farmsConfig.map((farm, index) => ({ ...farm, balance: new BigNumber(rawResults[index]) }))

      setFarmsWithBalances(results)
    }

    if (account) {
      fetchBalances()
    }
  }, [account, fastRefresh])

  return farmsWithBalances
}

export const useFarms3WithBalance = () => {
  const [farms3WithBalances, setFarms3WithBalances] = useState<Farm3WithBalance[]>([])
  const { account } = useWallet()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    const fetchBalances = async () => {
      const calls = farms3Config.map((farm) => ({
        address: getMasterChef3Address(),
        name: 'pendingEgg',
        params: [farm.pid, account],
      }))

      const rawResults = await multicall(masterChef3ABI, calls)
      const results = farms3Config.map((farm, index) => ({ ...farm, balance: new BigNumber(rawResults[index]) }))

      setFarms3WithBalances(results)
    }

    if (account) {
      fetchBalances()
    }
  }, [account, fastRefresh])

  return farms3WithBalances
}

export default useFarmsWithBalance
