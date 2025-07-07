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
  hover3d = false 
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
    if (!ref.current || !hover3d) return

    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPct = Math.max(-0.5, Math.min(0.5, mouseX / width - 0.5))
    const yPct = Math.max(-0.5, Math.min(0.5, mouseY / height - 0.5))

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
      onMouseMove={hover3d ? handleMouseMove : undefined}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={hover3d ? {
        rotateY: rotateY,
        rotateX: rotateX,
        transformStyle: "preserve-3d",
      } : {}}
      className={cn(
        "relative rounded-2xl border shadow-xl will-change-transform",
        intensityClasses[intensity],
        hover3d ? "transition-shadow duration-200" : "transition-all duration-200",
        isHovered && hover3d && "shadow-2xl",
        isHovered && !hover3d && "shadow-2xl scale-[1.02]",
        className
      )}
      whileHover={hover3d ? {} : { scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-black/10 pointer-events-none" />
      
      {/* Shimmer effect - only render when hovered for performance */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{
            opacity: [0, 1, 0],
            x: ['-100%', '100%']
          }}
          transition={{ duration: 0.5 }}
        />
      )}
      
      {/* Content */}
      <div 
        className="relative z-10 p-6"
        style={hover3d ? { transform: "translateZ(50px)" } : {}}
      >
        {children}
      </div>
    </motion.div>
  )
} 