import { configureStore } from '@reduxjs/toolkit'
import homeSlice from './homeSlice'
import exploreSlice from './exploreSlice'

export const store = configureStore({
  reducer: {
    home : homeSlice,
    explore : exploreSlice,
  },
})