'use client'

import { useRef, ReactNode } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ParallaxSectionProps {
  children: ReactNode
  speed?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}

export default function ParallaxSection({ 
  children, 
  speed = 0.5, 
  direction = 'up',
  className = '' 
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  // Calculate transform based on direction
  const getTransform = () => {
    const distance = 100 * speed
    
    switch (direction) {
      case 'up':
        return useTransform(scrollYProgress, [0, 1], [distance, -distance])
      case 'down':
        return useTransform(scrollYProgress, [0, 1], [-distance, distance])
      case 'left':
        return useTransform(scrollYProgress, [0, 1], [distance, -distance])
      case 'right':
        return useTransform(scrollYProgress, [0, 1], [-distance, distance])
      default:
        return useTransform(scrollYProgress, [0, 1], [distance, -distance])
    }
  }

  const y = direction === 'up' || direction === 'down' ? getTransform() : 0
  const x = direction === 'left' || direction === 'right' ? getTransform() : 0

  return (
    <motion.div 
      ref={ref}
      style={{ x, y }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Background parallax component
export function ParallaxBackground({ 
  children, 
  speed = 0.3,
  className = '' 
}: { 
  children: ReactNode
  speed?: number
  className?: string 
}) {
  const ref = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200 * speed])

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div 
        style={{ y }}
        className="absolute inset-0 -z-10"
      >
        {children}
      </motion.div>
    </div>
  )
}
