'use client'

import { useState, useEffect, lazy, Suspense } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Play, Brain, Code, Database, Zap } from 'lucide-react'
import { ButtonBase } from '@/components/ui/button-base'
import { Card } from '@/components/ui/card'
import GlassCard from '@/components/ui/glass-card'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { TextHoverEffect } from '@/components/ui/text-hover-effect'
import { Cover } from '@/components/ui/cover'
import { ContainerTextFlip } from '@/components/ui/container-text-flip'
import Navigation from '@/components/ui/navigation'
import ContactFormModal from '@/components/ui/contact-form-modal'
import { EXTERNAL_LINKS } from '@/lib/external-links'
import Image from 'next/image'
import Footer from '@/components/ui/footer'

// Lazy load heavy components
const BackgroundBeams = lazy(() => import('@/components/ui/background-beams').then(module => ({ default: module.BackgroundBeams })))
const BentoGridDemo = lazy(() => import('@/components/bento-grid-demo'))
const AppleCardsCarouselDemo = lazy(() => import('@/components/apple-cards-carousel-demo'))

export default function Home() {
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [showNav, setShowNav] = useState(true)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const techStack = [
    { name: 'Next.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg' },
    { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
    { name: 'Tailwind CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
    { name: 'TypeScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg' },
    { name: 'Supabase', logo: 'https://supabase.com/images/logo-dark.png' },
    { name: 'Python', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
    { name: 'TensorFlow', logo: 'https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg' },
    { name: 'PyTorch', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg' },
    { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
    { name: 'Node.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
  ]

  useEffect(() => {
    setIsVisible(true)

    let ticking = false
    
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY
        
        // Show navbar when scrolling up or at the top
        if (currentScrollY < lastScrollY || currentScrollY < 10) {
          setShowNav(true)
        } else {
          // Hide navbar when scrolling down
          setShowNav(false)
        }
        
        setLastScrollY(currentScrollY)
        ticking = false
      }
    }

    const throttledScrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(controlNavbar)
        ticking = true
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', throttledScrollHandler, { passive: true })
      
      return () => {
        window.removeEventListener('scroll', throttledScrollHandler)
      }
    }
  }, [lastScrollY])

  return (
    <div className="min-h-screen gradient-light-brand">
      {/* Navigation */}
      <div className="absolute top-0 left-0 right-0 z-[100]">
        <Navigation 
          currentPath="/" 
          showNav={true}
          actionButton={{
            text: 'Contact Us',
            onClick: () => setIsContactModalOpen(true)
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 relative overflow-hidden">
        <Suspense fallback={<div className="absolute inset-0 opacity-30" />}>
          <BackgroundBeams className="opacity-30" />
        </Suspense>
        <div className="max-w-6xl mx-auto text-center relative z-10 container-mobile">
          {/* Interactive Text Hover Effect */}
          <motion.div
            className="mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="scale-150 sm:scale-100 h-20 sm:h-auto overflow-visible">
              <TextHoverEffect text="VAIBRANT" />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <Typography 
              variant="h1" 
              as="div"
              className="text-brand-primary mb-3 sm:mb-5 px-2 sm:px-0"
            >
              <Cover>AI-Powered</Cover> Solutions.
              <br />
              <span className="text-brand-secondary">Built for Tomorrow.</span>
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <Typography 
              variant="body-lg"
              className="text-brand-primary/70 mb-4 sm:mb-6 max-w-2xl mx-auto px-2 sm:px-0"
            >
              Expert services in AI, Machine Learning, Data Science, and Web Development. 
              We transform your ideas into intelligent, automated solutions that drive real business value.
            </Typography>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center mb-8 sm:mb-12 px-2 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <ButtonBase
              variant="primary"
              size="md"
              className="w-full sm:w-auto"
              onClick={() => setIsContactModalOpen(true)}
            >
              Contact Us
            </ButtonBase>
            <ButtonBase
              variant="outline"
              size="md"
              className="w-full sm:w-auto flex items-center gap-2"
              onClick={() => router.push('/projects')}
            >
              <Play className="h-5 w-5" />
              View Our Work
            </ButtonBase>
          </motion.div>

          {/* Hero Dashboard Preview */}
          <motion.div
            className="relative max-w-4xl mx-auto px-2 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            <Card className="glass-card-lg">
              <div className="bg-gray-100 rounded-lg p-2 sm:p-4 md:p-6 mb-3 sm:mb-5">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-400 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 hidden sm:block">vaibrant.io/dashboard</div>
                </div>
                
                {/* Insights to Decisions SVG */}
                <div className="relative h-24 sm:h-32 md:h-36">
                  <svg className="w-full h-full" viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="insightGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#93c5fd" />
                        <stop offset="100%" stopColor="#a78bfa" />
                      </linearGradient>
                      <linearGradient id="decisionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#86efac" />
                        <stop offset="100%" stopColor="#7dd3fc" />
                      </linearGradient>
                      <linearGradient id="actionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#c084fc" />
                        <stop offset="100%" stopColor="#f472b6" />
                      </linearGradient>
                      <filter id="lightGlow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge> 
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    
                    {/* Data Points flowing in */}
                    <g opacity="0.7">
                      <circle cx="30" cy="35" r="3" fill="#64748b">
                        <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite"/>
                      </circle>
                      <circle cx="30" cy="60" r="2.5" fill="#64748b">
                        <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite"/>
                      </circle>
                      <circle cx="30" cy="85" r="3" fill="#64748b">
                        <animate attributeName="opacity" values="0.8;1;0.8" dur="1.8s" repeatCount="indefinite"/>
                      </circle>
                    </g>
                    
                    {/* Insight Lightbulb Moment */}
                    <g transform="translate(110, 45)">
                      {/* Lightbulb base */}
                      <rect x="10" y="25" width="12" height="6" rx="2" fill="#fbbf24" opacity="0.8"/>
                      
                      {/* Lightbulb bulb */}
                      <ellipse cx="16" cy="16" rx="9" ry="12" fill="url(#insightGradient)" opacity="0.9" filter="url(#lightGlow)">
                        <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite"/>
                      </ellipse>
                      
                      {/* Light rays */}
                      <g opacity="0.8">
                        <line x1="16" y1="0" x2="16" y2="6" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round">
                          <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite"/>
                        </line>
                        <line x1="28" y1="8" x2="24" y2="10" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round">
                          <animate attributeName="opacity" values="0.4;1;0.4" dur="2.2s" repeatCount="indefinite"/>
                        </line>
                        <line x1="32" y1="18" x2="26" y2="18" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round">
                          <animate attributeName="opacity" values="0.4;1;0.4" dur="1.8s" repeatCount="indefinite"/>
                        </line>
                        <line x1="28" y1="28" x2="24" y2="26" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round">
                          <animate attributeName="opacity" values="0.4;1;0.4" dur="2.5s" repeatCount="indefinite"/>
                        </line>
                        <line x1="4" y1="8" x2="8" y2="10" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round">
                          <animate attributeName="opacity" values="0.4;1;0.4" dur="2.1s" repeatCount="indefinite"/>
                        </line>
                        <line x1="0" y1="18" x2="6" y2="18" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round">
                          <animate attributeName="opacity" values="0.4;1;0.4" dur="2.3s" repeatCount="indefinite"/>
                        </line>
                        <line x1="4" y1="28" x2="8" y2="26" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round">
                          <animate attributeName="opacity" values="0.4;1;0.4" dur="1.9s" repeatCount="indefinite"/>
                        </line>
                      </g>
                      
                      {/* "Insight" label */}
                      <text x="16" y="45" fontSize="10" fill="#64748b" textAnchor="middle" fontWeight="600">Insight</text>
                    </g>
                    
                    {/* Decision Diamond */}
                    <g transform="translate(210, 50)">
                      <polygon points="15,0 30,12 15,24 0,12" fill="url(#decisionGradient)" opacity="0.9">
                        <animate attributeName="opacity" values="0.7;1;0.7" dur="2.5s" repeatCount="indefinite"/>
                      </polygon>
                      <text x="15" y="16" fontSize="12" fill="white" textAnchor="middle" fontWeight="700">?</text>
                      <text x="15" y="40" fontSize="10" fill="#64748b" textAnchor="middle" fontWeight="600">Decision</text>
                    </g>
                    
                    {/* Action Paths */}
                    <g transform="translate(310, 35)">
                      {/* Action 1 */}
                      <rect x="0" y="0" width="35" height="12" rx="6" fill="url(#actionGradient)" opacity="0.8">
                        <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
                      </rect>
                      <text x="17.5" y="8" fontSize="6" fill="white" textAnchor="middle" fontWeight="700">Execute</text>
                      
                      {/* Action 2 */}
                      <rect x="0" y="25" width="35" height="12" rx="6" fill="url(#actionGradient)" opacity="0.8">
                        <animate attributeName="opacity" values="0.6;1;0.6" dur="2.3s" repeatCount="indefinite"/>
                      </rect>
                      <text x="17.5" y="33" fontSize="6" fill="white" textAnchor="middle" fontWeight="700">Optimize</text>
                      
                      <text x="17.5" y="50" fontSize="10" fill="#64748b" textAnchor="middle" fontWeight="600">Actions</text>
                    </g>
                    
                    {/* Flow Arrows */}
                    <g stroke="#94a3b8" strokeWidth="2.5" fill="none" opacity="0.8">
                      {/* Data to Insight */}
                      <path d="M 55 60 L 100 60" strokeLinecap="round" markerEnd="url(#arrowMarker)">
                        <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
                      </path>
                      
                      {/* Insight to Decision */}
                      <path d="M 145 62 L 200 62" strokeLinecap="round" markerEnd="url(#arrowMarker)">
                        <animate attributeName="opacity" values="0.5;1;0.5" dur="2.2s" repeatCount="indefinite"/>
                      </path>
                      
                      {/* Decision to Actions */}
                      <path d="M 245 58 L 300 42" strokeLinecap="round" markerEnd="url(#arrowMarker)">
                        <animate attributeName="opacity" values="0.5;1;0.5" dur="1.8s" repeatCount="indefinite"/>
                      </path>
                      <path d="M 245 66 L 300 52" strokeLinecap="round" markerEnd="url(#arrowMarker)">
                        <animate attributeName="opacity" values="0.5;1;0.5" dur="2.1s" repeatCount="indefinite"/>
                      </path>
                    </g>
                    
                    {/* Arrow marker definition */}
                    <defs>
                      <marker id="arrowMarker" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto" markerUnits="strokeWidth">
                        <path d="M0,0 L0,8 L8,4 z" fill="#94a3b8"/>
                      </marker>
                    </defs>
                    
                    {/* Flowing insight particles */}
                    <circle cx="60" cy="45" r="1.5" fill="#a78bfa" opacity="0.6">
                      <animateTransform attributeName="transform" type="translate" values="0,0; 50,8; 100,15" dur="4s" repeatCount="indefinite"/>
                      <animate attributeName="opacity" values="0.6;1;0" dur="4s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="60" cy="75" r="1.5" fill="#7dd3fc" opacity="0.7">
                      <animateTransform attributeName="transform" type="translate" values="0,0; 60,0; 120,-8" dur="4.5s" repeatCount="indefinite"/>
                      <animate attributeName="opacity" values="0.7;1;0" dur="4.5s" repeatCount="indefinite"/>
                    </circle>
                  </svg>
                </div>
              </div>
              <div className="text-center text-brand-primary/70">
                <p className="text-xs sm:text-base md:text-lg font-medium mb-1 text-brand-primary">Our AI models deliver insights that drive decisions.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 mt-4 sm:mt-6">
                  <div className="text-left space-y-1.5">
                    <div className="flex items-center gap-2 text-xs sm:text-sm">
                      <Brain className="h-4 w-4 sm:h-5 sm:w-5 icon-brand-secondary flex-shrink-0" />
                      <span>AI & Machine Learning</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm">
                      <Database className="h-4 w-4 sm:h-5 sm:w-5 icon-brand-secondary flex-shrink-0" />
                      <span>Data Science & Analytics</span>
                    </div>
                  </div>
                  <div className="text-left space-y-2">
                    <div className="flex items-center gap-2 text-xs sm:text-sm">
                      <Code className="h-4 w-4 sm:h-5 sm:w-5 icon-brand-secondary flex-shrink-0" />
                      <span>Web Development</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm">
                      <Zap className="h-4 w-4 sm:h-5 sm:w-5 icon-brand-secondary flex-shrink-0" />
                      <span>Process Automation</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 md:py-20 bg-brand-background relative overflow-hidden">
        <Suspense fallback={<div className="absolute inset-0 opacity-20" />}>
          <BackgroundBeams className="opacity-20" />
        </Suspense>
        <div className="max-w-6xl mx-auto px-3 sm:px-6 container-mobile relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-primary mb-3 sm:mb-5 px-2 sm:px-0">
              "This feels like having a tech team on steroids."
            </h2>
            <div className="flex flex-col items-center mb-4 sm:mb-6">
              <p className="text-base sm:text-lg md:text-xl text-brand-primary/70 mb-2 sm:mb-3">We make your business</p>
              <div className="scale-75 sm:scale-90 md:scale-100">
                <ContainerTextFlip
                  words={["smarter", "faster", "automated", "intelligent", "scalable"]}
                  interval={1800}
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-primary bg-gradient-to-b from-neutral-100 to-neutral-200 border border-neutral-300"
                  textClassName="text-brand-primary"
                />
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Suspense fallback={<div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-pulse">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-32 bg-gray-200 rounded-lg"></div>
              ))}
            </div>}>
              <BentoGridDemo />
            </Suspense>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-12 sm:py-16 md:py-20 dark-section text-brand-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 container-mobile">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-2 sm:px-0">
              Expertise that scales.
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-brand-background/70 max-w-2xl mx-auto px-2 sm:px-0">
              From prototype to production, we deliver enterprise-grade AI and technology solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="mb-8 md:mb-0">
              <div className="space-y-6 sm:space-y-8">
                  {[
                    {
                      icon: <Brain className="h-5 w-5 sm:h-6 sm:w-6 text-white" />,
                      title: "AI Model Development",
                      description: "Custom machine learning models, neural networks, and AI systems tailored to your specific use cases."
                    },
                    {
                      icon: <Code className="h-5 w-5 sm:h-6 sm:w-6 text-white" />,
                      title: "Full-Stack Development",
                      description: "End-to-end web applications with modern frameworks, cloud deployment, and scalable architecture."
                    },
                    {
                      icon: <Database className="h-5 w-5 sm:h-6 sm:w-6 text-white" />,
                      title: "Data Engineering",
                      description: "Data pipelines, ETL processes, and infrastructure for handling large-scale data operations."
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 sm:gap-4"
                    >
                      <div className="flex-shrink-0 mt-1">
                        {item.icon}
                      </div>
                      <div className="text-left">
                        <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-brand-background">
                          {item.title}
                        </h3>
                        <p className="text-sm sm:text-base text-brand-background/70">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
            </div>

            <div className="relative mt-8 md:mt-0">
              <GlassCard className="p-4 sm:p-6 bg-brand-primary/30 backdrop-blur-sm border border-brand-secondary/30">
                <div className="bg-brand-primary/70 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="text-xs text-brand-background/70">AI Pipeline</div>
                  </div>
                  <div className="space-y-2 text-sm font-mono">
                    <div className="text-green-400">$ python train_model.py --dataset production</div>
                    <div className="text-brand-secondary">→ Training neural network...</div>
                    <div className="text-yellow-400">→ Accuracy: 94.7%</div>
                    <div className="text-green-400">✓ Model deployed to production</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-brand-background/70">Model Performance</span>
                    <span className="text-green-400 text-sm">94.7%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-brand-background/70">Inference Time</span>
                    <span className="text-brand-secondary text-sm">&lt; 50ms</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-brand-background/70">Data Points Processed</span>
                    <span className="text-brand-secondary text-sm">2.3M+</span>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-12 sm:py-16 md:py-20 gradient-bg-secondary w-full">
        <div className="w-full px-3 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-primary mb-3 sm:mb-4 px-2 sm:px-0">
            Our Technology Stack
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-brand-primary/70 mb-8 sm:mb-12 px-2 sm:px-0 max-w-4xl mx-auto">
            Powered by cutting-edge tools and frameworks
          </p>

          <div className="relative overflow-hidden w-full">
            <motion.div
              className="flex"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              {techStack.concat(techStack).map((tech, index) => (
                <motion.div
                  key={`${tech.name}-${index}`}
                  className="mx-4 flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    width={100}
                    height={64}
                    className="h-16 w-auto object-contain"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 gradient-bg-primary text-brand-background">
        <div className="max-w-4xl mx-auto px-3 sm:px-6 text-center container-mobile">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 px-2 sm:px-0">
            Ready to accelerate with AI?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-brand-background/90 px-2 sm:px-0">
            Let's discuss your project and build intelligent solutions that drive real business value.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
            <Button 
              onClick={() => setIsContactModalOpen(true)}
              className="bg-brand-background text-brand-primary hover:bg-brand-background/90 rounded-full px-5 sm:px-7 py-2.5 text-base sm:text-lg font-semibold w-full sm:w-auto min-h-[44px]"
            >
              Contact Us
            </Button>
            <Button 
              className="bg-transparent border-2 border-brand-background text-brand-background hover:bg-brand-background hover:text-brand-primary rounded-full px-5 sm:px-7 py-2.5 text-base sm:text-lg font-semibold transition-all duration-300 w-full sm:w-auto min-h-[44px]"
              onClick={() => window.open(EXTERNAL_LINKS.CALENDLY, '_blank')}
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Contact Form Modal */}
      <ContactFormModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  )
} 