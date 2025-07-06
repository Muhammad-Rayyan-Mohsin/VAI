'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface LoadingAnimationProps {
  variant?: 'dots' | 'spinner' | 'pulse' | 'morphing'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function LoadingAnimation({ 
  variant = 'dots', 
  size = 'md', 
  className = '' 
}: LoadingAnimationProps) {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  const dotSizes = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4'
  }

  if (variant === 'dots') {
    return (
      <div className={cn("flex space-x-1", className)}>
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className={cn("bg-black rounded-full", dotSizes[size])}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    )
  }

  if (variant === 'spinner') {
    return (
      <motion.div
        className={cn(
          "border-2 border-gray-300 border-t-black rounded-full",
          sizes[size],
          className
        )}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    )
  }

  if (variant === 'pulse') {
    return (
      <motion.div
        className={cn(
          "bg-black rounded-full",
          sizes[size],
          className
        )}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    )
  }

  if (variant === 'morphing') {
    return (
      <motion.div
        className={cn(
          "bg-black",
          sizes[size],
          className
        )}
        animate={{
          borderRadius: [
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "30% 60% 70% 40% / 50% 60% 30% 60%",
            "60% 40% 30% 70% / 60% 30% 70% 40%"
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    )
  }

  return null
} 