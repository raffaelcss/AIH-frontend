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
  const { resolvedTheme } = useTheme();

  let darkMode = (resolvedTheme == "dark");

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
}
