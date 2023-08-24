import { render, screen } from "@testing-library/react"
import { Button, ButtonTheme } from "shared/ui/Button/Button"

describe("Кнопку тестируем", () => {
  test("Тест кнопки что она в ХТМЛ", () => {
    render(<Button>TEST</Button>)
    expect(screen.getByText("TEST")).toBeInTheDocument()
  })

  test("Тест кнопки с классом", () => {
    render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>)
    expect(screen.getByText("TEST")).toHaveClass("clear")
    // screen.debug()
  })
})
