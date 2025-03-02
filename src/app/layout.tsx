import type { Metadata } from 'next'
import localFont from 'next/font/local'

import { Analytics } from '../components/analytics'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { ThemeProvider } from '../components/theme-provider'
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
      <body
        className={`m-auto flex min-h-dvh max-w-screen-sm flex-col gap-8 p-8 sm:px-0 sm:py-20 ${geistSans.variable} ${geistMono.variable} before:fixed before:right-0 before:top-0 before:h-16 before:w-full before:bg-gradient-to-b before:from-background after:fixed after:bottom-0 after:right-0 after:h-16 after:w-full after:bg-gradient-to-t after:from-background`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
