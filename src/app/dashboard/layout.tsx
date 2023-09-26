import { NavBar } from '@/components/navbar/NavBar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Footer } from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spark',
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
        <Footer />
    </body>
    </html>
  )
}
