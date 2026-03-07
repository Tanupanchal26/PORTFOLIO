'use client'

import { motion } from 'framer-motion'

export function AnimatedText({ text, className = '' }: { text: string; className?: string }) {
  const words = text.split(' ')
  
  return (
    <div className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
}
