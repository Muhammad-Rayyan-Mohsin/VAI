'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedGradientProps {
  className?: string
  variant?: 'subtle' | 'vibrant' | 'monochrome'
  speed?: 'slow' | 'medium' | 'fast'
}

export default function AnimatedGradient({ 
  className = '', 
  variant = 'monochrome',
  speed = 'medium' 
}: AnimatedGradientProps) {
  const variants = {
    subtle: 'from-gray-50 via-white to-gray-100',
    vibrant: 'from-purple-400 via-pink-500 to-red-500',
    monochrome: 'from-gray-900 via-gray-600 to-black'
  }

  const speeds = {
    slow: 8,
    medium: 5,
    fast: 3
  }

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <motion.div
        className={cn(
          "absolute inset-0 bg-gradient-to-r opacity-10",
          variants[variant]
        )}
        animate={{
          background: [
            "linear-gradient(45deg, #000, #333, #666, #000)",
            "linear-gradient(135deg, #333, #666, #000, #333)",
            "linear-gradient(225deg, #666, #000, #333, #666)",
            "linear-gradient(315deg, #000, #333, #666, #000)",
          ]
        }}
        transition={{
          duration: speeds[speed],
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Floating orbs */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-black/5 to-transparent blur-3xl"
            style={{
              left: `${20 + i * 30}%`,
              top: `${10 + i * 20}%`,
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
          />
        ))}
      </div>
    </div>
  )
} 