'use client'

import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react'

interface FooterProps {
  className?: string
}

export default function Footer({ className = '' }: FooterProps) {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({})

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const footerSections = [
    {
      id: 'services',
      title: 'Services',
      links: [
        { name: 'AI & Machine Learning', href: '/services#ai' },
        { name: 'Data Science', href: '/services#data' },
        { name: 'Web Development', href: '/services#web' },
        { name: 'Automation', href: '/services#automation' }
      ]
    },
    {
      id: 'company',
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Case Studies', href: '/projects' },
        { name: 'Contact', href: '/contact' }
      ]
    }
  ]

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'GitHub', href: '#', icon: Github },
    { name: 'Twitter', href: '#', icon: Twitter }
  ]

  const contactInfo = [
    { icon: Mail, text: 'info@vaibrant.co', href: 'mailto:info@vaibrant.co' },
    { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: MapPin, text: 'San Francisco, CA', href: '#' }
  ]

  return (
    <footer className={`bg-brand-primary text-brand-background ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main Footer Content */}
        <div className="py-6 sm:py-8">
          {/* Top Section - Brand & Contact */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="text-xl sm:text-2xl font-bold mb-3">VAIBRANT</div>
              <p className="text-sm text-brand-background/80 mb-4 leading-relaxed">
                Expert AI, ML, and technology services that transform businesses and drive innovation.
              </p>
              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-8 h-8 bg-brand-secondary/20 rounded-lg flex items-center justify-center hover:bg-brand-secondary/30 transition-all duration-200 hover:scale-105"
                    aria-label={social.name}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h3 className="font-semibold text-sm mb-3">Get in Touch</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center gap-2 text-sm text-brand-background/80 hover:text-brand-background transition-colors group"
                  >
                    <contact.icon className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="truncate">{contact.text}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="border-t border-brand-secondary/20 pt-4">
            {/* Mobile Accordion */}
            <div className="space-y-2 sm:hidden">
              {footerSections.map((section) => (
                <div key={section.id} className="border-b border-brand-secondary/10 pb-2 last:border-b-0">
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="flex items-center justify-between w-full text-left py-3 font-medium text-sm"
                    aria-expanded={expandedSections[section.id]}
                  >
                    {section.title}
                    <ChevronDownIcon 
                      className={`w-4 h-4 transition-transform duration-200 ${
                        expandedSections[section.id] ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${
                    expandedSections[section.id] ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <ul className="space-y-1 pt-2">
                      {section.links.map((link, index) => (
                        <li key={index}>
                          <a 
                            href={link.href}
                            className="text-sm text-brand-background/70 hover:text-brand-background transition-colors block py-1"
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

                         {/* Desktop Grid */}
             <div className="hidden sm:grid sm:grid-cols-2 gap-6">
               {footerSections.map((section) => (
                 <div key={section.id}>
                   <h3 className="font-semibold text-sm mb-2">{section.title}</h3>
                   <ul className="space-y-1">
                    {section.links.map((link, index) => (
                      <li key={index}>
                        <a 
                          href={link.href}
                          className="text-sm text-brand-background/70 hover:text-brand-background transition-colors block py-1"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-secondary/20 pt-3 pb-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
            <p className="text-xs text-brand-background/70">
              © 2024 VAIBRANT. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-brand-background/70">
              <a href="#" className="hover:text-brand-background transition-colors">Privacy</a>
              <a href="#" className="hover:text-brand-background transition-colors">Terms</a>
              <a href="#" className="hover:text-brand-background transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 