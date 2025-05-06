// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'

// ** Reducers

import product from '../store/app/Product'


export const store = configureStore({
  reducer: {
    product,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})



export const { dispatch } = store
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>