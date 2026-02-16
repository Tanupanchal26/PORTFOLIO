import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata, Viewport } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tanya Panchal - B.Tech CSE Student | Software Developer',
  description: 'Portfolio of Tanya Panchal, a passionate B.Tech Computer Science student specializing in software development, UI/UX design, and competitive programming.',
  keywords: 'Tanya Panchal, Software Developer, B.Tech CSE, Computer Science, React, Node.js, Portfolio, JavaScript, MongoDB',
  authors: [{ name: 'Tanya Panchal' }],
  openGraph: {
    title: 'Tanya Panchal - B.Tech CSE Student | Software Developer',
    description: 'Portfolio of Tanya Panchal, a passionate B.Tech Computer Science student specializing in software development, UI/UX design, and competitive programming.',
    url: 'https://tanyapanchal.dev',
    siteName: 'Tanya Panchal Portfolio',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}