'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Navigation from '@/components/ui/navigation'
import ContactFormModal from '@/components/ui/contact-form-modal'
import LampDemo from '@/components/lamp-demo'
import { lazy, Suspense } from 'react'
const AppleCardsCarouselDemo = lazy(() => import('@/components/apple-cards-carousel-demo'))

export default function Projects() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white projects-page">
      {/* Navigation */}
      <div className="absolute top-0 left-0 right-0 z-[100]">
        <Navigation 
          currentPath="/projects" 
          showNav={true}
          actionButton={{
            text: 'Contact Us',
            onClick: () => setIsContactModalOpen(true)
          }}
        />
      </div>

      {/* Hero Section with Lamp */}
      <section className="relative overflow-visible">
        <LampDemo />
      </section>

      {/* Projects Showcase - Carousel */}
      <section className="bg-white">
        <Suspense fallback={
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black mx-auto mb-4"></div>
              <p className="text-sm md:text-base text-gray-600">Loading projects...</p>
            </div>
          </div>
        }>
          <AppleCardsCarouselDemo />
        </Suspense>
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
                onClick={() => setIsContactModalOpen(true)}
                className="bg-black text-white hover:bg-gray-800 rounded-full px-6 sm:px-8 py-3 text-base sm:text-lg flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Contact Us
                <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Modal */}
      <ContactFormModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  )
} 