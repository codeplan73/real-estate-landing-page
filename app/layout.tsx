import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './Navbar'
import Footer from './Footer'
import '@radix-ui/themes/styles.css'
import { Theme } from '@radix-ui/themes'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Real Estate Landing Page',
  description: 'Real Estate Landing Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme appearance="light" grayColor="sage">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Theme>
      </body>
    </html>
  )
}
