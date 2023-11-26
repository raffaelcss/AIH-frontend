import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Poppins } from "next/font/google";

import SideNavAIH from "@/components/ui/SideNavAIH";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

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
        className={`${inter.className} bg-indigo-200 pl-12 transition-colors duration-200 ease-in dark:bg-slate-950 md:pl-20 ${poppins.className}`}
      >
        <Providers>
          <SideNavAIH />
          {children}
        </Providers>
      </body>
    </html>
  );
}
