import { StateSchema } from 'app/providers/StoreProvider'
import { AsyncThunkAction } from '@reduxjs/toolkit'

// Функция, которая принимает какой то аргумент и возвращает AsyncThunkAction
type ActionCreatorType<Return, Arg, RejectedValue> = (
  arg: Arg
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>

// <Что вернет АсинкТанк, Аргумент, Что вернет АсинкТанк при ошибке>
export class TestAsyncThunk<Return, Arg, RejectedValue> {
  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>
  dispatch: jest.MockedFn<any>
  getState: () => StateSchema

  constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
    this.actionCreator = actionCreator
    this.dispatch = jest.fn()
    this.getState = jest.fn()
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg)
    const result = await action(this.dispatch, this.getState, undefined)

    // Тип того, что вернется TS должен подхватывать сам
    return result
  }
}
