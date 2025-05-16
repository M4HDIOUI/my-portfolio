"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import styles from "./theme-toggle.module.css"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <button className={styles.button} onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      <Sun className={`${styles.icon} ${styles.sunIcon}`} />
      <Moon className={`${styles.icon} ${styles.moonIcon}`} />
      <span className={styles.srOnly}>Toggle theme</span>
    </button>
  )
}
