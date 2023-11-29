"use client"

import { ReactNode } from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import { useTheme } from "next-themes";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

interface ProviderProps {
  children: ReactNode;
}

export function MUIThemeContextProvider({ children }: ProviderProps) {
  const { theme } = useTheme();

  let darkMode = (theme == "dark") || (window.matchMedia("(prefers-color-scheme: dark)").matches && theme == "system")

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
}
