import { useCallback } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useDispatch } from 'react-redux'
import {
  fetchFarmUserDataAsync,
  fetchFarm3UserDataAsync,
  updateUserStakedBalance,
  updateUserBalance,
  updateUserPendingReward,
} from 'state/actions'
import { unstake, smartChefUnstake } from 'utils/callHelpers'
import { useMasterchef, useMasterchef3, useSmartChef } from './useContract'

const useUnstake = (pid: number) => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const masterChefContract = useMasterchef()

  const handleUnstake = useCallback(
    async (amount: string) => {
      const txHash = await unstake(masterChefContract, pid, amount, account)
      dispatch(fetchFarmUserDataAsync(account))
      console.info(txHash)
    },
    [account, dispatch, masterChefContract, pid],
  )

  return { onUnstake: handleUnstake }
}

export const useUnstake3 = (pid: number) => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const masterChef3Contract = useMasterchef3()

  const handleUnstake = useCallback(
    async (amount: string) => {
      const txHash = await unstake(masterChef3Contract, pid, amount, account)
      dispatch(fetchFarm3UserDataAsync(account))
      console.info(txHash)
    },
    [account, dispatch, masterChef3Contract, pid],
  )

  return { onUnstake: handleUnstake }
}

export const useSmartUnstake = (sousId: number) => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const smartChefContract = useSmartChef(sousId)

  const handleUnstake = useCallback(
    async (amount: string) => {
      await smartChefUnstake(smartChefContract, amount, account)
      dispatch(updateUserStakedBalance(String(sousId), account))
      dispatch(updateUserBalance(String(sousId), account))
      dispatch(updateUserPendingReward(String(sousId), account))
    },
    [account, dispatch, smartChefContract, sousId],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstake
