import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import SmoothScroll from '@/components/SmoothScroll'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tanya Panchal - B.Tech CSE Student | Software Developer',
  description: 'Portfolio of Tanya Panchal, a passionate B.Tech Computer Science student specializing in software development, UI/UX design, and competitive programming.',
  keywords: 'Tanya Panchal, Software Developer, B.Tech CSE, Computer Science, React, Node.js, Portfolio, JavaScript, MongoDB',
  authors: [{ name: 'Tanya Panchal' }],
  openGraph: {
    title: 'Tanya Panchal - B.Tech CSE Student | Software Developer',
    description: 'Portfolio of Tanya Panchal, a passionate B.Tech Computer Science student specializing in software development, UI/UX design, and competitive programming.',
    url: 'https://panchaltanya1.netlify.app',
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  )
}