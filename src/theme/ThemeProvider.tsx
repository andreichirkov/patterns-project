import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext"
import { FC, useMemo, useState } from "react"

// Каст к типу потому что LC вернет строку, а тут используется Enum
const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

const ThemeProvider: FC = ({children}) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  const defaultProps = useMemo(() => ({
    theme: theme,
    setTheme: setTheme
  }), [theme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider