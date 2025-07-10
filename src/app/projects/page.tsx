'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Navigation from '@/components/ui/navigation'
import LampDemo from '@/components/lamp-demo'
import AppleCardsCarouselDemo from '@/components/apple-cards-carousel-demo'
import { ArrowRight, ExternalLink } from 'lucide-react'

export default function Projects() {

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <Navigation 
          currentPath="/projects" 
          actionButton={{
            text: 'Start Project',
            onClick: () => console.log('Start Project clicked')
          }}
        />
      </div>

      {/* Hero Section with Lamp */}
      <section className="relative overflow-visible">
        <LampDemo />
      </section>

      {/* Projects Showcase - Carousel */}
      <section className="bg-white">
        <AppleCardsCarouselDemo />
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
              <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-3 text-lg flex items-center gap-2">
                Get Started Today
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button className="bg-white text-black border border-gray-300 hover:bg-gray-50 rounded-full px-8 py-3 text-lg flex items-center gap-2">
                View Our Process
                <ExternalLink className="h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 