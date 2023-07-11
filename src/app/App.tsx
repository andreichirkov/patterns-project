import "./styles/index.scss"
import { Suspense } from "react"
import { Link, Route, Routes } from "react-router-dom"
import { AboutPageAsync } from "pages/AboutPage/AboutPage.async"
import { MainPageAsync } from "pages/MainPage/MainPage.async"
import { classNames } from "hepers/classNames/classNames"
import { useTheme } from "app/providers/ThemeProvider"

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>About</Link>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path={"/"} element={<MainPageAsync />} />
          <Route path={"/about"} element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
