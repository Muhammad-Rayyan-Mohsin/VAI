import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Enterprise AI Solutions - VAIBRANT',
  description: 'Enterprise-grade AI, ML, and Data Science solutions for Fortune 500 companies. SOC 2 compliant, GDPR ready, with 24/7 support and dedicated teams.',
  keywords: [
    'Enterprise AI',
    'Fortune 500 AI solutions',
    'Enterprise Machine Learning',
    'Corporate Data Science',
    'Enterprise automation',
    'B2B AI consulting',
    'Large scale AI deployment',
    'Enterprise AI security',
    'Custom AI development',
    'AI transformation services'
  ],
  openGraph: {
    title: 'Enterprise AI Solutions - VAIBRANT',
    description: 'Enterprise-grade AI solutions for Fortune 500 companies. SOC 2 compliant with dedicated support.',
    url: '/enterprise',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise AI Solutions - VAIBRANT',
    description: 'Enterprise-grade AI solutions for Fortune 500 companies. SOC 2 compliant with dedicated support.',
  },
  alternates: {
    canonical: '/enterprise',
  },
}

'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import GlassCard from '@/components/ui/glass-card'
import { BackgroundBeams } from '@/components/ui/background-beams'
import { 
  Shield,
  Users,
  Globe,
  Zap,
  BarChart3,
  Lock,
  Clock,
  Award,
  Brain,
  Database,
  Cloud,
  HeadphonesIcon,
  CheckCircle,
  ArrowRight,
  Building,
  Target,
  TrendingUp
} from 'lucide-react'

export default function Enterprise() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    employees: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const benefits = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Enterprise Security",
      description: "Bank-grade security with SOC 2 compliance, data encryption, and secure cloud infrastructure."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Dedicated Team",
      description: "Assigned project managers, data scientists, and engineers exclusively for your organization."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "24/7 Support",
      description: "Round-the-clock technical support with guaranteed response times and priority handling."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Deployment",
      description: "Multi-region deployment capabilities with edge computing and CDN integration."
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Advanced Analytics",
      description: "Real-time dashboards, custom KPIs, and detailed performance analytics for decision making."
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Data Privacy",
      description: "GDPR compliant with on-premise deployment options and complete data sovereignty."
    }
  ]

  const solutions = [
    {
      title: "AI-Powered Automation",
      description: "Transform your business processes with intelligent automation that learns and adapts.",
      features: ["Process Mining", "Workflow Optimization", "Predictive Analytics", "Custom AI Models"],
      icon: <Brain className="h-12 w-12" />
    },
    {
      title: "Enterprise Data Platform",
      description: "Unified data infrastructure that scales with your business and provides actionable insights.",
      features: ["Data Warehousing", "Real-time Processing", "ETL Pipelines", "Data Governance"],
      icon: <Database className="h-12 w-12" />
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable, secure cloud solutions designed for enterprise workloads and compliance.",
      features: ["Multi-Cloud Strategy", "DevOps Integration", "Security Monitoring", "Disaster Recovery"],
      icon: <Cloud className="h-12 w-12" />
    }
  ]

  const testimonials = [
    {
      quote: "VAIBRANT's enterprise AI solution increased our operational efficiency by 60% and reduced costs by $2M annually.",
      author: "Jennifer Walsh",
      role: "CTO, Global Manufacturing Inc.",
      company: "Fortune 500 Company"
    },
    {
      quote: "The dedicated team approach meant seamless integration with our existing systems. Outstanding results in just 4 months.",
      author: "David Rodriguez",
      role: "VP of Technology, FinanceNext",
      company: "Leading Financial Services"
    },
    {
      quote: "Their enterprise security standards and compliance expertise made them the clear choice for our healthcare data platform.",
      author: "Dr. Sarah Chen",
      role: "Chief Data Officer, MedTech Solutions",
      company: "Healthcare Technology"
    }
  ]

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
              <a href="/enterprise" className="text-brand-primary py-2">Enterprise</a>
              <a href="/help" className="hover:text-brand-primary transition-colors py-2">Help</a>
              <a href="/careers" className="hover:text-brand-primary transition-colors py-2">Careers</a>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="ghost" className="text-brand-primary/70 hover:text-brand-primary font-medium">
                Log in
              </Button>
              <Button className="btn-brand-primary rounded-lg px-4 py-2 text-sm font-medium">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <BackgroundBeams className="opacity-20" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-brand-primary mb-6">
                Enterprise AI
                <span className="text-brand-secondary block">Solutions</span>
              </h1>
              
              <p className="text-xl text-brand-primary/70 mb-8 leading-relaxed">
                Scale your business with enterprise-grade AI, machine learning, and data science solutions. 
                Built for Fortune 500 companies with the highest security and compliance standards.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  className="btn-brand-primary rounded-full px-8 py-3 text-lg"
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Enterprise Demo
                </Button>
                <Button className="btn-brand-outline rounded-full px-8 py-3 text-lg flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  View Case Studies
                </Button>
              </div>

              <div className="flex items-center gap-8 text-sm text-brand-primary/70">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-brand-secondary" />
                  <span>SOC 2 Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-brand-secondary" />
                  <span>GDPR Ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-brand-secondary" />
                  <span>99.9% Uptime</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <GlassCard className="p-8 bg-white/60 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-brand-primary">Enterprise Dashboard</h3>
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-brand-primary">$2.4M</div>
                      <div className="text-sm text-brand-primary/70">Cost Savings</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-brand-primary">87%</div>
                      <div className="text-sm text-brand-primary/70">Efficiency Gain</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-brand-primary/70">AI Model Accuracy</span>
                      <span className="text-brand-primary font-medium">96.7%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-brand-secondary to-brand-primary w-[96.7%] rounded-full"></div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Enterprise-Grade Benefits
            </h2>
            <p className="text-xl text-brand-primary/70 max-w-2xl mx-auto">
              Everything you need to scale AI across your organization securely and efficiently.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full card-hover">
                  <CardContent className="p-0">
                    <div className="text-brand-secondary mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-brand-primary mb-3">{benefit.title}</h3>
                    <p className="text-brand-primary/70">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-brand-primary mb-4">
              Comprehensive Enterprise Solutions
            </h2>
            <p className="text-xl text-brand-primary/70 max-w-2xl mx-auto">
              End-to-end technology solutions designed for enterprise scale and complexity.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-8 h-full">
                  <div className="text-brand-secondary mb-6">
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-brand-primary mb-4">{solution.title}</h3>
                  <p className="text-brand-primary/70 mb-6">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-brand-secondary rounded-full"></div>
                        <span className="text-brand-primary/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-brand-primary/70">
              See how enterprises are transforming their operations with our solutions.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full">
                  <CardContent className="p-0">
                    <p className="text-brand-primary/70 mb-6 italic">"{testimonial.quote}"</p>
                    <div>
                      <div className="font-semibold text-brand-primary">{testimonial.author}</div>
                      <div className="text-sm text-brand-primary/70">{testimonial.role}</div>
                      <div className="text-sm text-brand-secondary font-medium">{testimonial.company}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-brand-primary mb-4">
              Ready to Scale Your Enterprise?
            </h2>
            <p className="text-xl text-brand-primary/70">
              Let's discuss your specific requirements and create a tailored solution.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-brand-primary">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-brand-primary">Business Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                      placeholder="Enter your business email"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="company" className="text-brand-primary">Company Name *</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                      placeholder="Enter your company name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="employees" className="text-brand-primary">Company Size</Label>
                    <select
                      id="employees"
                      name="employees"
                      value={formData.employees}
                      onChange={handleInputChange}
                      className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-secondary"
                    >
                      <option value="">Select company size</option>
                      <option value="50-200">50-200 employees</option>
                      <option value="200-1000">200-1000 employees</option>
                      <option value="1000-5000">1000-5000 employees</option>
                      <option value="5000+">5000+ employees</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-brand-primary">Project Requirements</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="mt-2"
                    placeholder="Tell us about your enterprise AI requirements, goals, and timeline..."
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full btn-brand-primary py-3 text-lg flex items-center justify-center gap-2"
                >
                  Request Enterprise Demo
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </form>
            </GlassCard>
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
                Enterprise AI solutions that transform businesses and drive innovation at scale.
              </p>
            </div>
            
            {[
              {
                title: "Enterprise",
                links: ["Solutions", "Security", "Compliance", "Support"]
              },
              {
                title: "Resources",
                links: ["Case Studies", "Whitepapers", "Documentation", "API"]
              },
              {
                title: "Company",
                links: ["About Us", "Careers", "News", "Contact"]
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