import 'src/app/globals.css'
import { NavBar } from '@/components/navbar/NavBar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Main feed',
  description: 'Spark dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={inter.className}>
        <NavBar />
        {children}
    </body>
    </html>
  )
}
