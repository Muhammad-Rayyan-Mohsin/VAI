'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import GlassCard from '@/components/ui/glass-card'
import Navigation from '@/components/ui/navigation'
import { BackgroundBeams } from '@/components/ui/background-beams'
import { 
  Code,
  Database,
  Zap,
  Globe,
  ArrowRight,
  Calendar,
  ExternalLink
} from 'lucide-react'

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Automation', 'Data', 'APIs', 'Web Apps']

  const projectsPlaceholder = [
    {
      title: "Enterprise Analytics Dashboard",
      description: "AI-powered business intelligence platform with real-time insights",
      category: "Data",
      status: "Coming Soon",
      icon: <Database className="h-6 w-6" />
    },
    {
      title: "Workflow Automation Suite",
      description: "Intelligent process automation for manufacturing operations",
      category: "Automation", 
      status: "Coming Soon",
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: "Customer API Integration",
      description: "Seamless third-party system integrations and data sync",
      category: "APIs",
      status: "Coming Soon",
      icon: <Globe className="h-6 w-6" />
    },
    {
      title: "Predictive Maintenance System",
      description: "Machine learning models for equipment failure prediction",
      category: "Data",
      status: "Coming Soon",
      icon: <Code className="h-6 w-6" />
    },
    {
      title: "E-commerce Platform Redesign",
      description: "Modern, responsive web application with enhanced UX",
      category: "Web Apps",
      status: "Coming Soon",
      icon: <Globe className="h-6 w-6" />
    },
    {
      title: "Document Processing Pipeline",
      description: "Automated document analysis and data extraction system",
      category: "Automation",
      status: "Coming Soon",
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: "Real-time Monitoring Dashboard",
      description: "Live system metrics and performance visualization",
      category: "Data",
      status: "Coming Soon",
      icon: <Database className="h-6 w-6" />
    },
    {
      title: "Mobile Application Suite",
      description: "Cross-platform mobile apps with cloud integration",
      category: "Web Apps",
      status: "Coming Soon",
      icon: <Code className="h-6 w-6" />
    }
  ]

  const filteredProjects = selectedCategory === 'All' 
    ? projectsPlaceholder 
    : projectsPlaceholder.filter(project => project.category === selectedCategory)

  return (
    <div className="min-h-screen gradient-light-brand">
      {/* Navigation */}
      <Navigation 
        currentPath="/projects" 
        actionButton={{
          text: 'Start Project',
          onClick: () => console.log('Start Project clicked')
        }}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <BackgroundBeams className="opacity-20" />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-brand-primary mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Projects
          </motion.h1>
          
          <motion.p 
            className="text-xl text-brand-primary/70 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore the solutions we've delivered.
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-brand-background/50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'btn-brand-primary'
                    : 'btn-brand-outline hover:btn-brand-secondary'
                }`}
              >
                {category}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlassCard className="h-full p-6 hover:shadow-lg transition-all duration-300 border border-brand-secondary/10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center text-brand-primary">
                      {project.icon}
                    </div>
                    <span className="text-xs font-medium text-brand-secondary bg-brand-secondary/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-brand-primary mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-brand-primary/70 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-brand-secondary/70 flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {project.status}
                    </span>
                    <Button 
                      disabled
                      className="btn-brand-outline rounded-lg px-4 py-2 text-sm opacity-50 cursor-not-allowed"
                    >
                      View Details
                    </Button>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="h-8 w-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-semibold text-brand-primary mb-2">
                No projects found
              </h3>
              <p className="text-brand-primary/70 mb-6">
                Try selecting a different category to see more projects.
              </p>
              <Button 
                onClick={() => setSelectedCategory('All')}
                className="btn-brand-primary rounded-full px-6 py-2"
              >
                Show All Projects
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 gradient-bg-secondary">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-brand-primary/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can transform your ideas into intelligent solutions that drive real business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-brand-primary rounded-full px-8 py-3 text-lg flex items-center gap-2">
                Get Started Today
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button className="btn-brand-outline rounded-full px-8 py-3 text-lg flex items-center gap-2">
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