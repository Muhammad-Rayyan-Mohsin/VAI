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
  BarChart3,
  Target,
  TrendingUp,
  Clock,
  Award,
  Lightbulb
} from 'lucide-react'

export default function Pricing() {
  const [selectedRegion, setSelectedRegion] = useState('US')

  const regions = [
    { code: 'US', name: 'US Base', multiplier: 1 },
    { code: 'SA', name: 'South Asia', multiplier: 0.6 },
    { code: 'MENA', name: 'MENA & Africa', multiplier: 0.75 },
    { code: 'EU', name: 'Europe & NA', multiplier: 1.2 }
  ]

  const getRegionalPrice = (baseMin: number, baseMax: number) => {
    const multiplier = regions.find(r => r.code === selectedRegion)?.multiplier || 1
    return {
      min: Math.round(baseMin * multiplier),
      max: Math.round(baseMax * multiplier)
    }
  }

  const plans = [
    {
      name: "Starter",
      basePrice: { min: 5000, max: 10000 },
      description: "Perfect for startups and proof-of-concepts",
      subtitle: "Get started with AI",
      deliverables: [
        "ML prototype development",
        "Basic analytics dashboards", 
        "Automation script creation",
        "Performance reporting",
        "Email support",
        "1-month maintenance"
      ],
      idealFor: "Startups, POCs, Small Teams",
      icon: <Lightbulb className="h-6 w-6" />,
      popular: false,
      roiExample: "Save 40-60 hours/month"
    },
    {
      name: "Growth",
      basePrice: { min: 10000, max: 25000 },
      description: "Comprehensive solutions for growing businesses",
      subtitle: "Scale your operations",
      deliverables: [
        "Full ML pipeline development",
        "Custom analytics dashboards",
        "Advanced automation workflows",
        "Basic web app integration",
        "Priority support",
        "3-month maintenance",
        "Training workshops",
        "API integrations"
      ],
      idealFor: "Mid-market firms, Growing companies",
      icon: <TrendingUp className="h-6 w-6" />,
      popular: true,
      roiExample: "Increase efficiency by 40-60%"
    },
    {
      name: "Enterprise",
      basePrice: { min: 25000, max: 50000 },
      description: "Enterprise-grade solutions with dedicated support",
      subtitle: "Transform your enterprise",
      deliverables: [
        "Scalable AI systems",
        "Deep learning models",
        "Advanced automation platform",
        "Full analytics platform",
        "24/7 dedicated support",
        "12-month maintenance",
        "Custom training programs",
        "White-label solutions"
      ],
      idealFor: "Large enterprises, Fortune 500",
      icon: <Shield className="h-6 w-6" />,
      popular: false,
      roiExample: "Reduce costs by $1M+ annually"
    }
  ]

  const businessModels = [
    {
      title: "Hybrid Pricing",
      subtitle: "Retainer + Success Fee",
      description: "Monthly retainer for ongoing services plus performance-based success fees tied to KPI achievement",
      features: ["Ongoing ML model maintenance", "Regular reporting", "Performance bonuses", "Long-term partnership"],
      icon: <Target className="h-8 w-8" />,
      ideal: "Mid-size to enterprise clients"
    },
    {
      title: "Time & Materials", 
      subtitle: "Hourly/Daily Rates",
      description: "Flexible pricing for ad-hoc projects, integrations, or post-deployment support",
      features: ["Flexible scope", "Pay-as-you-go", "Quick turnaround", "Perfect for fixes"],
      icon: <Clock className="h-8 w-8" />,
      ideal: "Small fixes, integrations"
    },
    {
      title: "Annual Subscription",
      subtitle: "Base + Usage",
      description: "Annual base fee for platform access plus usage-based charges for API calls and retraining",
      features: ["Platform access", "Infrastructure included", "Usage scaling", "Predictable costs"],
      icon: <BarChart3 className="h-8 w-8" />,
      ideal: "Enterprise ongoing usage"
    }
  ]

  const pilotOffers = [
    {
      region: "US Base",
      priceRange: "$2K - $5K",
      description: "Quick proof-of-concept to demonstrate value"
    },
    {
      region: "South Asia", 
      priceRange: "$1.5K - $3.5K",
      description: "Regionally optimized pilot projects"
    },
    {
      region: "MENA & Africa",
      priceRange: "$2K - $4.5K", 
      description: "Market-specific pilot implementations"
    },
    {
      region: "Europe & NA",
      priceRange: "$3K - $6K",
      description: "Premium pilot with extensive consultation"
    }
  ]

  const contractDiscounts = [
    { duration: "3-month retainer", discount: "5%", color: "text-green-600" },
    { duration: "6-month retainer", discount: "10%", color: "text-blue-600" },
    { duration: "12+ month contract", discount: "15% + free audit", color: "text-purple-600" }
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
            Results-Driven
            <span className="text-brand-secondary block">Pricing</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-brand-primary/70 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transparent, outcome-based pricing that scales with your success. We focus on measurable ROI - 
            from cost savings to efficiency gains that transform your business.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12 text-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
              <Check className="h-4 w-4 text-green-600" />
              <span>Saved 150+ hours/month for clients</span>
            </div>
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
              <Check className="h-4 w-4 text-green-600" />
              <span>22% average conversion increase</span>
            </div>
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
              <Check className="h-4 w-4 text-green-600" />
              <span>$2M+ cost savings delivered</span>
            </div>
          </motion.div>

          {/* Regional Pricing Toggle */}
          <motion.div
            className="flex items-center justify-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-white/60 backdrop-blur-sm rounded-full p-1 border border-white/20">
              <div className="flex items-center flex-wrap">
                {regions.map((region) => (
                  <button
                    key={region.code}
                    onClick={() => setSelectedRegion(region.code)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedRegion === region.code
                        ? 'bg-brand-primary text-brand-background shadow-lg' 
                        : 'text-brand-primary/70 hover:text-brand-primary'
                    }`}
                  >
                    {region.name}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => {
              const regionalPrice = getRegionalPrice(plan.basePrice.min, plan.basePrice.max)
              return (
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
                        <div>
                          <h3 className="text-2xl font-bold text-brand-primary">{plan.name}</h3>
                          <p className="text-sm text-brand-primary/60">{plan.subtitle}</p>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-bold text-brand-primary">
                            ${regionalPrice.min.toLocaleString()}
                          </span>
                          <span className="text-brand-primary/70">- ${regionalPrice.max.toLocaleString()}</span>
                        </div>
                        <div className="text-sm text-brand-secondary font-medium mt-1">{plan.roiExample}</div>
                      </div>
                      
                      <p className="text-brand-primary/70 mb-6">{plan.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-brand-primary mb-3">Deliverables:</h4>
                        <ul className="space-y-2">
                          {plan.deliverables.map((deliverable, deliverableIndex) => (
                            <li key={deliverableIndex} className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-brand-secondary mt-0.5 flex-shrink-0" />
                              <span className="text-brand-primary/80 text-sm">{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-8">
                        <div className="text-sm text-brand-primary/60">
                          <span className="font-medium">Ideal for:</span> {plan.idealFor}
                        </div>
                      </div>
                      
                      <Button 
                        className={`w-full ${plan.popular ? 'btn-brand-primary' : 'btn-brand-outline'} rounded-lg py-3 flex items-center justify-center gap-2`}
                        onClick={() => window.open('https://calendly.com/usmanabbas5030', '_blank')}
                      >
                        Start Project
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Business Models Section */}
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
              Flexible Business Models
            </h2>
            <p className="text-xl text-brand-primary/70 max-w-2xl mx-auto">
              Choose the pricing structure that aligns with your business goals and budget
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {businessModels.map((model, index) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-8 h-full">
                  <div className="text-brand-secondary mb-6">
                    {model.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-brand-primary mb-2">{model.title}</h3>
                  <p className="text-brand-secondary font-medium mb-4">{model.subtitle}</p>
                  <p className="text-brand-primary/70 mb-6">{model.description}</p>
                  <ul className="space-y-3 mb-6">
                    {model.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-brand-secondary rounded-full"></div>
                        <span className="text-brand-primary/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-sm text-brand-primary/60">
                    <span className="font-medium">Best for:</span> {model.ideal}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pilot Projects Section */}
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
              Start with a Pilot Project
            </h2>
            <p className="text-xl text-brand-primary/70 max-w-2xl mx-auto">
              Test our capabilities with a low-risk proof-of-concept before committing to larger projects
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pilotOffers.map((offer, index) => (
              <motion.div
                key={offer.region}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full card-hover text-center">
                  <CardContent className="p-0">
                    <h3 className="text-lg font-semibold text-brand-primary mb-2">{offer.region}</h3>
                    <div className="text-2xl font-bold text-brand-secondary mb-3">{offer.priceRange}</div>
                    <p className="text-brand-primary/70 text-sm">{offer.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button 
              className="btn-brand-primary rounded-full px-8 py-3 text-lg"
              onClick={() => window.open('https://calendly.com/usmanabbas5030', '_blank')}
            >
              Book Pilot Consultation
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contract Discounts */}
      <section className="py-20 gradient-bg-secondary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-brand-primary mb-6">
              Long-Term Partnership Discounts
            </h2>
            <p className="text-xl text-brand-primary/70 mb-12">
              Save more with longer commitments and build a lasting AI transformation partnership
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {contractDiscounts.map((discount, index) => (
                <motion.div
                  key={discount.duration}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <GlassCard className="p-6">
                    <div className="text-lg font-semibold text-brand-primary mb-2">{discount.duration}</div>
                    <div className={`text-3xl font-bold ${discount.color} mb-2`}>{discount.discount}</div>
                    <div className="text-sm text-brand-primary/70">savings on total project cost</div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Training & Enablement */}
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
              Training & Enablement
            </h2>
            <p className="text-xl text-brand-primary/70 max-w-2xl mx-auto">
              Empower your team with AI knowledge and skills through our comprehensive training programs
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-brand-primary mb-6">Modular Training Packages</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-brand-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-brand-primary">AI Fundamentals</span>
                    <p className="text-brand-primary/70 text-sm">Understanding AI/ML concepts and applications</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-brand-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-brand-primary">Data Science Bootcamp</span>
                    <p className="text-brand-primary/70 text-sm">Hands-on data analysis and visualization</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-brand-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-brand-primary">Automation Workshops</span>
                    <p className="text-brand-primary/70 text-sm">Process automation and optimization</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-brand-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-brand-primary">Custom Team Training</span>
                    <p className="text-brand-primary/70 text-sm">Tailored to your specific use cases</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-8">
                <h4 className="text-xl font-bold text-brand-primary mb-6">Regional Training Pricing</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium text-brand-primary">US Base</span>
                    <span className="text-brand-secondary font-bold">$1K - $5K</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium text-brand-primary">South Asia</span>
                    <span className="text-brand-secondary font-bold">$750 - $3K</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium text-brand-primary">MENA & Africa</span>
                    <span className="text-brand-secondary font-bold">$1K - $4K</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-medium text-brand-primary">Europe & NA</span>
                    <span className="text-brand-secondary font-bold">$1.5K - $6K</span>
                  </div>
                </div>
                <Button className="w-full btn-brand-primary mt-6" onClick={() => window.open('https://calendly.com/usmanabbas5030', '_blank')}>
                  Book Training Session
                </Button>
              </GlassCard>
            </motion.div>
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
              Ready to Measure Your ROI?
            </h2>
            <p className="text-xl mb-8 text-brand-background/90">
              Start with a pilot project and see measurable results in weeks, not months.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-brand-background text-brand-primary hover:bg-brand-background/90 rounded-full px-8 py-3 text-lg font-semibold"
                onClick={() => window.open('https://calendly.com/usmanabbas5030', '_blank')}
              >
                Schedule ROI Assessment
              </Button>
              <Button className="bg-transparent border-2 border-brand-background text-brand-background hover:bg-brand-background hover:text-brand-primary rounded-full px-8 py-3 text-lg font-semibold transition-all duration-300">
                View Success Stories
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
                Expert AI, ML, and technology services that transform businesses and drive measurable ROI.
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