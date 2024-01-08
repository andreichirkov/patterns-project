import axios from 'axios'
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername'
import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

// Для работы Моков в Джесте
jest.mock('axios')

// Тип для правильной работы TS => глубоко мокаем объект
const mockedAxios = jest.mocked(axios, true)

describe('loginByUsername.test', () => {
  // let dispatch: Dispatch
  // // Функция возвращающая стейт будет
  // let getState: () => StateSchema
  //
  // // Перед каждым тестом отработает внутренний колбек
  // beforeEach(() => {
  //   dispatch = jest.fn()
  //   getState = jest.fn()
  // })
  //
  // test('', async () => {
  //   const userValue =  { username: 'admin', id: '1' }
  //
  //   mockedAxios.post.mockReturnValue(
  //     Promise.resolve({ data: userValue })
  //   )
  //
  //   const action = loginByUsername({ username: 'admin', password: '123' })
  //   const result = await action(dispatch, getState, undefined)
  //   // console.log(result)
  //
  //   // Вызыван ли Экшн действительно с верными данными
  //   expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
  //
  //   // Отправлен ли был вообще запрос на сервер
  //   expect(mockedAxios.post).toHaveBeenCalled()
  //
  //   // Отработал ли АсинкТанк без ошибки
  //   expect(result.meta.requestStatus).toBe('fulfilled')
  // })

  test('success login', async () => {
    const userValue = { username: '123', id: '1' }
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }))

    const thunk = new TestAsyncThunk(loginByUsername)
    const result = await thunk.callThunk({ username: '123', password: '123' })

    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setAuthData(userValue)
    )
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(userValue)
  })

  test('error login', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
    const thunk = new TestAsyncThunk(loginByUsername)
    const result = await thunk.callThunk({ username: '123', password: '123' })

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toBe('error')
  })
})
