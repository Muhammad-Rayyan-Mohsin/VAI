'use client'

import { useRef, ReactNode } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'rotate'
  delay?: number
  duration?: number
  distance?: number
  once?: boolean
  parallax?: boolean
  parallaxOffset?: number
}

export default function ScrollReveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 0.6,
  distance = 50,
  once = true,
  parallax = false,
  parallaxOffset = 100
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [parallaxOffset, -parallaxOffset])

  const getInitialTransform = () => {
    switch (direction) {
      case 'up':
        return { y: distance, opacity: 0 }
      case 'down':
        return { y: -distance, opacity: 0 }
      case 'left':
        return { x: distance, opacity: 0 }
      case 'right':
        return { x: -distance, opacity: 0 }
      case 'scale':
        return { scale: 0.8, opacity: 0 }
      case 'rotate':
        return { rotate: 45, opacity: 0 }
      default:
        return { y: distance, opacity: 0 }
    }
  }

  const getAnimateTransform = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { y: 0, opacity: 1 }
      case 'left':
      case 'right':
        return { x: 0, opacity: 1 }
      case 'scale':
        return { scale: 1, opacity: 1 }
      case 'rotate':
        return { rotate: 0, opacity: 1 }
      default:
        return { y: 0, opacity: 1 }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={getInitialTransform()}
      animate={isInView ? getAnimateTransform() : getInitialTransform()}
      transition={{
        duration,
        delay,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
      style={parallax ? { y } : {}}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
} 