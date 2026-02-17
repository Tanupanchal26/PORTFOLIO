'use client'

import { useEffect, useRef, useState } from 'react'
import Lenis from 'lenis'

interface UseParallaxOptions {
  speed?: number
  direction?: 'vertical' | 'horizontal'
  disabled?: boolean
}

export function useParallax(options: UseParallaxOptions = {}) {
  const { speed = 0.5, direction = 'vertical', disabled = false } = options
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    if (disabled) return

    let lenis: Lenis | null = null
    let animationId: number

    const initLenis = () => {
      lenis = new Lenis({
        duration: 1.2,
      })
    }

    const handleScroll = () => {
      if (!ref.current) return
      
      const rect = ref.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const elementTop = rect.top
      const elementHeight = rect.height
      
      // Calculate scroll progress (0 to 1)
      const scrollProgress = (windowHeight - elementTop) / (windowHeight + elementHeight)
      
      // Calculate offset based on direction and speed
      let newOffset: number
      if (direction === 'vertical') {
        newOffset = (scrollProgress - 0.5) * 200 * speed
      } else {
        newOffset = (scrollProgress - 0.5) * 100 * speed
      }
      
      setOffset(newOffset)
    }

    const raf = (time: number) => {
      if (lenis) {
        lenis.raf(time)
      }
      animationId = requestAnimationFrame(raf)
    }

    // Initialize Lenis if not already running
    if (typeof window !== 'undefined') {
      initLenis()
      handleScroll()
      animationId = requestAnimationFrame(raf)
      
      window.addEventListener('scroll', handleScroll, { passive: true })
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll)
      }
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
      if (lenis) {
        lenis.destroy()
      }
    }
  }, [speed, direction, disabled])

  return { ref, offset }
}

// Hook to get scroll progress for a specific element
export function useScrollProgress(ref: React.RefObject<HTMLElement>) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!ref.current) return

    const handleScroll = () => {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const elementTop = rect.top
      const elementHeight = rect.height

      // Calculate progress from 0 (top of viewport) to 1 (bottom of viewport)
      const rawProgress = (windowHeight - elementTop) / (windowHeight + elementHeight)
      const clampedProgress = Math.max(0, Math.min(1, rawProgress))
      
      setProgress(clampedProgress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [ref])

  return progress
}

// Hook to detect when element is in viewport
export function useInView(ref: React.RefObject<HTMLElement>, threshold = 0.1) {
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold }
    )

    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
  }, [ref, threshold])

  return isInView
}
