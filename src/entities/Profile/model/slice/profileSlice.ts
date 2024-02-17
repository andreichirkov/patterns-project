import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Profile, ProfileSchema } from "../types/profile";
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'
import { action } from "@storybook/addon-actions";

const initialState: ProfileSchema = {
  isLoading: false,
  readonly: true,
  error: undefined,
  data: undefined
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload
    },
    updateProfile: (state, action: PayloadAction<Profile>) => {
      state.data = {
        ...state.data,
        ...action.payload
      }
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProfileData.pending, state => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(
        fetchProfileData.fulfilled,
        (state, action: PayloadAction<Profile>) => {
          state.isLoading = false
          state.data = action.payload
        }
      )
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
