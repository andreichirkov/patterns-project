import { lazy } from "react"

// Компонент с искуственной задержкой
export const AboutPageAsync = lazy(() => new Promise(resolve => {
  // @ts-ignore
  setTimeout(() => resolve(import("./AboutPage")), 1000)
}))
