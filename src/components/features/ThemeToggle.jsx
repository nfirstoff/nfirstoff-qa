import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"

function getInitialTheme() {
  try {
    const saved = localStorage.getItem("theme")
    if (saved === "dark" || saved === "light") return saved
  } catch {
    // localStorage unavailable
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

function setThemeAttribute(theme) {
  document.documentElement.setAttribute("data-theme", theme)
}

export default function ThemeToggle() {
  const [theme, setThemeState] = useState(getInitialTheme)

  useEffect(() => {
    setThemeAttribute(theme)
  }, [theme])

  const toggle = () => {
    setThemeState((prev) => {
      const next = prev === "light" ? "dark" : "light"
      try {
        localStorage.setItem("theme", next)
      } catch {
        // localStorage unavailable
      }
      return next
    })
  }

  const isLight = theme === "light"

  return (
    <button
      onClick={toggle}
      className="theme-toggle-btn"
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      title={isLight ? "Dark mode" : "Light mode"}
    >
      {isLight ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
    </button>
  )
}
