import type { Metadata } from "next"
import "./globals.css"
import { Inter as FontSans } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import localFont from "next/font/local"
import { cn } from "@/lib/utils"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Darkside Records",
  description: "Database for the Darkside",
}

const fontJedi = localFont({
  src: "../fonts/starjedi.woff2",
  display: "swap",
  variable: "--font-jedi",
})

const fontBattleStar = localFont({
  src: "../fonts/battlestar.woff2",
  display: "swap",
  variable: "--font-battle-star",
})

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background no-scrollbar font-sans antialiased flex flex-col justify-between items-center",
          fontSans.variable,
          fontBattleStar.variable,
          fontJedi.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
