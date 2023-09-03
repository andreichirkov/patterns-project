import { DeepPartial } from "@reduxjs/toolkit"
import { StateSchema } from "app/providers/StoreProvider"
import { getCounter } from "./getCounter"

// Проверяем, что getCounter возвращает участок отвечающий за счетчик
describe("getCounter", () => {
  test("Should return counter value", () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 }
    }

    // Selector всегда принимает Стейт
    expect(getCounter(state as StateSchema)).toEqual({ value: 10 })
  })
})
