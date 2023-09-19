import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/store'
import { User } from 'firebase/auth'

// Define a type for the slice state
interface InitialState {
  user: User | undefined
  isAuthorized: boolean
}

// Define the initial state using that type
const initialState: InitialState = {
  user: undefined,
  isAuthorized: false
}

export const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    },
    setAuthorized: (state, action: PayloadAction<boolean>) => {
      state.isAuthorized = action.payload
    }
  }
})

export const authActions = authSlice.actions

// Other code such as selectors can use the imported `RootState` type

export default authSlice.reducer
