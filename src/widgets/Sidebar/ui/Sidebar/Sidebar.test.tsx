import { fireEvent, render, screen } from "@testing-library/react"
import { withTranslation } from "react-i18next"
import { renderWIthTranslation } from "shared/lib/tests/renderWIthTranslation/renderWIthTranslation"
import { Sidebar } from "./Sidebar"

describe("Sidebar", () => {
  test("is in HTML", () => {
    renderWIthTranslation(<Sidebar />)
    expect(screen.getByTestId("sidebar")).toBeInTheDocument()
  })

  test("toggle button", () => {
    renderWIthTranslation(<Sidebar />)
    const toggleButton = screen.getByTestId("sidebar-toggle")
    expect(screen.getByTestId("sidebar")).toBeInTheDocument()
    fireEvent.click(toggleButton)
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed")
  })
})
