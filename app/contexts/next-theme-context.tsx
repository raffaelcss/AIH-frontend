"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

interface ProvidersProps {
  children?: ReactNode;
}

export function NextThemeContextProvider({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}
