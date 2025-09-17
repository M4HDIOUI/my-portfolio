"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import styles from "./theme-toggle.module.css"
import { useRef } from "react"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  function handleClick() {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <button className={styles.button} onClick={handleClick}>
      <Sun className={`${styles.icon} ${styles.sunIcon}`} />
      <Moon className={`${styles.icon} ${styles.moonIcon}`} />
      <span className={styles.srOnly}>Toggle theme</span>
    </button>
  )
}
