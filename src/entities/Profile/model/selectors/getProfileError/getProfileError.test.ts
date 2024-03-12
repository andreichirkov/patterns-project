import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileError } from './getProfileError'

describe('getProfileError.test', () => {
  test('should return error string', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: 'error'
      }
    }

    // Этот селектор должен вернуть строку ошибки
    expect(getProfileError(state as StateSchema)).toEqual('error')
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileError(state as StateSchema)).toEqual(undefined)
  })
})
