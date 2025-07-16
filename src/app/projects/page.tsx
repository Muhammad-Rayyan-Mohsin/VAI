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

      {/* Footer */}
      <footer className="bg-brand-primary text-brand-background py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 container-mobile">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="sm:col-span-2 lg:col-span-1 mb-4 sm:mb-0">
              <div className="text-xl md:text-2xl font-bold mb-2 md:mb-3">VAIBRANT</div>
              <p className="text-sm md:text-base text-brand-background/70 mb-3 leading-relaxed">
                Expert AI, ML, and technology services that transform businesses and drive innovation.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="w-6 h-6 bg-brand-secondary/20 rounded-lg flex items-center justify-center hover:bg-brand-secondary/30 transition-colors" aria-label="LinkedIn">
                  <span className="text-xs font-medium">Li</span>
                </a>
                <a href="#" className="w-6 h-6 bg-brand-secondary/20 rounded-lg flex items-center justify-center hover:bg-brand-secondary/30 transition-colors" aria-label="GitHub">
                  <span className="text-xs font-medium">Gh</span>
                </a>
                <a href="#" className="w-6 h-6 bg-brand-secondary/20 rounded-lg flex items-center justify-center hover:bg-brand-secondary/30 transition-colors" aria-label="Twitter">
                  <span className="text-xs font-medium">X</span>
                </a>
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
                links: ["About Us", "Case Studies", "Contact"]
              }
            ].map((column, index) => (
              <div key={index} className="mb-4 sm:mb-0">
                <h3 className="text-sm md:text-base font-semibold mb-2 md:mb-3">{column.title}</h3>
                <ul className="space-y-1.5">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-xs md:text-sm text-brand-background/70 hover:text-brand-background transition-colors block py-0.5">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-brand-secondary/30 mt-6 pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
            <p className="text-brand-background/70 text-xs md:text-sm">
              © 2024 VAIBRANT. All rights reserved.
            </p>
            <div className="flex space-x-4 text-xs md:text-sm text-brand-background/70">
              <a href="#" className="hover:text-brand-background transition-colors">Privacy</a>
              <a href="#" className="hover:text-brand-background transition-colors">Terms</a>
              <a href="#" className="hover:text-brand-background transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Start Project Modal */}
      <StartProjectModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  )
} 