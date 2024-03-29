import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThinkConfig } from 'app/providers/StoreProvider'
import { Profile } from '../../types/profile'

export const fetchProfileData = createAsyncThunk<
  Profile, // что вернем из функции
  void, // что принимает на вход функция
  ThinkConfig<string>
>('profile/fetchProfileData', async (_, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI

  try {
    const response = await extra.api.get<Profile>('/profile')

    if (!response.data) {
      throw new Error()
    }

    return response.data
  } catch (e) {
    console.log(e)
    return rejectWithValue('error')
  }
})
