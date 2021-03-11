import React from "react"
import { ThemeProvider } from "styled-components"

const theme = {
  color: {
    white: "hsl(0, 0%, 96%)",
    grey100: "hsl(44, 0%, 96%)",
    black: "hsl(44, 0%, 0%)",
    yellow: "hsl(44, 94%, 57%)",
  },
  boxShadow: {
    blue: "0 0 0 2px rgba(24, 144, 255, 0.2)",
  },
  border: {
    button: `1px solid hsl(0, 0%, 70%)`,
  },
  mainFont: "Montserrat",
  fontWeight: {
    light: 300,
    medium: 400,
    bold: 600,
    bold2: 700,
    black: 800,
  },
  fontSize: {
    xxs: `1rem`,
    xs: "1.2rem",
    s: "1.5rem",
    m: "2.1rem",
    l: "2.4rem",
    xl: "4rem",
    xxl: "5rem",
  },
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
