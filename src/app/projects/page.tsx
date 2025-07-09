'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import GlassCard from '@/components/ui/glass-card'
import Navigation from '@/components/ui/navigation'
import LampDemo from '@/components/lamp-demo'
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

interface Project {
    id: string
    title: string
    shortDescription: string
    fullDescription: string
    category: string
    status: 'In Progress' | 'Completed' | 'Coming Soon'
    imageUrl: string
    techStack: string[]
    duration: string
    outcomes: string[]
    clientType: string
    icon: React.ReactNode
  }

  const projectsShowcase: Project[] = [
    {
      id: 'analytics-dashboard',
      title: "Enterprise Analytics Dashboard",
      shortDescription: "AI-powered business intelligence platform with real-time insights and predictive analytics",
      fullDescription: "Comprehensive analytics solution that transforms raw business data into actionable insights using advanced machine learning algorithms and real-time processing capabilities.",
      category: "Data",
      status: "Completed",
      imageUrl: "/api/placeholder/600/400",
      techStack: ["React", "TypeScript", "Python", "TensorFlow", "PostgreSQL"],
      duration: "6 months",
      outcomes: ["40% faster decision making", "60% reduction in manual reporting", "Real-time data processing"],
      clientType: "Fortune 500 Manufacturing",
      icon: <Database className="h-6 w-6" />
    },
    {
      id: 'workflow-automation',
      title: "Smart Manufacturing Automation",
      shortDescription: "Intelligent process automation that reduced manual tasks by 75% and improved efficiency",
      fullDescription: "End-to-end automation solution for manufacturing operations, featuring predictive maintenance, quality control, and resource optimization using IoT sensors and AI algorithms.",
      category: "Automation", 
      status: "Completed",
      imageUrl: "/api/placeholder/600/400",
      techStack: ["Node.js", "IoT", "Machine Learning", "Docker", "Kubernetes"],
      duration: "8 months",
      outcomes: ["75% reduction in manual tasks", "30% improvement in efficiency", "Predictive maintenance implementation"],
      clientType: "Mid-size Manufacturing",
      icon: <Zap className="h-6 w-6" />
    },
    {
      id: 'api-integration',
      title: "Multi-Platform API Integration",
      shortDescription: "Seamless integration of 15+ systems enabling real-time data synchronization",
      fullDescription: "Complex API integration project connecting disparate systems including CRM, ERP, and third-party services to create a unified data ecosystem.",
      category: "APIs",
      status: "Completed",
      imageUrl: "/api/placeholder/600/400",
      techStack: ["REST APIs", "GraphQL", "Redis", "MongoDB", "Microservices"],
      duration: "4 months",
      outcomes: ["15+ systems integrated", "Real-time data sync", "99.9% uptime achieved"],
      clientType: "Technology Startup",
      icon: <Globe className="h-6 w-6" />
    },
    {
      id: 'predictive-maintenance',
      title: "AI Predictive Maintenance System",
      shortDescription: "Machine learning models that predict equipment failures 2 weeks in advance",
      fullDescription: "Advanced predictive maintenance system using sensor data and machine learning to forecast equipment failures, reducing downtime and maintenance costs.",
      category: "Data",
      status: "In Progress",
      imageUrl: "/api/placeholder/600/400",
      techStack: ["Python", "TensorFlow", "IoT Sensors", "Time Series Analysis", "Apache Kafka"],
      duration: "5 months",
      outcomes: ["2 weeks early failure prediction", "45% reduction in downtime", "Cost savings of $2M annually"],
      clientType: "Industrial Equipment",
      icon: <Code className="h-6 w-6" />
    },
    {
      id: 'ecommerce-platform',
      title: "Next-Gen E-commerce Platform",
      shortDescription: "Modern, responsive e-commerce solution with 300% performance improvement",
      fullDescription: "Complete e-commerce platform redesign focusing on performance, user experience, and conversion optimization with advanced analytics and personalization features.",
      category: "Web Apps",
      status: "Completed",
      imageUrl: "/api/placeholder/600/400",
      techStack: ["Next.js", "TypeScript", "Stripe", "Vercel", "Prisma"],
      duration: "7 months",
      outcomes: ["300% performance improvement", "45% increase in conversions", "Mobile-first responsive design"],
      clientType: "Retail Chain",
      icon: <Globe className="h-6 w-6" />
    },
    {
      id: 'document-processing',
      title: "Intelligent Document Processing",
      shortDescription: "Automated document analysis processing 10,000+ documents daily with 95% accuracy",
      fullDescription: "AI-powered document processing pipeline that extracts, categorizes, and processes various document types using OCR, NLP, and machine learning technologies.",
      category: "Automation",
      status: "Completed",
      imageUrl: "/api/placeholder/600/400",
      techStack: ["Python", "OCR", "NLP", "AWS Lambda", "ElasticSearch"],
      duration: "6 months",
      outcomes: ["10,000+ docs processed daily", "95% accuracy rate", "80% time savings"],
      clientType: "Financial Services",
      icon: <Zap className="h-6 w-6" />
    }
  ]

  const filteredProjects = selectedCategory === 'All' 
    ? projectsShowcase 
    : projectsShowcase.filter(project => project.category === selectedCategory)

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
      <section className="relative">
        <LampDemo />
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
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
                    ? 'bg-black text-white hover:bg-gray-800'
                    : 'bg-white text-black border border-gray-300 hover:bg-gray-100'
                }`}
              >
                {category}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {filteredProjects.map((project, projectIndex) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: projectIndex * 0.1 }}
              >
                <GlassCard className="group h-full overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200 bg-white/90 backdrop-blur-sm hover:-translate-y-2">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-black/10 rounded-full flex items-center justify-center mx-auto mb-3">
                          {project.icon}
                        </div>
                        <span className="text-sm text-gray-500">Project Preview</span>
                      </div>
                    </div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                        project.status === 'Completed' 
                          ? 'bg-green-100 text-green-700'
                          : project.status === 'In Progress'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="text-xs font-medium text-gray-700 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-black group-hover:text-gray-900 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                      {project.shortDescription}
                    </p>
                    
                    {/* Key Outcomes */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.outcomes.slice(0, 2).map((outcome, outcomeIndex) => (
                          <span 
                            key={outcomeIndex}
                            className="text-xs bg-gray-50 text-gray-700 px-2 py-1 rounded-full"
                          >
                            {outcome}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Tech Stack Preview */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {project.techStack.slice(0, 3).map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="text-xs bg-black/5 text-gray-600 px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span className="text-xs text-gray-500 px-2 py-1">
                            +{project.techStack.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="h-4 w-4" />
                        <span>{project.duration}</span>
                      </div>
                      <Button 
                        className="bg-black text-white hover:bg-gray-800 rounded-lg px-4 py-2 text-sm transition-all duration-300 group-hover:shadow-lg"
                      >
                        View Case Study
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
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
              <div className="w-16 h-16 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">
                No projects found
              </h3>
              <p className="text-gray-600 mb-6">
                Try selecting a different category to see more projects.
              </p>
              <Button 
                onClick={() => setSelectedCategory('All')}
                className="bg-black text-white hover:bg-gray-800 rounded-full px-6 py-2"
              >
                Show All Projects
              </Button>
            </motion.div>
          )}
        </div>
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