import type { Metadata } from 'next'
import localFont from 'next/font/local'

import { ThemeProvider } from '../components/theme-provider'
import { ThemeToggle } from '../components/theme-toggle'
import './globals.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: "Manu Lopez's Blog",
  description: "The Manu Lopez's Blog",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <ThemeToggle className="absolute top-4 right-4" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
