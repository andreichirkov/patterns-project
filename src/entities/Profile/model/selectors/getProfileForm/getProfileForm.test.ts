import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileForm } from './getProfileForm'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'

describe('getProfileForm.test', () => {
  test('should return right value', () => {
    const form = {
      username: 'admin',
      lastname: 'surname',
      age: 32,
      country: Country.Ukraine,
      city: 'Che',
      currency: Currency.USD
    }

    const state: DeepPartial<StateSchema> = {
      profile: {
        form
      }
    }

    expect(getProfileForm(state as StateSchema)).toEqual(form)
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileForm(state as StateSchema)).toEqual(undefined)
  })
})
