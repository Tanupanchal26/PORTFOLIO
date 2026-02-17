'use client'

import { useRef, ReactNode } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

interface ScrollRevealProps {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  delay?: number
  duration?: number
  distance?: number
  once?: boolean
  className?: string
}

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  distance = 50,
  once = true,
  className = ''
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: '-100px' })
  const controls = useAnimation()

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: distance, opacity: 0 }
      case 'down':
        return { y: -distance, opacity: 0 }
      case 'left':
        return { x: distance, opacity: 0 }
      case 'right':
        return { x: -distance, opacity: 0 }
      case 'none':
        return { opacity: 0 }
      default:
        return { y: distance, opacity: 0 }
    }
  }

  const getAnimatePosition = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { y: 0 }
      case 'left':
      case 'right':
        return { x: 0 }
      default:
        return {}
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={getInitialPosition()}
      animate={isInView ? { ...getAnimatePosition(), opacity: 1 } : {}}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Staggered children animation container
export function ScrollStaggerContainer({
  children,
  className = '',
  staggerDelay = 0.1
}: {
  children: ReactNode
  className?: string
  staggerDelay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Individual item for stagger container
export function ScrollStaggerItem({
  children,
  direction = 'up',
  distance = 30
}: {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right'
  distance?: number
}) {
  const getVariants = () => {
    const base = { opacity: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }
    
    switch (direction) {
      case 'up':
        return {
          hidden: { ...base, y: distance },
          visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }
        }
      case 'down':
        return {
          hidden: { ...base, y: -distance },
          visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }
        }
      case 'left':
        return {
          hidden: { ...base, x: distance },
          visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }
        }
      case 'right':
        return {
          hidden: { ...base, x: -distance },
          visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }
        }
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }
        }
    }
  }

  return (
    <motion.div variants={getVariants()}>
      {children}
    </motion.div>
  )
}
