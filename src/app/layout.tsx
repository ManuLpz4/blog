import type { Metadata } from 'next'
import localFont from 'next/font/local'

import { Footer } from '../components/footer'
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
          <ThemeToggle className="absolute right-4 top-4" />
          <div className="m-auto flex min-h-dvh max-w-screen-lg flex-col gap-20 px-8 py-20">
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
