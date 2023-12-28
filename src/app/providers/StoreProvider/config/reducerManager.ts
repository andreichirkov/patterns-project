import {
  AnyAction,
  combineReducers,
  Reducer,
  ReducersMapObject
} from '@reduxjs/toolkit'
import { ReducerManager, StateSchema, StateSchemaKey } from "./StateSchema"

export function createReducerManager(
  initialReducers: ReducersMapObject<StateSchema>
): ReducerManager {
  const reducers = { ...initialReducers }

  // Тут создается корневой редюсер
  let combinedReducer = combineReducers(reducers)

  // Массив названий редюсеров, которые хотим удалить
  let keysToRemove: StateSchemaKey[] = []

  return {
    getReducerMap: () => reducers,

    // Удаляет по ключам данные из стейта
    reduce: (state: StateSchema, action: AnyAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state }
        keysToRemove.forEach(key => {
          delete state[key]
        })

        keysToRemove = []
      }

      // Новый редюсер с удаленными ключами
      return combinedReducer(state, action)
    },

    // Добавляет новый редюсер по ключу
    add: (key: StateSchemaKey, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return
      }

      reducers[key] = reducer

      combinedReducer = combineReducers(reducers)
    },

    remove: (key: StateSchemaKey) => {
      if (!key || !reducers[key]) {
        return
      }

      delete reducers[key]

      keysToRemove.push(key)

      combinedReducer = combineReducers(reducers)
    }
  }
}
