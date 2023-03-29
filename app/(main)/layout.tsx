import Navbar from './Navbar'
import '../globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'], variable: '--inter-font' })

export const metadata = {
  title: 'Dio Dziban',
  description:
    "Dio's portfolio website, built with Next13, React, TypeScript, and Sanity CMS.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
