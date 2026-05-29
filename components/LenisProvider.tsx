'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

type LenisScrollTarget = string | number | HTMLElement

declare global {
  interface Window {
    __lenis?: Lenis
  }
}

const SCROLL_OFFSET = -80
const EASE_OUT_CUBIC = (t: number) => 1 - Math.pow(1 - t, 3)

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.1,
      syncTouch: true,
      infinite: false,
    })

    window.__lenis = lenis

    let frameId = 0
    const raf = (time: number) => {
      lenis.raf(time)
      frameId = window.requestAnimationFrame(raf)
    }
    frameId = window.requestAnimationFrame(raf)

    const scrollTo = (target: LenisScrollTarget) => {
      lenis.scrollTo(target, {
        offset: SCROLL_OFFSET,
        duration: 1.2,
        easing: EASE_OUT_CUBIC,
      })
    }

    const handleAnchorClick = (event: MouseEvent) => {
      const clickedElement = event.target as HTMLElement | null
      const anchor = clickedElement?.closest('a[href^="#"]') as HTMLAnchorElement | null
      if (!anchor) return

      const href = anchor.getAttribute('href')
      if (!href || href === '#') return

      const target = document.getElementById(href.slice(1))
      if (!target) return

      event.preventDefault()
      scrollTo(target)
      window.history.replaceState(null, '', href)
    }

    document.addEventListener('click', handleAnchorClick)

    if (window.location.hash.length > 1) {
      const initialTarget = document.getElementById(window.location.hash.slice(1))
      if (initialTarget) {
        window.requestAnimationFrame(() => scrollTo(initialTarget))
      }
    }

    return () => {
      document.removeEventListener('click', handleAnchorClick)
      window.cancelAnimationFrame(frameId)
      lenis.destroy()
      delete window.__lenis
    }
  }, [])

  return <>{children}</>
}
