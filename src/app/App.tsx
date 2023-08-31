import "./styles/index.scss"
import { Suspense, useEffect, useState } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { useTheme } from "app/providers/ThemeProvider"
import { AppRouter } from "app/providers/router"
import { Navbar } from "widgets/Navbar"
import { Sidebar } from "widgets/Sidebar"
import { Modal } from "shared/ui/Modal/Modal"

function App() {
  const { theme } = useTheme()

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <button onClick={() => setIsOpen(true)}>togg</button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, animi corporis culpa ipsa ipsam iusto nostrum odit quidem tenetur vel?
        </Modal>
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}

export default App
