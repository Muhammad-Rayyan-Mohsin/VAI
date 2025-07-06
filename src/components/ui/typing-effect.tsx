'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TypingEffectProps {
  text: string
  speed?: number
  className?: string
}

export default function TypingEffect({ text, speed = 100, className = '' }: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <div className={className}>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {displayedText}
      </motion.span>
      <motion.span
        className="inline-block w-0.5 h-6 bg-current ml-1"
        animate={{ opacity: showCursor ? 1 : 0 }}
        transition={{ duration: 0.1 }}
      />
    </div>
  )
} 