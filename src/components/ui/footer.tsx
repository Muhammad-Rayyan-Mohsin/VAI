'use client'

import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { Mail, MapPin, Linkedin, Github, Twitter } from 'lucide-react'

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
    { icon: MapPin, text: 'Dubai, UAE', href: '#' }
  ]

  return (
    <footer className={`bg-brand-primary text-brand-background ${className}`}>
      <div className="max-w-7xl mx-auto px-[3vw] sm:px-[4vw] lg:px-[3.5vw] xl:px-[3vw]">
        {/* Main Footer Content - Compact Layout */}
        <div className="py-4 sm:py-5">
          {/* Desktop Layout - Single Row */}
          <div className="hidden sm:grid sm:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6 items-start">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="text-lg sm:text-xl font-bold mb-2">VAIBRANT</div>
              <p className="text-sm text-brand-background/80 mb-3 leading-relaxed">
                Expert AI, ML, and technology services that transform businesses and drive innovation.
              </p>
              {/* Social Links */}
              <div className="flex space-x-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-7 h-7 bg-brand-secondary/20 rounded-md flex items-center justify-center hover:bg-brand-secondary/30 transition-all duration-200 hover:scale-105"
                    aria-label={social.name}
                  >
                    <social.icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="font-semibold text-xs mb-2 text-brand-background/90">Services</h3>
              <ul className="space-y-1">
                {footerSections[0].links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-xs text-brand-background/70 hover:text-brand-background transition-colors block py-0.5"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold text-xs mb-2 text-brand-background/90">Company</h3>
              <ul className="space-y-1">
                {footerSections[1].links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-xs text-brand-background/70 hover:text-brand-background transition-colors block py-0.5"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h3 className="font-semibold text-xs mb-2 text-brand-background/90">Contact</h3>
              <div className="space-y-1.5">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center gap-1.5 text-xs text-brand-background/70 hover:text-brand-background transition-colors group"
                  >
                    <contact.icon className="w-3 h-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="truncate">{contact.text}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Layout - Compact Accordion */}
          <div className="sm:hidden">
            {/* Brand Section - Always Visible */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <div className="text-lg font-bold">VAIBRANT</div>
                <div className="flex space-x-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-6 h-6 bg-brand-secondary/20 rounded-md flex items-center justify-center hover:bg-brand-secondary/30 transition-all duration-200"
                      aria-label={social.name}
                    >
                      <social.icon className="w-3 h-3" />
                    </a>
                  ))}
                </div>
              </div>
              <p className="text-xs text-brand-background/80 mb-3 leading-relaxed">
                Expert AI, ML, and technology services that transform businesses.
              </p>
              
              {/* Contact Info - Always Visible on Mobile */}
              <div className="space-y-1">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center gap-1.5 text-xs text-brand-background/70 hover:text-brand-background transition-colors group"
                  >
                    <contact.icon className="w-3 h-3 flex-shrink-0" />
                    <span className="truncate">{contact.text}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Collapsible Links */}
            <div className="space-y-1">
              {footerSections.map((section) => (
                <div key={section.id} className="border-b border-brand-secondary/10 last:border-b-0">
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="flex items-center justify-between w-full text-left py-2 font-medium text-xs"
                    aria-expanded={expandedSections[section.id]}
                  >
                    {section.title}
                    <ChevronDownIcon 
                      className={`w-3 h-3 transition-transform duration-200 ${
                        expandedSections[section.id] ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${
                    expandedSections[section.id] ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <ul className="space-y-0.5 pb-2">
                      {section.links.map((link, index) => (
                        <li key={index}>
                          <a 
                            href={link.href}
                            className="text-xs text-brand-background/70 hover:text-brand-background transition-colors block py-0.5"
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
          </div>
        </div>

        {/* Bottom Bar - More Compact */}
        <div className="border-t border-brand-secondary/20 py-2.5">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
            <p className="text-xs text-brand-background/70">
              © 2024 VAIBRANT. All rights reserved.
            </p>
            <div className="flex gap-3 text-xs text-brand-background/70">
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