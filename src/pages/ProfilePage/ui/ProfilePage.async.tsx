import { lazy } from 'react'

// Компонент с искуственной задержкой
export const ProfilePageAsync = lazy(
  () =>
    new Promise(resolve => {
      // @ts-ignore
      setTimeout(() => resolve(import('./ProfilePage')), 1000)
    })
)
