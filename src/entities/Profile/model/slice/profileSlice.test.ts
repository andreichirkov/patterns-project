import { profileActions, profileReducer, ProfileSchema } from 'entities/Profile'
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
    const state: DeepPartial<ProfileSchema> = { form: { username: '' } }

    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({ username: 'new' })
      )
    ).toEqual({
      form: { username: 'new' }
    })
  })
})
