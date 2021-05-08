import BigNumber from 'bignumber.js'
import erc20ABI from 'config/abi/erc20.json'
import masterchef3ABI from 'config/abi/masterchef3.json'
import multicall from 'utils/multicall'
import farms3Config from 'config/constants/farms3'
import { getMasterChef3Address } from 'utils/addressHelpers'

const CHAIN_ID = process.env.REACT_APP_CHAIN_ID

export const fetchFarm3UserAllowances = async (account: string) => {
  const masterChef3Adress = getMasterChef3Address()

  const calls = farms3Config.map((farm) => {
    const lpContractAddress = farm.isTokenOnly ? farm.tokenAddresses[CHAIN_ID] : farm.lpAddresses[CHAIN_ID]
    return { address: lpContractAddress, name: 'allowance', params: [account, masterChef3Adress] }
  })

  const rawLpAllowances = await multicall(erc20ABI, calls)
  const parsedLpAllowances = rawLpAllowances.map((lpBalance) => {
    return new BigNumber(lpBalance).toJSON()
  })
  return parsedLpAllowances
}

export const fetchFarm3UserTokenBalances = async (account: string) => {
  const calls = farms3Config.map((farm) => {
    const lpContractAddress = farm.isTokenOnly ? farm.tokenAddresses[CHAIN_ID] : farm.lpAddresses[CHAIN_ID]
    return {
      address: lpContractAddress,
      name: 'balanceOf',
      params: [account],
    }
  })

  const rawTokenBalances = await multicall(erc20ABI, calls)
  const parsedTokenBalances = rawTokenBalances.map((tokenBalance) => {
    return new BigNumber(tokenBalance).toJSON()
  })
  return parsedTokenBalances
}

export const fetchFarm3UserStakedBalances = async (account: string) => {
  const masterChef3Adress = getMasterChef3Address()

  const calls = farms3Config.map((farm) => {
    return {
      address: masterChef3Adress,
      name: 'userInfo',
      params: [farm.pid, account],
    }
  })

  const rawStakedBalances = await multicall(masterchef3ABI, calls)
  const parsedStakedBalances = rawStakedBalances.map((stakedBalance) => {
    return new BigNumber(stakedBalance[0]._hex).toJSON()
  })
  return parsedStakedBalances
}

export const fetchFarm3UserEarnings = async (account: string) => {
  const masterChef3Adress = getMasterChef3Address()

  const calls = farms3Config.map((farm) => {
    return {
      address: masterChef3Adress,
      name: 'pendingEgg',
      params: [farm.pid, account],
    }
  })

  const rawEarnings = await multicall(masterchef3ABI, calls)
  const parsedEarnings = rawEarnings.map((earnings) => {
    return new BigNumber(earnings).toJSON()
  })
  return parsedEarnings
}
