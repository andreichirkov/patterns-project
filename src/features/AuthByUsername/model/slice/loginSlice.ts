import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { LoginSchema } from "../types/loginSchema"

const initialState: LoginSchema = {
  username: "",
  password: "",
  isLoading: false
}

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUsername: (state: LoginSchema, action: PayloadAction<string>) => {
      state.username = action.payload
    },
    setPassword: (state: LoginSchema, action: PayloadAction<string>) => {
      state.password = action.payload
    }
  }
})

export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice
