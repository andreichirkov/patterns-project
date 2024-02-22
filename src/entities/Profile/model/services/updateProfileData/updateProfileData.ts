import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThinkConfig } from 'app/providers/StoreProvider'
import { Profile } from '../../types/profile'
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";

export const updateProfileData = createAsyncThunk<
  Profile, // что вернем из функции
  void, // что принимает на вход функция
  ThinkConfig<string>
>('profile/updateProfileData', async (_, thunkAPI) => {
  const { extra, rejectWithValue, getState } = thunkAPI

  const formData = getProfileForm(getState())

  try {
    const response = await extra.api.put<Profile>('/profile', formData)
    return response.data
  } catch (e) {
    console.log(e)
    return rejectWithValue('error')
  }
})
