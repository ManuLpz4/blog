import type { Metadata } from 'next'
import localFont from 'next/font/local'

import Footer from '../components/footer'
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
  title: "Manu Lopez's blog",
  description: "The Manu Lopez's blog",
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
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
