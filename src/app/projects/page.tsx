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
    <div className="min-h-screen bg-white">
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

      {/* Hero Section with Lamp */}
      <section className="relative overflow-visible">
        <LampDemo />
      </section>

      {/* Projects Showcase - Carousel */}
      <section className="bg-white">
        <Suspense fallback={<div>Loading projects...</div>}>
          <AppleCardsCarouselDemo />
        </Suspense>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can transform your ideas into intelligent solutions that drive real business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => setIsModalOpen(true)}
                className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-3 text-lg flex items-center gap-2"
              >
                Get Started Today
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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