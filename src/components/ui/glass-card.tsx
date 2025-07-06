'use client'

import { ReactNode, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GlassCardProps {
  children: ReactNode
  className?: string
  intensity?: 'light' | 'medium' | 'heavy'
  hover3d?: boolean
}

export default function GlassCard({ 
  children, 
  className = '', 
  intensity = 'medium',
  hover3d = true 
}: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  )
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  )

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  const intensityClasses = {
    light: 'backdrop-blur-sm bg-white/10 border-white/20',
    medium: 'backdrop-blur-md bg-white/20 border-white/30',
    heavy: 'backdrop-blur-lg bg-white/30 border-white/40'
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={hover3d ? {
        rotateY: rotateY,
        rotateX: rotateX,
        transformStyle: "preserve-3d",
      } : {}}
      className={cn(
        "relative rounded-2xl border shadow-xl transition-all duration-300",
        intensityClasses[intensity],
        isHovered && "shadow-2xl scale-105",
        className
      )}
      whileHover={{ scale: hover3d ? 1 : 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-black/10 pointer-events-none" />
      
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={isHovered ? {
          opacity: [0, 1, 0],
          x: ['-100%', '100%']
        } : {}}
        transition={{ duration: 0.6 }}
      />
      
      {/* Content */}
      <div 
        className="relative z-10 p-6"
        style={hover3d ? { transform: "translateZ(75px)" } : {}}
      >
        {children}
      </div>
    </motion.div>
  )
} 