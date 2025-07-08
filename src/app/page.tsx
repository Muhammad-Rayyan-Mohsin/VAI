'use client'

import { useState, useEffect, lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import GlassCard from '@/components/ui/glass-card'
import { TextHoverEffect } from '@/components/ui/text-hover-effect'
import { Cover } from '@/components/ui/cover'
import { ContainerTextFlip } from '@/components/ui/container-text-flip'
import Navigation from '@/components/ui/navigation'

// Lazy load heavy components
const BackgroundBeams = lazy(() => import('@/components/ui/background-beams').then(module => ({ default: module.BackgroundBeams })))
const BentoGridDemo = lazy(() => import('@/components/bento-grid-demo'))
import { 
  Play,
  Users,
  MessageSquare,
  BarChart3,
  Zap,
  Shield,
  Globe,
  Star,
  Brain,
  Code,
  Database,
  Cpu,
  TrendingUp,
  Layers
} from 'lucide-react'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [showNav, setShowNav] = useState(true)

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
      <Navigation currentPath="/" showNav={showNav} />

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
            <div className="scale-75 sm:scale-100">
              <TextHoverEffect text="VAIBRANT" />
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary mb-4 sm:mb-6 leading-tight px-2 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <Cover>AI-Powered</Cover> Solutions.
            <br />
            <span className="text-brand-secondary">Built for Tomorrow.</span>
          </motion.h1>
          
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-brand-primary/70 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Expert services in AI, Machine Learning, Data Science, and Web Development. 
            We transform your ideas into intelligent, automated solutions that drive real business value.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <Button className="btn-brand-primary rounded-full px-6 sm:px-8 py-3 text-base sm:text-lg w-full sm:w-auto">
              Start Your Project
            </Button>
            <Button className="btn-brand-outline rounded-full px-6 sm:px-8 py-3 text-base sm:text-lg flex items-center justify-center gap-2 w-full sm:w-auto">
              <Play className="h-4 w-4 sm:h-5 sm:w-5" />
              View Our Work
            </Button>
          </motion.div>

          {/* Hero Dashboard Preview */}
          <motion.div
            className="relative max-w-4xl mx-auto px-2 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            <GlassCard className="p-4 sm:p-6 md:p-8 bg-white/60 backdrop-blur-sm border border-white/20">
              <div className="bg-gray-100 rounded-lg p-3 sm:p-4 md:p-6 mb-4 sm:mb-6">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-400 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 hidden sm:block">vaibrant.io/dashboard</div>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <div className="h-3 sm:h-4 bg-gradient-to-r from-blue-300 to-purple-300 rounded w-3/4"></div>
                  <div className="h-3 sm:h-4 bg-gradient-to-r from-green-300 to-blue-300 rounded w-1/2"></div>
                  <div className="h-3 sm:h-4 bg-gradient-to-r from-purple-300 to-pink-300 rounded w-2/3"></div>
                </div>
              </div>
              <div className="text-center text-brand-primary/70">
                <p className="text-sm sm:text-base md:text-lg font-medium mb-2 text-brand-primary">Our AI models deliver insights that drive decisions.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 mt-4 sm:mt-6">
                  <div className="text-left space-y-2">
                    <div className="flex items-center gap-2 text-xs sm:text-sm">
                      <Brain className="h-3 w-3 sm:h-4 sm:w-4 icon-brand-secondary flex-shrink-0" />
                      <span>AI & Machine Learning</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm">
                      <Database className="h-3 w-3 sm:h-4 sm:w-4 icon-brand-secondary flex-shrink-0" />
                      <span>Data Science & Analytics</span>
                    </div>
                  </div>
                  <div className="text-left space-y-2">
                    <div className="flex items-center gap-2 text-xs sm:text-sm">
                      <Code className="h-3 w-3 sm:h-4 sm:w-4 icon-brand-secondary flex-shrink-0" />
                      <span>Web Development</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm">
                      <Zap className="h-3 w-3 sm:h-4 sm:w-4 icon-brand-secondary flex-shrink-0" />
                      <span>Process Automation</span>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 md:py-20 bg-brand-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 container-mobile">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-primary mb-4 sm:mb-6 px-2 sm:px-0">
              "This feels like having a tech team on steroids."
            </h2>
            <div className="flex flex-col items-center mb-4 sm:mb-6">
              <p className="text-base sm:text-lg md:text-xl text-brand-primary/70 mb-3 sm:mb-4">We make your business</p>
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
                      icon: <Brain className="h-5 w-5 sm:h-6 sm:w-6 text-brand-secondary" />,
                      title: "AI Model Development",
                      description: "Custom machine learning models, neural networks, and AI systems tailored to your specific use cases."
                    },
                    {
                      icon: <Layers className="h-5 w-5 sm:h-6 sm:w-6 text-brand-secondary" />,
                      title: "Full-Stack Development",
                      description: "End-to-end web applications with modern frameworks, cloud deployment, and scalable architecture."
                    },
                    {
                      icon: <Database className="h-5 w-5 sm:h-6 sm:w-6 text-brand-secondary" />,
                      title: "Data Engineering",
                      description: "Data pipelines, ETL processes, and infrastructure for handling large-scale data operations."
                    }
                  ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 sm:gap-4"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex-shrink-0 p-1.5 sm:p-2 bg-brand-primary/50 rounded-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-brand-background">{item.title}</h3>
                      <p className="text-sm sm:text-base text-brand-background/70">{item.description}</p>
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

      {/* Testimonials */}
      <section className="py-12 sm:py-16 md:py-20 gradient-bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center container-mobile">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-primary mb-3 sm:mb-4 px-2 sm:px-0">
            Transforming businesses with AI.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-brand-primary/70 mb-8 sm:mb-12 px-2 sm:px-0">
            See how our AI and technology solutions are driving real results
          </p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              {
                content: "VAIBRANT built an AI system that reduced our processing time by 80%. Game-changing results.",
                author: "David Chen",
                role: "CTO, LogiFlow",
                rating: 5
              },
              {
                content: "Their data science expertise uncovered insights we never knew existed. ROI was immediate.",
                author: "Sarah Martinez",
                role: "VP Analytics, RetailMax",
                rating: 5
              },
              {
                content: "The web platform they built handles millions of users flawlessly. Exceptional engineering.",
                author: "Michael Torres",
                role: "CEO, CloudScale",
                rating: 5
              }
            ].map((testimonial, index) => (
                              <Card key={index} className="p-4 sm:p-6 card-hover">
                  <CardContent className="p-0">
                    <div className="flex mb-3 sm:mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm sm:text-base text-brand-primary/70 mb-4 sm:mb-6 italic">"{testimonial.content}"</p>
                    <div>
                      <div className="text-sm sm:text-base font-semibold text-brand-primary">{testimonial.author}</div>
                      <div className="text-xs sm:text-sm text-brand-primary/50">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
            ))}
          </motion.div>
        </div>
      </section>

            {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 gradient-bg-primary text-brand-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center container-mobile">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 px-2 sm:px-0">
            Ready to accelerate with AI?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-brand-background/90 px-2 sm:px-0">
            Let's discuss your project and build intelligent solutions that drive real business value.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
            <Button className="bg-brand-background text-brand-primary hover:bg-brand-background/90 rounded-full px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold w-full sm:w-auto">
              Start Your Project
            </Button>
            <Button 
              className="bg-transparent border-2 border-brand-background text-brand-background hover:bg-brand-background hover:text-brand-primary rounded-full px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold transition-all duration-300 w-full sm:w-auto"
              onClick={() => window.open('https://calendly.com/usmanabbas5030', '_blank')}
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-primary text-brand-background py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 container-mobile">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="sm:col-span-2 md:col-span-1 mb-6 sm:mb-0">
              <div className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">VAIBRANT</div>
              <p className="text-sm sm:text-base text-brand-background/70 mb-4">
                Expert AI, ML, and technology services that transform businesses and drive innovation.
              </p>
              <div className="flex space-x-3 sm:space-x-4">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-brand-secondary/20 rounded-lg flex items-center justify-center">
                  <span className="text-xs">Li</span>
                </div>
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-brand-secondary/20 rounded-lg flex items-center justify-center">
                  <span className="text-xs">Gh</span>
                </div>
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-brand-secondary/20 rounded-lg flex items-center justify-center">
                  <span className="text-xs">X</span>
                </div>
              </div>
            </div>
            
            {[
              {
                title: "Services",
                links: ["AI & Machine Learning", "Data Science", "Web Development", "Automation"]
              },
              {
                title: "Expertise",
                links: ["Deep Learning", "Analytics", "Cloud Solutions", "Consulting"]
              },
              {
                title: "Company",
                links: ["About Us", "Case Studies", "Careers", "Contact"]
              }
            ].map((column, index) => (
              <div key={index} className="mb-6 sm:mb-0">
                <h3 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-xs sm:text-sm text-brand-background/70 hover:text-brand-background transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-brand-secondary/30 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-brand-background/70 text-xs sm:text-sm">
              © 2024 VAIBRANT. All rights reserved.
            </p>
            <div className="flex space-x-4 sm:space-x-6 text-xs sm:text-sm text-brand-background/70 mt-3 md:mt-0">
              <a href="#" className="hover:text-brand-background transition-colors">Privacy</a>
              <a href="#" className="hover:text-brand-background transition-colors">Terms</a>
              <a href="#" className="hover:text-brand-background transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 