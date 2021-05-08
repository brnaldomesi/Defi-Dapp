import { configureStore } from '@reduxjs/toolkit'
import farmsReducer from './farms'
import farms3Reducer from './farms3'
import poolsReducer from './pools'

export default configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    farms: farmsReducer,
    farms3: farms3Reducer,
    pools: poolsReducer,
  },
})
