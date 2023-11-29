import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import SideNavAIH from "@/components/ui/SideNavAIH";
import { NextThemeContextProvider } from "./contexts/next-theme-context";
import { MUIThemeContextProvider } from "./contexts/mui-theme-context";

// Configura a fonte para usar as propriedades padrões
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Astro Image HUB",
  description: "Sua central de astro fotografia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className={`${poppins.className} bg-slate-200 pl-12 dark:bg-slate-950 md:pl-20`}
      >
        <NextThemeContextProvider>
          <MUIThemeContextProvider>
            <SideNavAIH />
            {children}
          </MUIThemeContextProvider>
        </NextThemeContextProvider>
      </body>
    </html>
  );
}
