import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ReactToast from './ReactToast'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'go student',
  description: 'university of buea go student clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className }>
      <ReactToast/>
        {children}
      </body>

    </html>
  )
}
