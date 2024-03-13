import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { fetchProfileData } from "./fetchProfileData";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";

const data = {
  username: 'admin',
  lastname: 'surname',
  age: 32,
  country: Country.Ukraine,
  city: 'Che',
  currency: Currency.USD
}

describe('fetchProfileData.test', () => {


  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)

    thunk.api.get.mockReturnValue(Promise.resolve({ data }))

    const result = await thunk.callThunk()

    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(data)
  })

  test('error', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)

    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))

    const result = await thunk.callThunk()

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual('error')
  })
})
