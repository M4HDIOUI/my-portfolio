import type React from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "mahdioui omar - Software Engineer",
  description: "Portfolio website of omar mahdioui, a Software Engineer and Full-Stack Developer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
