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
  TrendingUp,
  DollarSign,
  Repeat,
  Calendar,
  Lightbulb,
  FileText,
  RefreshCw,
  Check
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

  const businessModelFlow = [
    {
      phase: "Discovery",
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Identify Pain Points",
      description: "Define KPIs and quantify current inefficiencies",
      duration: "1-2 weeks"
    },
    {
      phase: "Pilot",
      icon: <Target className="h-8 w-8" />,
      title: "Launch PoC",
      description: "Fixed-price proof-of-concept with measurable outcomes",
      duration: "2-4 weeks"
    },
    {
      phase: "Deployment",
      icon: <RefreshCw className="h-8 w-8" />,
      title: "Scale Solution",
      description: "Switch to retainer or enterprise tier model",
      duration: "8-16 weeks"
    },
    {
      phase: "Scale",
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Add-on Services",
      description: "Usage-based services, training, and integrations",
      duration: "Ongoing"
    },
    {
      phase: "Renew",
      icon: <Repeat className="h-8 w-8" />,
      title: "Annual Review",
      description: "Review ROI and upsell opportunities",
      duration: "Annual"
    }
  ]

  const pricingModels = [
    {
      title: "Hybrid Pricing",
      subtitle: "Retainer + Success Fee",
      description: "Monthly/quarterly retainer for ongoing services plus performance-based success fees tied to KPI achievement",
      features: [
        "ML model maintenance & updates",
        "Regular performance reporting", 
        "Success fees based on efficiency gains",
        "Long-term partnership approach"
      ],
      pricing: "$15K-50K retainer + 5-15% success fee",
      icon: <Target className="h-12 w-12" />,
      bestFor: "Mid-size to enterprise clients with long-term goals"
    },
    {
      title: "Annual Subscription",
      subtitle: "Base + Usage",
      description: "Annual base fee for platform access, support, and infrastructure plus usage-based charges",
      features: [
        "Platform access & support",
        "Infrastructure included",
        "Usage-based API calls",
        "Model retraining fees"
      ],
      pricing: "$25K-100K annual + usage fees",
      icon: <Calendar className="h-12 w-12" />,
      bestFor: "Enterprise clients with ongoing platform usage"
    },
    {
      title: "IP & Licensing",
      subtitle: "Retain + License",
      description: "We retain ownership of reusable IP while licensing for client use with annual renewal fees",
      features: [
        "Proprietary automation scripts",
        "Reusable visualization templates",
        "Custom AI model architectures",
        "Annual licensing renewals"
      ],
      pricing: "$10K-50K license + $5K-25K annual renewal",
      icon: <FileText className="h-12 w-12" />,
      bestFor: "Clients needing standardized solutions with updates"
    }
  ]

  const roiMetrics = [
    {
      metric: "$2.4M",
      description: "Average annual cost savings",
      icon: <DollarSign className="h-8 w-8" />,
      case: "Fortune 500 Manufacturing"
    },
    {
      metric: "87%",
      description: "Efficiency improvement",
      icon: <TrendingUp className="h-8 w-8" />,
      case: "Mid-market Financial Services"
    },
    {
      metric: "150+",
      description: "Hours saved per month",
      icon: <Clock className="h-8 w-8" />,
      case: "Healthcare Technology"
    },
    {
      metric: "22%",
      description: "Revenue increase",
      icon: <BarChart3 className="h-8 w-8" />,
      case: "E-commerce Platform"
    }
  ]

  const benefits = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Enterprise Security",
      description: "Bank-grade security with SOC 2 compliance, data encryption, and secure cloud infrastructure with complete audit trails.",
      metrics: "99.9% uptime, SOC 2 Type II certified"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Dedicated Team",
      description: "Assigned project managers, data scientists, and engineers exclusively for your organization with guaranteed SLAs.",
      metrics: "4-8 hour response time, dedicated Slack channel"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Measurable ROI",
      description: "Every project includes specific KPIs and success metrics with monthly reporting on cost savings and efficiency gains.",
      metrics: "Average 3:1 ROI within 6 months"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Deployment",
      description: "Multi-region deployment capabilities with edge computing, CDN integration, and regional compliance support.",
      metrics: "15+ global regions, <100ms latency"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Advanced Analytics",
      description: "Real-time dashboards, custom KPIs, and detailed performance analytics for data-driven decision making.",
      metrics: "Real-time monitoring, 50+ KPI templates"
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Data Sovereignty",
      description: "GDPR compliant with on-premise deployment options, complete data sovereignty, and regulatory compliance support.",
      metrics: "GDPR, HIPAA, SOX compliant"
    }
  ]

  const solutions = [
    {
      title: "AI-Powered Automation",
      description: "Transform your business processes with intelligent automation that learns, adapts, and delivers measurable efficiency gains.",
      features: ["Process Mining & Optimization", "Workflow Automation", "Predictive Analytics", "Custom AI Models"],
      icon: <Brain className="h-12 w-12" />,
      roiExample: "60% reduction in manual processing time",
      successStory: "Saved $1.2M annually for manufacturing client"
    },
    {
      title: "Enterprise Data Platform",
      description: "Unified data infrastructure that scales with your business, providing actionable insights and real-time analytics.",
      features: ["Data Warehousing", "Real-time Processing", "ETL Pipelines", "Data Governance"],
      icon: <Database className="h-12 w-12" />,
      roiExample: "40% faster decision-making",
      successStory: "Increased revenue by 22% for e-commerce platform"
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable, secure cloud solutions designed for enterprise workloads with built-in monitoring and optimization.",
      features: ["Multi-Cloud Strategy", "DevOps Integration", "Security Monitoring", "Disaster Recovery"],
      icon: <Cloud className="h-12 w-12" />,
      roiExample: "50% reduction in infrastructure costs",
      successStory: "Scaled to 10x traffic with zero downtime"
    }
  ]

  const testimonials = [
    {
      quote: "VAIBRANT's hybrid pricing model aligned perfectly with our budget. The retainer covered ongoing maintenance while success fees ensured they stayed focused on our ROI. We've saved $2.4M annually.",
      author: "Jennifer Walsh",
      role: "CTO, Global Manufacturing Inc.",
      company: "Fortune 500 Company",
      metrics: "$2.4M annual savings, 60% efficiency gain"
    },
    {
      quote: "The dedicated team approach meant seamless integration with our existing systems. Their business model flow from pilot to scale was exactly what we needed. Outstanding results in just 4 months.",
      author: "David Rodriguez",
      role: "VP of Technology, FinanceNext",
      company: "Leading Financial Services",
      metrics: "4-month implementation, 87% process improvement"
    },
    {
      quote: "Their enterprise security standards and IP licensing model made them the clear choice for our healthcare data platform. The annual subscription model provides predictable costs with usage scaling.",
      author: "Dr. Sarah Chen",
      role: "Chief Data Officer, MedTech Solutions",
      company: "Healthcare Technology",
      metrics: "HIPAA compliant, 150+ hours saved monthly"
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
                Enterprise AI with
                <span className="text-brand-secondary block">Measurable ROI</span>
              </h1>
              
              <p className="text-xl text-brand-primary/70 mb-8 leading-relaxed">
                Scale your business with enterprise-grade AI solutions that deliver quantifiable results. 
                Our hybrid pricing models align our success with yours - from retainer-based partnerships 
                to success-fee structures that guarantee ROI.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  className="btn-brand-primary rounded-full px-8 py-3 text-lg"
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get ROI Assessment
                </Button>
                <Button className="btn-brand-outline rounded-full px-8 py-3 text-lg flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  View Success Metrics
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-brand-secondary" />
                  <span>$2M+ avg. cost savings</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-brand-secondary" />
                  <span>3:1 ROI within 6 months</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-brand-secondary" />
                  <span>87% avg. efficiency gain</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-brand-secondary" />
                  <span>99.9% uptime guarantee</span>
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
                    <h3 className="text-lg font-semibold text-brand-primary">ROI Dashboard Preview</h3>
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-brand-primary">$2.4M</div>
                      <div className="text-sm text-brand-primary/70">Annual Savings</div>
                      <div className="text-xs text-green-600 mt-1">↑ 300% from baseline</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-brand-primary">87%</div>
                      <div className="text-sm text-brand-primary/70">Efficiency Gain</div>
                      <div className="text-xs text-green-600 mt-1">Target: 70%</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-brand-primary/70">Success Fee Threshold</span>
                      <span className="text-brand-primary font-medium">Exceeded</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-brand-secondary to-brand-primary w-[87%] rounded-full"></div>
                    </div>
                    <div className="text-xs text-brand-primary/60">
                      Success fees: $240K earned based on KPI achievement
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ROI Metrics Section */}
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
              Proven Results Across Industries
            </h2>
            <p className="text-xl text-brand-primary/70 max-w-2xl mx-auto">
              Real metrics from real clients. Our success-based pricing means we only win when you win.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roiMetrics.map((metric, index) => (
              <motion.div
                key={metric.metric}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full card-hover text-center">
                  <CardContent className="p-0">
                    <div className="text-brand-secondary mb-4 flex justify-center">
                      {metric.icon}
                    </div>
                    <div className="text-3xl font-bold text-brand-primary mb-2">{metric.metric}</div>
                    <p className="text-brand-primary/70 mb-3">{metric.description}</p>
                    <div className="text-sm text-brand-secondary font-medium">{metric.case}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Model Flow */}
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
              Our Proven Partnership Model
            </h2>
            <p className="text-xl text-brand-primary/70 max-w-2xl mx-auto">
              From discovery to scale, our structured approach ensures measurable success at every phase
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8">
            {businessModelFlow.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <GlassCard className="p-6 h-full text-center">
                  <div className="text-brand-secondary mb-4 flex justify-center">
                    {phase.icon}
                  </div>
                  <div className="text-sm font-bold text-brand-secondary mb-2">{phase.phase}</div>
                  <h3 className="text-lg font-bold text-brand-primary mb-3">{phase.title}</h3>
                  <p className="text-brand-primary/70 text-sm mb-4">{phase.description}</p>
                  <div className="text-xs text-brand-primary/60 bg-brand-primary/5 px-2 py-1 rounded">
                    {phase.duration}
                  </div>
                </GlassCard>
                
                {index < businessModelFlow.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-brand-secondary" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Models Section */}
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
              Enterprise Pricing Models
            </h2>
            <p className="text-xl text-brand-primary/70 max-w-2xl mx-auto">
              Flexible pricing structures designed to align our success with your ROI goals
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pricingModels.map((model, index) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full card-hover">
                  <CardContent className="p-0">
                    <div className="text-brand-secondary mb-6 flex justify-center">
                      {model.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-brand-primary mb-2">{model.title}</h3>
                    <p className="text-brand-secondary font-medium mb-4">{model.subtitle}</p>
                    <p className="text-brand-primary/70 mb-6">{model.description}</p>
                    
                    <ul className="space-y-3 mb-6">
                      {model.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-brand-secondary mt-0.5 flex-shrink-0" />
                          <span className="text-brand-primary/80 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="bg-brand-primary/5 p-4 rounded-lg mb-6">
                      <div className="text-sm font-medium text-brand-primary mb-1">Typical Pricing:</div>
                      <div className="text-brand-secondary font-bold">{model.pricing}</div>
                    </div>
                    
                    <div className="text-sm text-brand-primary/60">
                      <span className="font-medium">Best for:</span> {model.bestFor}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Enterprise-Grade Benefits
            </h2>
            <p className="text-xl text-brand-primary/70 max-w-2xl mx-auto">
              Everything you need to scale AI across your organization securely and efficiently with guaranteed results.
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
                    <p className="text-brand-primary/70 mb-4">{benefit.description}</p>
                    <div className="text-sm text-brand-secondary font-medium bg-brand-secondary/10 px-3 py-2 rounded">
                      {benefit.metrics}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
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
              Comprehensive Enterprise Solutions
            </h2>
            <p className="text-xl text-brand-primary/70 max-w-2xl mx-auto">
              End-to-end technology solutions designed for enterprise scale with quantifiable business impact.
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
                  
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-brand-secondary rounded-full"></div>
                        <span className="text-brand-primary/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="space-y-3">
                    <div className="bg-green-50 p-3 rounded-lg">
                      <div className="text-sm font-medium text-brand-primary">ROI Example:</div>
                      <div className="text-green-700 font-bold">{solution.roiExample}</div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <div className="text-sm font-medium text-brand-primary">Success Story:</div>
                      <div className="text-blue-700 font-bold text-sm">{solution.successStory}</div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-brand-primary/70">
              See how enterprises are achieving measurable ROI with our business models.
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
                    <div className="space-y-2">
                      <div className="font-semibold text-brand-primary">{testimonial.author}</div>
                      <div className="text-sm text-brand-primary/70">{testimonial.role}</div>
                      <div className="text-sm text-brand-secondary font-medium">{testimonial.company}</div>
                      <div className="text-sm text-green-700 bg-green-50 px-3 py-2 rounded mt-3">
                        <strong>Results:</strong> {testimonial.metrics}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 gradient-bg-secondary">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-brand-primary mb-4">
              Ready to Quantify Your ROI?
            </h2>
            <p className="text-xl text-brand-primary/70">
              Let's discuss your specific requirements and create a customized solution with guaranteed success metrics.
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
                  <Label htmlFor="message" className="text-brand-primary">Project Requirements & ROI Goals</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="mt-2"
                    placeholder="Tell us about your enterprise AI requirements, current pain points, and target ROI metrics..."
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full btn-brand-primary py-3 text-lg flex items-center justify-center gap-2"
                >
                  Request ROI Assessment
                  <ArrowRight className="h-5 w-5" />
                </Button>
                
                <div className="text-center text-sm text-brand-primary/60">
                  Get a detailed ROI projection and custom pricing proposal within 48 hours
                </div>
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
                Enterprise AI solutions that transform businesses and deliver measurable ROI at scale.
              </p>
            </div>
            
            {[
              {
                title: "Enterprise",
                links: ["ROI Assessment", "Business Models", "Success Metrics", "Case Studies"]
              },
              {
                title: "Solutions",
                links: ["AI Automation", "Data Platform", "Cloud Infrastructure", "Training"]
              },
              {
                title: "Support",
                links: ["Documentation", "API", "Security", "Compliance"]
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