import { StateSchema } from 'app/providers/StoreProvider'
import { AsyncThunkAction } from '@reduxjs/toolkit'
import axios, { AxiosStatic } from 'axios'

// createAsyncThunk: () => AsyncThunk<Returned, ThunkArg, ThunkApiConfig> =>
// AsyncThunkActionCreator<kek3> => AsyncThunkAction<kek3>

// Тип может принимать аргументы и так можно типизировать функцию
// Этот тип - функция, которая принимает какой то аргумент и возвращает AsyncThunkAction
// А AsyncThunkAction в свою очередь это промис с разными состояниями
// Но заранее указываем что вернется при успехе, что принимает на вход (Arg) и какую ошибку вернуть при ошибке
type ActionCreatorType<Return, Arg, RejectedValue> = (
  arg: Arg
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>

jest.mock('axios')
const mockedAxios = jest.mocked(axios, true)

// <Что вернет АсинкТанк, Аргумент, Что вернет АсинкТанк при ошибке>
export class TestAsyncThunk<Return, Arg, RejectedValue> {
  getState: () => StateSchema
  dispatch: jest.MockedFn<any>
  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>
  api: jest.MockedFunctionDeep<AxiosStatic>
  navigate: jest.MockedFn<any>

  // То есть принимаемый actionCreator - это функция
  constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
    this.getState = jest.fn()
    this.dispatch = jest.fn()
    this.actionCreator = actionCreator
    this.api = mockedAxios
    this.navigate = jest.fn()
  }

  // Вызывает сохраненный асинхронный Экшн
  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg)
    const result = await action(this.dispatch, this.getState, {
      api: this.api,
      navigate: this.navigate
    })

    // Тип того, что вернется TS должен подхватывать сам
    return result
  }
}
