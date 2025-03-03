import { ThemeProvider } from "@/providers/theme-provider";
import './globals.css'
import GlobalContext from "@/context";
import { ReactNode } from "react";
import { Metadata } from "next";

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Netflix clone",
  description: "Netflix clone build with Next.js",
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
      
        <body>
          <ThemeProvider attribute="class"  defaultTheme="dark">
            <GlobalContext>
            {children}
            </GlobalContext>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
