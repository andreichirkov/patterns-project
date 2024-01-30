import { StateSchema } from 'app/providers/StoreProvider'
import { getLoginError } from './getLoginError'

describe('getLoginError.test', () => {
  test('should return error', () => {
    // Создаем стейт с кусочком стейта с дефолтным значением которое мы тестируем
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: 'error'
      }
    }

    // Этот селектор должен вернуть строку ошибки
    expect(getLoginError(state as StateSchema)).toEqual('error')
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginError(state as StateSchema)).toEqual(undefined)
  })
})
