'use client'

import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  intensity?: number
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

export default function MagneticButton({
  children,
  className = '',
  intensity = 0.3,
  onClick,
  variant = 'primary',
  size = 'md'
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, { stiffness: 300, damping: 30 })
  const springY = useSpring(y, { stiffness: 300, damping: 30 })

  const rotateX = useTransform(springY, [-0.5, 0.5], ["7.5deg", "-7.5deg"])
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-7.5deg", "7.5deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY

    const maxDistance = Math.max(rect.width, rect.height) / 2

    x.set((distanceX / maxDistance) * intensity)
    y.set((distanceY / maxDistance) * intensity)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  const variants = {
    primary: 'bg-black text-white hover:bg-gray-800 border-black',
    secondary: 'bg-gray-100 text-black hover:bg-gray-200 border-gray-300',
    outline: 'bg-transparent text-black border-black hover:bg-black hover:text-white'
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        x: springX,
        y: springY,
        rotateX: rotateX,
        rotateY: rotateY,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "relative rounded-lg font-medium transition-all duration-300 border-2 overflow-hidden",
        variants[variant],
        sizes[size],
        className
      )}
      whileTap={{ scale: 0.95 }}
    >
      {/* Ripple effect */}
      <motion.div
        className="absolute inset-0 bg-white/20 rounded-lg"
        initial={{ scale: 0, opacity: 0 }}
        animate={isHovered ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Glowing border */}
      <motion.div
        className="absolute inset-0 rounded-lg border-2 border-white/50"
        initial={{ opacity: 0 }}
        animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Content */}
      <span 
        className="relative z-10 block"
        style={{ transform: "translateZ(20px)" }}
      >
        {children}
      </span>
    </motion.button>
  )
} 