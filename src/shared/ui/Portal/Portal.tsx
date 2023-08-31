import { ReactNode } from "react"
import { createPortal } from "react-dom"

// element - это куда - это контейнер в который хотим телепортировать
// children - это что телепортируем
interface PortalProps {
  children: ReactNode
  element?: HTMLElement
}

export const Portal = (props: PortalProps) => {
  const { children, element = document.body } = props
  return createPortal(children, element)
}
