'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  life: number
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const particles: Particle[] = []
    const particleCount = 50
    let animationId: number

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.3 + 0.1,
      life: Math.random() * 100 + 50
    })

    const initParticles = () => {
      for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle())
      }
    }

    const updateParticles = () => {
      particles.forEach((particle, index) => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.life--

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1

        // Fade out as life decreases
        particle.opacity = Math.max(0, particle.life / 100 * 0.3)

        // Remove dead particles and create new ones
        if (particle.life <= 0) {
          particles[index] = createParticle()
        }
      })
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach(particle => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 0, 0, ${particle.opacity})`
        ctx.fill()
      })

      // Draw connections
      particles.forEach((particle1, i) => {
        particles.slice(i + 1).forEach(particle2 => {
          const dx = particle1.x - particle2.x
          const dy = particle1.y - particle2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(particle1.x, particle1.y)
            ctx.lineTo(particle2.x, particle2.y)
            ctx.strokeStyle = `rgba(0, 0, 0, ${0.1 * (1 - distance / 100)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })
    }

    const animate = () => {
      updateParticles()
      drawParticles()
      animationId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    initParticles()
    animate()

    window.addEventListener('resize', resizeCanvas)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-30"
      />
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 border border-gray-300 rotate-45"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              rotate: [45, 135, 45],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  )
} 