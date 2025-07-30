'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Navigation from '@/components/ui/navigation'
import StartProjectModal from '@/components/ui/start-project-modal'
import LampDemo from '@/components/lamp-demo'
import { lazy, Suspense } from 'react'
const AppleCardsCarouselDemo = lazy(() => import('@/components/apple-cards-carousel-demo'))

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white overflow-x-hidden mobile-container mobile-viewport-optimized">
      {/* Navigation */}
      <div className="absolute top-0 left-0 right-0 z-[100]">
        <Navigation 
          currentPath="/projects" 
          showNav={true}
          actionButton={{
            text: 'Start Project',
            onClick: () => setIsModalOpen(true)
          }}
        />
      </div>

      {/* Hero Section with Lamp - Professional Mobile Optimized */}
      <section className="relative w-full overflow-hidden mobile-smooth-transform">
        <div className="w-full max-w-none">
          <LampDemo />
        </div>
      </section>

      {/* Projects Showcase - Professional Mobile Layout */}
      <section className="bg-white w-full overflow-x-hidden relative mobile-smooth-transform">
        <div className="w-full max-w-none px-2 sm:px-4">
          <Suspense fallback={
            <div className="flex items-center justify-center py-16 sm:py-20">
              <div className="text-center mobile-smooth-transform">
                <div className="animate-spin rounded-full h-10 w-10 sm:h-8 sm:w-8 border-b-2 border-black mx-auto mb-4"></div>
                <p className="text-sm md:text-base text-gray-600">Loading projects...</p>
              </div>
            </div>
          }>
            <AppleCardsCarouselDemo />
          </Suspense>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6 leading-tight">
              Ready to Start Your Project?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how we can transform your ideas into intelligent solutions that drive real business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => setIsModalOpen(true)}
                className="bg-black text-white hover:bg-gray-800 rounded-full px-6 sm:px-8 py-3 text-base sm:text-lg flex items-center justify-center gap-2 w-full sm:w-auto mobile-touch-target mobile-smooth-transform"
              >
                Get Started Today
                <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Start Project Modal */}
      <StartProjectModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  )
} 