import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers - Join VAIBRANT AI Team',
  description: 'Join VAIBRANT and build the future of AI. We\'re hiring AI Engineers, Data Scientists, Developers, and more. Remote work, competitive benefits, innovative projects.',
  keywords: [
    'AI jobs',
    'Machine Learning careers',
    'Data Science jobs',
    'AI Engineer positions',
    'Tech careers',
    'Remote AI jobs',
    'ML Engineer jobs',
    'Data Scientist hiring',
    'AI startup jobs',
    'Technology careers'
  ],
  openGraph: {
    title: 'Careers - Join VAIBRANT AI Team',
    description: 'Join VAIBRANT and build the future of AI. Remote work, competitive benefits, innovative projects.',
    url: '/careers',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers - Join VAIBRANT AI Team',
    description: 'Join VAIBRANT and build the future of AI. Remote work, competitive benefits, innovative projects.',
  },
  alternates: {
    canonical: '/careers',
  },
}

'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import GlassCard from '@/components/ui/glass-card'
import { BackgroundBeams } from '@/components/ui/background-beams'
import { 
  MapPin,
  Clock,
  Users,
  Heart,
  Target,
  Zap,
  Globe,
  ArrowRight,
  Filter,
  Search,
  Brain,
  Code,
  BarChart3,
  Briefcase
} from 'lucide-react'

export default function Careers() {
  const [selectedTeam, setSelectedTeam] = useState('All')
  const [selectedLocation, setSelectedLocation] = useState('All')

  const values = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Innovation First",
      description: "We push boundaries in AI and technology, always seeking breakthrough solutions that transform industries."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaborative Excellence",
      description: "Our diverse team brings together expertise from AI, data science, and engineering to solve complex challenges."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Impact Driven",
      description: "Every project we undertake is designed to create meaningful, measurable impact for our clients and society."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "People Centered",
      description: "We invest in our team's growth, well-being, and success while maintaining work-life balance."
    }
  ]

  const benefits = [
    "Competitive salary + equity",
    "Health, dental & vision insurance",
    "Flexible remote work options",
    "Professional development budget",
    "Latest tech equipment",
    "Unlimited PTO policy",
    "Team retreats & events",
    "Wellness programs"
  ]

  const jobs = [
    {
      title: "Senior AI Engineer",
      team: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      description: "Lead development of cutting-edge AI models and systems that power our client solutions.",
      requirements: ["5+ years ML/AI experience", "Python, TensorFlow/PyTorch", "Cloud platforms (AWS/GCP)", "PhD preferred"]
    },
    {
      title: "Data Scientist",
      team: "Data Science",
      location: "Remote / New York",
      type: "Full-time", 
      description: "Extract insights from complex datasets and build predictive models for enterprise clients.",
      requirements: ["3+ years data science experience", "Python, R, SQL", "Statistical modeling", "Business intelligence"]
    },
    {
      title: "Full-Stack Developer",
      team: "Engineering",
      location: "Remote / Austin",
      type: "Full-time",
      description: "Build scalable web applications and platforms that deliver AI capabilities to end users.",
      requirements: ["4+ years full-stack experience", "React, Node.js, TypeScript", "Cloud deployment", "API design"]
    },
    {
      title: "Product Manager - AI",
      team: "Product",
      location: "San Francisco",
      type: "Full-time",
      description: "Drive product strategy and roadmap for our AI-powered enterprise solutions.",
      requirements: ["5+ years product management", "AI/ML product experience", "Enterprise software", "Technical background"]
    },
    {
      title: "DevOps Engineer",
      team: "Engineering", 
      location: "Remote",
      type: "Full-time",
      description: "Scale our infrastructure and deployment pipelines to support growing AI workloads.",
      requirements: ["3+ years DevOps experience", "Kubernetes, Docker", "CI/CD pipelines", "Cloud infrastructure"]
    },
    {
      title: "Sales Director - Enterprise",
      team: "Sales",
      location: "New York / Remote",
      type: "Full-time",
      description: "Lead enterprise sales efforts and build relationships with Fortune 500 clients.",
      requirements: ["7+ years enterprise sales", "Technology solutions", "C-level relationships", "Track record of success"]
    }
  ]

  const teams = ['All', 'Engineering', 'Data Science', 'Product', 'Sales']
  const locations = ['All', 'Remote', 'San Francisco', 'New York', 'Austin']

  const filteredJobs = jobs.filter(job => {
    const teamMatch = selectedTeam === 'All' || job.team === selectedTeam
    const locationMatch = selectedLocation === 'All' || job.location.includes(selectedLocation)
    return teamMatch && locationMatch
  })

  return (
    <div className="min-h-screen gradient-light-brand">
      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/90 border-b border-gray-200/50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center">
                <span className="text-brand-background text-sm font-bold">V</span>
              </div>
              <div className="text-xl font-semibold text-brand-primary">VAIBRANT</div>
            </a>
            <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-brand-primary/70">
              <a href="/#services" className="hover:text-brand-primary transition-colors py-2">How it works</a>
              <a href="/#expertise" className="hover:text-brand-primary transition-colors py-2">Use cases</a>
              <a href="/pricing" className="hover:text-brand-primary transition-colors py-2">Pricing</a>
              <a href="/enterprise" className="hover:text-brand-primary transition-colors py-2">Enterprise</a>
              <a href="/help" className="hover:text-brand-primary transition-colors py-2">Help</a>
              <a href="/careers" className="text-brand-primary py-2">Careers</a>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="ghost" className="text-brand-primary/70 hover:text-brand-primary font-medium">
                Log in
              </Button>
              <Button className="btn-brand-primary rounded-lg px-4 py-2 text-sm font-medium">
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

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
            Build the Future
            <span className="text-brand-secondary block">of AI with Us</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-brand-primary/70 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join a team of innovators, creators, and problem-solvers who are transforming businesses through AI and intelligent automation.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button className="btn-brand-primary rounded-full px-8 py-3 text-lg">
              View Open Positions
            </Button>
            <Button className="btn-brand-outline rounded-full px-8 py-3 text-lg">
              Learn About Our Culture
            </Button>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { number: "50+", label: "Team Members" },
              { number: "100+", label: "Projects Delivered" },
              { number: "15+", label: "Countries" },
              { number: "95%", label: "Employee Satisfaction" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-brand-primary">{stat.number}</div>
                <div className="text-brand-primary/70">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 gradient-bg-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-brand-primary mb-4">
              Our Values
            </h2>
            <p className="text-xl text-brand-primary/70 max-w-2xl mx-auto">
              The principles that guide our work and shape our culture every day.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full text-center card-hover">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-brand-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-brand-secondary">
                        {value.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-brand-primary mb-3">{value.title}</h3>
                    <p className="text-brand-primary/70">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-brand-primary mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-brand-primary/70">
              Find your next career opportunity and help shape the future of AI.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            className="flex flex-wrap gap-4 mb-12 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-brand-primary/70" />
              <span className="text-sm text-brand-primary/70">Filter by:</span>
            </div>
            
            <select
              value={selectedTeam}
              onChange={(e) => setSelectedTeam(e.target.value)}
              className="px-4 py-2 border border-brand-secondary/20 rounded-lg text-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-secondary"
            >
              {teams.map(team => (
                <option key={team} value={team}>{team} Team</option>
              ))}
            </select>

            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-2 border border-brand-secondary/20 rounded-lg text-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-secondary"
            >
              {locations.map(location => (
                <option key={location} value={location}>{location === 'All' ? 'All Locations' : location}</option>
              ))}
            </select>
          </motion.div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={`${job.title}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 card-hover">
                  <CardContent className="p-0">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <h3 className="text-2xl font-semibold text-brand-primary">{job.title}</h3>
                          <span className="px-3 py-1 bg-brand-secondary/10 text-brand-secondary rounded-full text-sm font-medium">
                            {job.team}
                          </span>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-4 mb-4 text-brand-primary/70">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm">{job.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span className="text-sm">{job.type}</span>
                          </div>
                        </div>
                        
                        <p className="text-brand-primary/80 mb-4">{job.description}</p>
                        
                        <div className="flex flex-wrap gap-2">
                          {job.requirements.map((req, reqIndex) => (
                            <span 
                              key={reqIndex}
                              className="px-2 py-1 bg-brand-primary/5 text-brand-primary/70 rounded text-xs"
                            >
                              {req}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="lg:ml-6">
                        <Button 
                          className="btn-brand-primary rounded-lg px-6 py-3 flex items-center gap-2"
                          onClick={() => window.open('https://calendly.com/usmanabbas5030', '_blank')}
                        >
                          Apply Now
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-brand-primary/70">No positions match your current filters. Try adjusting your search criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Benefits & Perks */}
      <section className="py-20 gradient-bg-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-brand-primary mb-4">
              Benefits & Perks
            </h2>
            <p className="text-xl text-brand-primary/70 max-w-2xl mx-auto">
              We invest in our team's success, growth, and well-being.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-white/20"
              >
                <div className="w-2 h-2 bg-brand-secondary rounded-full"></div>
                <span className="text-brand-primary/80">{benefit}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg-primary text-brand-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Don't See the Perfect Role?
            </h2>
            <p className="text-xl mb-8 text-brand-background/90">
              We're always looking for exceptional talent. Send us your resume and let's talk about opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-brand-background text-brand-primary hover:bg-brand-background/90 rounded-full px-8 py-3 text-lg font-semibold"
                onClick={() => window.open('https://calendly.com/usmanabbas5030', '_blank')}
              >
                Get in Touch
              </Button>
              <Button className="bg-transparent border-2 border-brand-background text-brand-background hover:bg-brand-background hover:text-brand-primary rounded-full px-8 py-3 text-lg font-semibold transition-all duration-300">
                View Our Culture
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-primary text-brand-background py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">VAIBRANT</div>
              <p className="text-brand-background/70 mb-4">
                Join us in building the future of AI and transforming businesses worldwide.
              </p>
            </div>
            
            {[
              {
                title: "Careers",
                links: ["Open Positions", "Interview Process", "Culture", "Benefits"]
              },
              {
                title: "Company",
                links: ["About Us", "Team", "News", "Contact"]
              },
              {
                title: "Resources",
                links: ["Blog", "Case Studies", "Documentation", "Support"]
              }
            ].map((column, index) => (
              <div key={index}>
                <h3 className="font-semibold mb-4">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-brand-background/70 hover:text-brand-background transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-brand-secondary/30 mt-12 pt-8 text-center">
            <p className="text-brand-background/70 text-sm">
              © 2024 VAIBRANT. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
} 