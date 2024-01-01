import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/shared/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'COI',
  description: 'The College Oppurtunity Initative is a non-profit tottally free resources to help kids secure admission into their dream schools',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
