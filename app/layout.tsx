import './globals.css'
import { Inter } from 'next/font/google'
import LenisProvider from '@/components/LenisProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tanya Panchal | Software Developer',
  description: 'Portfolio of Tanya Panchal, a passionate B.Tech Computer Science student specializing in software development, UI/UX design, and competitive programming.',
  keywords: 'Tanya Panchal, Software Developer, B.Tech CSE, Computer Science, React, Node.js, Portfolio, JavaScript, MongoDB',
  author: 'Tanya Panchal',
  openGraph: {
    title: 'Tanya Panchal | Software Developer',
    description: 'Portfolio of Tanya Panchal, a passionate B.Tech Computer Science student specializing in software development, UI/UX design, and competitive programming.',
    url: 'https://panchaltanya.dev',
    siteName: 'TanyaPanchal Portfolio',
    type: 'website',
  },
}

export const viewport = {
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
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  )
}
