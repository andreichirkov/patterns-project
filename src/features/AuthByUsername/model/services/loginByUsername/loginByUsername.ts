import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { User } from 'entities/User'

interface LoginByUsername {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsername,
  { rejectValue: string }
>('login/loginByUsername', async (authData, thunkAPI) => {
  try {
    const response = await axios.post<User>('http://localhost:8000/', authData)

    if (!response.data) {
      throw new Error()
    }

    return response.data
  } catch (e) {
    console.log(e)
    return thunkAPI.rejectWithValue('error')
  }
})
