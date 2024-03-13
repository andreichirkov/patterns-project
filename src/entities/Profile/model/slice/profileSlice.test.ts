import {
  profileActions,
  profileReducer,
  ProfileSchema,
  updateProfileData,
  ValidateProfileError
} from 'entities/Profile'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'

const data = {
  username: 'admin',
  first: 'Name',
  lastname: 'surname',
  age: 32,
  country: Country.Ukraine,
  city: 'Che',
  currency: Currency.USD
}

describe('profileSlice.test', () => {
  test('test change readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false }

    expect(
      profileReducer(state as ProfileSchema, profileActions.setReadonly(true))
    ).toEqual({ readonly: true })
  })

  test('test cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } }

    expect(
      profileReducer(state as ProfileSchema, profileActions.cancelEdit())
    ).toEqual({
      readonly: true,
      validateErrors: undefined,
      data,
      form: data
    })
  })

  test('test update full profile', () => {
    const state: DeepPartial<ProfileSchema> = { form: { username: 'here' } }

    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({ username: 'new' })
      )
    ).toEqual({
      form: { username: 'new' }
    })
  })

  test('test update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR]
    }

    expect(
      profileReducer(state as ProfileSchema, updateProfileData.pending)
    ).toEqual({
      isLoading: true,
      validateErrors: undefined
    })
  })

  test('test update profile service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true
    }

    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(data, '')
      )
    ).toEqual({
      isLoading: false,
      validateErrors: undefined,
      readonly: true,
      data,
      form: data
    })
  })
})
