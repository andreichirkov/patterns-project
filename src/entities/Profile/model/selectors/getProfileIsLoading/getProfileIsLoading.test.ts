import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileIsLoading } from './getProfileIsLoading'

describe('getProfileIsLoading.test', () => {
  test('should return right value', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true
      }
    }

    // Этот селектор должен вернуть строку ошибки
    expect(getProfileIsLoading(state as StateSchema)).toEqual(true)
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined)
  })
})
