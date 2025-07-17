'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import Navigation from '@/components/ui/navigation'
import StartProjectModal from '@/components/ui/start-project-modal'
import { Brain, Database, BarChart3, Zap, Bot, Code, TrendingUp, Shield } from 'lucide-react'
import ShootingStarsAndStarsBackgroundDemo from '@/components/ui/shooting-stars-and-stars-background-demo'

interface Service {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  color: string
  pattern: string
}

const services: Service[] = [
  {
    id: 'data-analytics',
    name: 'Data Analytics & Insights',
    description: 'Transform raw data into actionable insights with advanced analytics, PCA, CLV analysis, and comprehensive reporting.',
    icon: <BarChart3 className="h-8 w-8" />,
    color: 'bg-black',
    pattern: 'text-white'
  },
  {
    id: 'automation',
    name: 'Intelligent Automation',
    description: 'Streamline workflows with AI-powered automation systems, smart email management, and custom business process optimization.',
    icon: <Zap className="h-8 w-8" />,
    color: 'bg-white',
    pattern: 'text-black'
  },
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    description: 'Advanced machine learning solutions including demand forecasting, predictive modeling, and custom AI model development.',
    icon: <Brain className="h-8 w-8" />,
    color: 'bg-black',
    pattern: 'text-white'
  },
  {
    id: 'data-visualization',
    name: 'Data Visualization',
    description: 'Interactive dashboards and visualization platforms for complex datasets with real-time monitoring and forecasting capabilities.',
    icon: <Database className="h-8 w-8" />,
    color: 'bg-white',
    pattern: 'text-black'
  },
  {
    id: 'ai-education',
    name: 'AI-Powered Education',
    description: 'Intelligent learning systems with personalized study assistance, content summarization, and adaptive learning technologies.',
    icon: <Bot className="h-8 w-8" />,
    color: 'bg-black',
    pattern: 'text-white'
  },
  {
    id: 'nlp-ai',
    name: 'NLP & Fine-Tuned Models',
    description: 'Custom language models, chain-of-thought reasoning, and specialized AI solutions for domain-specific applications.',
    icon: <Code className="h-8 w-8" />,
    color: 'bg-white',
    pattern: 'text-black'
  },
  {
    id: 'marketing-optimization',
    name: 'Marketing Intelligence',
    description: 'Data-driven marketing optimization with XGBoost forecasting, budget allocation, and ROI analysis for ad campaigns.',
    icon: <TrendingUp className="h-8 w-8" />,
    color: 'bg-black',
    pattern: 'text-white'
  },
  {
    id: 'consulting',
    name: 'AI Strategy Consulting',
    description: 'Strategic guidance for AI implementation, technology assessment, and custom solution architecture for your business needs.',
    icon: <Shield className="h-8 w-8" />,
    color: 'bg-white',
    pattern: 'text-black'
  }
]

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const isOdd = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        scale: 0.9,
        y: 60,
        x: isOdd ? -30 : 30
      }}
      animate={isInView ? { 
        opacity: 1, 
        scale: 1,
        y: 0,
        x: 0
      } : {}}
      transition={{ 
        duration: 0.4, 
        ease: "easeOut",
        delay: index * 0.05
      }}
      className={`relative w-full max-w-2xl mx-auto mb-16 ${
        isOdd ? 'md:mr-auto md:ml-8' : 'md:ml-auto md:mr-8'
      }`}
      style={{ zIndex: 10 + index }}
    >
      <div className={`
        relative overflow-hidden rounded-2xl p-8 md:p-10
        ${service.color}
        shadow-2xl shadow-gray-400/40
        backdrop-blur-sm
        border-2 ${service.color === 'bg-black' ? 'border-gray-800' : 'border-gray-200'}
        ${service.pattern}
      `}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className={`absolute top-4 right-4 w-32 h-32 rounded-full border-2 ${service.color === 'bg-black' ? 'border-gray-700' : 'border-gray-300'}`}></div>
          <div className={`absolute bottom-4 left-4 w-24 h-24 rounded-full border-2 ${service.color === 'bg-black' ? 'border-gray-700' : 'border-gray-300'}`}></div>
          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border ${service.color === 'bg-black' ? 'border-gray-600' : 'border-gray-400'}`}></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div className={`mb-6 ${service.pattern}`}>
            {service.icon}
          </div>

          {/* Title */}
          <h3 className={`text-2xl md:text-3xl font-bold ${service.pattern} mb-4`}>
            {service.name}
          </h3>

          {/* Description */}
          <p className={`${service.pattern === 'text-white' ? 'text-white/90' : 'text-black/80'} text-base md:text-lg leading-relaxed mb-6`}>
            {service.description}
          </p>

          {/* CTA */}
          <div className="flex justify-end">
            <button className={`${service.pattern === 'text-white' ? 'text-white/90 hover:text-white border-b border-white/60 hover:border-white' : 'text-black/80 hover:text-black border-b border-black/60 hover:border-black'} text-sm font-medium transition-colors`}>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showNav, setShowNav] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const titleY = useTransform(scrollYProgress, [0, 0.8, 1], ["0%", "0%", "-100%"])
  const titleOpacity = useTransform(scrollYProgress, [0, 0.1, 0.8, 1], [1, 1, 1, 0])

  // Hide navigation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setShowNav(scrollY < 100)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen gradient-light-brand text-black overflow-x-hidden">
      {/* Navigation */}
      <div className="absolute top-0 left-0 right-0 z-[100]">
        <Navigation 
          currentPath="/services" 
          showNav={showNav}
          actionButton={{
            text: 'Start Project',
            onClick: () => setIsModalOpen(true)
          }}
        />
      </div>

      {/* New Shooting Stars Background Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <ShootingStarsAndStarsBackgroundDemo />
      </section>

      {/* Fixed Title */}
      <motion.div 
        className="fixed inset-0 flex items-center justify-center z-20 pointer-events-none"
        style={{ y: titleY, opacity: titleOpacity }}
      >
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white text-center drop-shadow-2xl">
          Our Services
        </h1>
      </motion.div>

      {/* Content Container */}
      <div className="relative z-30 pt-[100vh]">
        {/* Services Cards */}
        <div className="px-4 md:px-8 lg:px-16 py-20">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Call to Action Section */}
        <section className="relative py-32 px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                Let's discuss how our AI-powered solutions can drive innovation and growth for your organization.
              </p>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-black text-white hover:bg-gray-800 rounded-full px-12 py-4 text-lg font-medium transition-colors shadow-2xl"
              >
                Get Started Today
              </button>
            </motion.div>
          </div>
        </section>


      </div>

      {/* Start Project Modal */}
      <StartProjectModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  )
} 