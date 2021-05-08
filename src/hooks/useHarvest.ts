import { useCallback } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useDispatch } from 'react-redux'
import { fetchFarmUserDataAsync, fetchFarm3UserDataAsync, updateUserBalance, updateUserPendingReward } from 'state/actions'
import { smartHarvest, smartHarvestBnb, harvest } from 'utils/callHelpers'
import { useMasterchef, useMasterchef3, useSmartChef } from './useContract'

export const useHarvest = (farmPid: number) => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const masterChefContract = useMasterchef()

  const handleHarvest = useCallback(async () => {
    const txHash = await harvest(masterChefContract, farmPid, account)
    dispatch(fetchFarmUserDataAsync(account))
    return txHash
  }, [account, dispatch, farmPid, masterChefContract])

  return { onReward: handleHarvest }
}

export const useAllHarvest = (farmPids: number[]) => {
  const { account } = useWallet()
  const masterChefContract = useMasterchef()

  const handleHarvest = useCallback(async () => {
    const harvestPromises = farmPids.reduce((accum, pid) => {
      return [...accum, harvest(masterChefContract, pid, account)]
    }, [])

    return Promise.all(harvestPromises)
  }, [account, farmPids, masterChefContract])

  return { onReward: handleHarvest }
}


export const useHarvest3 = (farmPid: number) => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const masterChef3Contract = useMasterchef3()

  const handleHarvest = useCallback(async () => {
    const txHash = await harvest(masterChef3Contract, farmPid, account)
    dispatch(fetchFarm3UserDataAsync(account))
    return txHash
  }, [account, dispatch, farmPid, masterChef3Contract])

  return { onReward: handleHarvest }
}

export const useAllHarvest3 = (farmPids: number[]) => {
  const { account } = useWallet()
  const masterChef3Contract = useMasterchef3()

  const handleHarvest = useCallback(async () => {
    const harvestPromises = farmPids.reduce((accum, pid) => {
      return [...accum, harvest(masterChef3Contract, pid, account)]
    }, [])

    return Promise.all(harvestPromises)
  }, [account, farmPids, masterChef3Contract])

  return { onReward: handleHarvest }
}

export const useSmartChefHarvest = (sousId, isUsingBnb = false) => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const smartChefContract = useSmartChef(sousId)

  const handleHarvest = useCallback(async () => {
    const harvestFn = isUsingBnb ? smartHarvestBnb : smartHarvest
    await harvestFn(smartChefContract, account)
    dispatch(updateUserPendingReward(sousId, account))
    dispatch(updateUserBalance(sousId, account))
  }, [account, dispatch, isUsingBnb, smartChefContract, sousId])

  return { onReward: handleHarvest }
}
