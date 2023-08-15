import { render, screen } from "@testing-library/react"
import { withTranslation } from "react-i18next"
import { renderWIthTranslation } from "shared/lib/tests/renderWIthTranslation/renderWIthTranslation"
import { Sidebar } from "./Sidebar"

describe("Sidebar", () => {
  test("Есть ли в ХТМЛ", () => {
    renderWIthTranslation(<Sidebar />)
    expect(screen.getByTestId("sidebar")).toBeInTheDocument()
  })
})
