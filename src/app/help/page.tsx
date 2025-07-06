'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import GlassCard from '@/components/ui/glass-card'
import { 
  Search,
  ChevronDown,
  ChevronRight,
  MessageSquare,
  Mail,
  Phone,
  Book,
  Code,
  Shield,
  Zap,
  HelpCircle,
  ArrowRight,
  Brain,
  BarChart3,
  CreditCard
} from 'lucide-react'

export default function Help() {
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const categories = [
    {
      title: "Getting Started",
      icon: <Zap className="h-6 w-6" />,
      articles: ["Quick Start Guide", "Setting up your first AI model", "Data preparation basics", "API integration"]
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="h-6 w-6" />,
      articles: ["Model training best practices", "Choosing the right algorithm", "Performance optimization", "Custom model deployment"]
    },
    {
      title: "Data Science",
      icon: <BarChart3 className="h-6 w-6" />,
      articles: ["Data analysis workflows", "Visualization techniques", "Statistical modeling", "Report automation"]
    },
    {
      title: "Technical Documentation",
      icon: <Code className="h-6 w-6" />,
      articles: ["API Reference", "SDK Documentation", "Integration guides", "Troubleshooting"]
    },
    {
      title: "Security & Compliance",
      icon: <Shield className="h-6 w-6" />,
      articles: ["Data privacy", "GDPR compliance", "Security best practices", "Enterprise security"]
    },
    {
      title: "Billing & Account",
      icon: <CreditCard className="h-6 w-6" />,
      articles: ["Subscription management", "Usage tracking", "Payment methods", "Enterprise billing"]
    }
  ]

  const faqs = [
    {
      question: "How quickly can I get started with VAIBRANT's AI solutions?",
      answer: "Most clients can have a basic AI model running within 48-72 hours. Our team handles the initial setup, data preparation, and model configuration. Complex enterprise solutions typically take 2-4 weeks for full deployment."
    },
    {
      question: "What types of data do you work with?",
      answer: "We work with all types of data including structured databases, unstructured text, images, videos, sensor data, and real-time streams. Our team has experience with petabyte-scale datasets and can handle complex data integration challenges."
    },
    {
      question: "Do you offer on-premise deployment options?",
      answer: "Yes, we provide flexible deployment options including cloud, on-premise, and hybrid solutions. Enterprise clients can choose to keep sensitive data on their own infrastructure while leveraging our AI capabilities."
    },
    {
      question: "What level of customization is available?",
      answer: "All our solutions are highly customizable. We build custom AI models, create tailored dashboards, integrate with existing systems, and can white-label solutions for enterprise clients."
    },
    {
      question: "How do you ensure data security and privacy?",
      answer: "We follow enterprise-grade security practices including encryption at rest and in transit, SOC 2 compliance, GDPR adherence, and regular security audits. We also offer on-premise deployment for maximum data control."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer multiple support tiers from email support to 24/7 dedicated account management. Enterprise clients get priority support, dedicated slack channels, and regular strategy calls with our team."
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
              <a href="/enterprise" className="hover:text-brand-primary transition-colors py-2">Enterprise</a>
              <a href="/help" className="text-brand-primary py-2">Help</a>
              <a href="/careers" className="hover:text-brand-primary transition-colors py-2">Careers</a>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="ghost" className="text-brand-primary/70 hover:text-brand-primary font-medium">
                Log in
              </Button>
              <Button className="btn-brand-primary rounded-lg px-4 py-2 text-sm font-medium">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-brand-primary mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Help Center
          </motion.h1>
          
          <motion.p 
            className="text-xl text-brand-primary/70 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Find answers, get support, and learn how to make the most of VAIBRANT's AI solutions.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            className="relative max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-brand-primary/40 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search for help articles, FAQs, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg border-2 border-brand-secondary/20 focus:border-brand-secondary rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Access Categories */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-brand-primary mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Browse by Category
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 card-hover h-full">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-brand-secondary">
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-brand-primary">{category.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {category.articles.map((article, articleIndex) => (
                        <li key={articleIndex} className="flex items-center gap-2 text-brand-primary/70 hover:text-brand-primary transition-colors cursor-pointer">
                          <ChevronRight className="h-4 w-4" />
                          <span className="text-sm">{article}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 gradient-bg-secondary">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-brand-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-brand-primary/70">
              Quick answers to the most common questions about our AI solutions.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-white/20 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-brand-primary pr-4">{faq.question}</h3>
                    <ChevronDown 
                      className={`h-5 w-5 text-brand-secondary transition-transform ${
                        expandedFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-brand-primary/70 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-brand-primary mb-4">
              Need More Help?
            </h2>
            <p className="text-xl text-brand-primary/70">
              Our support team is here to help you succeed with your AI projects.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 text-center card-hover">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-brand-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="h-8 w-8 text-brand-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-primary mb-3">Live Chat</h3>
                  <p className="text-brand-primary/70 mb-6">Get instant answers from our support team</p>
                  <Button className="btn-brand-outline w-full">Start Chat</Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 text-center card-hover">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-brand-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8 text-brand-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-primary mb-3">Email Support</h3>
                  <p className="text-brand-primary/70 mb-6">Send us a detailed message and we'll respond within 24 hours</p>
                  <Button className="btn-brand-outline w-full">Send Email</Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 text-center card-hover">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-brand-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-brand-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-primary mb-3">Phone Support</h3>
                  <p className="text-brand-primary/70 mb-6">Schedule a call with our technical experts</p>
                  <Button 
                    className="btn-brand-outline w-full"
                    onClick={() => window.open('https://calendly.com/usmanabbas5030', '_blank')}
                  >
                    Schedule Call
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
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
                title: "Support",
                links: ["Help Center", "Documentation", "API Reference", "Status"]
              },
              {
                title: "Resources",
                links: ["Guides", "Tutorials", "Best Practices", "Community"]
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