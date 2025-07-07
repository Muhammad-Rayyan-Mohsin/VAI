import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing Plans - VAIBRANT AI Solutions',
  description: 'Simple, transparent pricing for AI, Machine Learning, and Data Science services. Choose from Starter, Professional, or Enterprise plans to fit your business needs.',
  keywords: [
    'AI pricing',
    'Machine Learning costs',
    'Data Science pricing',
    'AI consulting rates',
    'Enterprise AI pricing',
    'Custom AI solutions cost',
    'ML model pricing',
    'Business automation costs'
  ],
  openGraph: {
    title: 'Pricing Plans - VAIBRANT AI Solutions',
    description: 'Simple, transparent pricing for AI and ML services. Plans starting at $99/month.',
    url: '/pricing',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing Plans - VAIBRANT AI Solutions',
    description: 'Simple, transparent pricing for AI and ML services. Plans starting at $99/month.',
  },
  alternates: {
    canonical: '/pricing',
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
  Check,
  ArrowRight,
  Zap,
  Shield,
  Globe,
  Star,
  Brain,
  Database,
  Code,
  Users,
  MessageSquare,
  BarChart3
} from 'lucide-react'

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true)

  const plans = [
    {
      name: "Starter",
      price: isAnnual ? 99 : 129,
      originalPrice: isAnnual ? 129 : 159,
      description: "Perfect for small businesses getting started with AI",
      features: [
        "Basic AI integration",
        "Data analysis dashboard",
        "5 automation workflows",
        "Email support",
        "Basic web development",
        "Monthly performance reports"
      ],
      icon: <Zap className="h-6 w-6" />,
      popular: false
    },
    {
      name: "Professional",
      price: isAnnual ? 299 : 379,
      originalPrice: isAnnual ? 379 : 449,
      description: "Comprehensive AI solutions for growing companies",
      features: [
        "Advanced AI & ML models",
        "Real-time data analytics",
        "Unlimited automation workflows",
        "Priority support",
        "Custom web applications",
        "Weekly strategy calls",
        "API integrations",
        "Performance optimization"
      ],
      icon: <Brain className="h-6 w-6" />,
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large organizations",
      features: [
        "Custom AI solutions",
        "Dedicated data science team",
        "Enterprise-grade security",
        "24/7 dedicated support",
        "Full-stack development",
        "White-label solutions",
        "SLA guarantee",
        "On-site consulting"
      ],
      icon: <Shield className="h-6 w-6" />,
      popular: false
    }
  ]

  const features = [
    {
      category: "AI & Machine Learning",
      items: ["Neural Networks", "Deep Learning", "Predictive Analytics", "Computer Vision", "NLP Processing"]
    },
    {
      category: "Data Science",
      items: ["Big Data Analysis", "Statistical Modeling", "Data Visualization", "ETL Pipelines", "Real-time Processing"]
    },
    {
      category: "Web Development", 
      items: ["Full-Stack Applications", "API Development", "Cloud Deployment", "Mobile Responsive", "Performance Optimization"]
    },
    {
      category: "Support & Maintenance",
      items: ["24/7 Monitoring", "Regular Updates", "Security Patches", "Performance Tuning", "Documentation"]
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
              <a href="/pricing" className="text-brand-primary py-2">Pricing</a>
              <a href="/enterprise" className="hover:text-brand-primary transition-colors py-2">Enterprise</a>
              <a href="/help" className="hover:text-brand-primary transition-colors py-2">Help</a>
              <a href="/careers" className="hover:text-brand-primary transition-colors py-2">Careers</a>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="ghost" className="text-brand-primary/70 hover:text-brand-primary font-medium">
                Log in
              </Button>
              <Button className="btn-brand-primary rounded-lg px-4 py-2 text-sm font-medium">
                Sign up
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
            Simple, Transparent
            <span className="text-brand-secondary block">Pricing</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-brand-primary/70 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Choose the plan that fits your business needs. All plans include our core AI capabilities with scalable options.
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            className="flex items-center justify-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white/60 backdrop-blur-sm rounded-full p-1 border border-white/20">
              <div className="flex items-center">
                <button
                  onClick={() => setIsAnnual(false)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    !isAnnual 
                      ? 'bg-brand-primary text-brand-background shadow-lg' 
                      : 'text-brand-primary/70 hover:text-brand-primary'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIsAnnual(true)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isAnnual 
                      ? 'bg-brand-primary text-brand-background shadow-lg' 
                      : 'text-brand-primary/70 hover:text-brand-primary'
                  }`}
                >
                  Annual <span className="text-green-500 ml-1">(Save 25%)</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-brand-secondary text-brand-background px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <Card className={`p-8 h-full card-hover ${plan.popular ? 'ring-2 ring-brand-secondary shadow-2xl' : ''}`}>
                  <CardContent className="p-0">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-brand-secondary/10 rounded-lg text-brand-secondary">
                        {plan.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-brand-primary">{plan.name}</h3>
                    </div>
                    
                    <div className="mb-6">
                      {plan.price === "Custom" ? (
                        <div className="text-4xl font-bold text-brand-primary">Custom</div>
                      ) : (
                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl font-bold text-brand-primary">${plan.price}</span>
                          <span className="text-brand-primary/70">/month</span>
                          {plan.originalPrice && (
                            <span className="text-sm text-brand-primary/50 line-through">${plan.originalPrice}</span>
                          )}
                        </div>
                      )}
                    </div>
                    
                    <p className="text-brand-primary/70 mb-8">{plan.description}</p>
                    
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-brand-secondary mt-0.5 flex-shrink-0" />
                          <span className="text-brand-primary/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={`w-full ${plan.popular ? 'btn-brand-primary' : 'btn-brand-outline'} rounded-lg py-3 flex items-center justify-center gap-2`}
                      onClick={() => window.open('https://calendly.com/usmanabbas5030', '_blank')}
                    >
                      {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
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
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-brand-primary/70 max-w-2xl mx-auto">
              Comprehensive features across all our service areas
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-6 h-full">
                  <h3 className="text-lg font-semibold text-brand-primary mb-4">{category.category}</h3>
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-brand-secondary rounded-full"></div>
                        <span className="text-brand-primary/70 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            ))}
          </div>
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-brand-background/90">
              Start your AI journey today. No setup fees, no hidden costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-brand-background text-brand-primary hover:bg-brand-background/90 rounded-full px-8 py-3 text-lg font-semibold"
                onClick={() => window.open('https://calendly.com/usmanabbas5030', '_blank')}
              >
                Schedule Consultation
              </Button>
              <Button className="bg-transparent border-2 border-brand-background text-brand-background hover:bg-brand-background hover:text-brand-primary rounded-full px-8 py-3 text-lg font-semibold transition-all duration-300">
                View Case Studies
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
                Expert AI, ML, and technology services that transform businesses and drive innovation.
              </p>
            </div>
            
            {[
              {
                title: "Services",
                links: ["AI & Machine Learning", "Data Science", "Web Development", "Automation"]
              },
              {
                title: "Company",
                links: ["About Us", "Case Studies", "Careers", "Contact"]
              },
              {
                title: "Support",
                links: ["Help Center", "Documentation", "API", "Status"]
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