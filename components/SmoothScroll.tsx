'use client'

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

interface SmoothScrollProps {
  children: React.ReactNode
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.6,
      touchMultiplier: 1.5,
      infinite: false,
    })

    lenisRef.current = lenis

    // Add lenis class to html for CSS targeting
    document.documentElement.classList.add('lenis', 'lenis-smooth')

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Handle resize
    function handleResize() {
      lenis.resize()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      document.documentElement.classList.remove('lenis', 'lenis-smooth')
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  return <>{children}</>
}

// Export a hook for use in components
export function useLenis() {
  return typeof window !== 'undefined' ? require('lenis') : null
}
