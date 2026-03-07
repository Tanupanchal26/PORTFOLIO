'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export function GlowCard({ 
  children, 
  className = '',
  isDarkMode = true 
}: { 
  children: React.ReactNode
  className?: string
  isDarkMode?: boolean
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {isHovering && (
        <div
          className="pointer-events-none absolute inset-0 opacity-30 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, ${
              isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.08)'
            }, transparent)`
          }}
        />
      )}
      {children}
    </motion.div>
  )
}
