/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import farms3Config from 'config/constants/farms3'
import fetchFarms3 from './fetchFarms3'
import {
  fetchFarm3UserEarnings,
  fetchFarm3UserAllowances,
  fetchFarm3UserTokenBalances,
  fetchFarm3UserStakedBalances,
} from './fetchFarmUser3'
import { Farms3State, Farm3 } from '../types'

const initialState: Farms3State = { data: [...farms3Config] }

export const farms3Slice = createSlice({
  name: 'Farms',
  initialState,
  reducers: {
    setFarms3PublicData: (state, action) => {
      const liveFarmsData: Farm3[] = action.payload
      state.data = state.data.map((farm) => {
        const liveFarmData = liveFarmsData.find((f) => f.pid === farm.pid)
        return { ...farm, ...liveFarmData }
      })
    },
    setFarm3UserData: (state, action) => {
      const { arrayOfUserDataObjects } = action.payload
      arrayOfUserDataObjects.forEach((userDataEl) => {
        const { index } = userDataEl
        state.data[index] = { ...state.data[index], userData: userDataEl }
      })
    },
  },
})

// Actions
export const { setFarms3PublicData, setFarm3UserData } = farms3Slice.actions

// Thunks
export const fetchFarms3PublicDataAsync = () => async (dispatch) => {
  const farms3 = await fetchFarms3()
  dispatch(setFarms3PublicData(farms3))
}
export const fetchFarm3UserDataAsync = (account) => async (dispatch) => {
  const userFarm3Allowances = await fetchFarm3UserAllowances(account)
  const userFarm3TokenBalances = await fetchFarm3UserTokenBalances(account)
  const userStakedBalances3 = await fetchFarm3UserStakedBalances(account)
  const userFarm3Earnings = await fetchFarm3UserEarnings(account)

  const arrayOfUserDataObjects = userFarm3Allowances.map((farm3Allowance, index) => {
    return {
      index,
      allowance: userFarm3Allowances[index],
      tokenBalance: userFarm3TokenBalances[index],
      stakedBalance: userStakedBalances3[index],
      earnings: userFarm3Earnings[index],
    }
  })

  dispatch(setFarm3UserData({ arrayOfUserDataObjects }))
}

export default farms3Slice.reducer
