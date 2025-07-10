'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

interface NavigationProps {
  currentPath?: string
  showNav?: boolean
  actionButton?: {
    text: string
    onClick?: () => void
  }
}

export default function Navigation({ currentPath = '/', showNav = true, actionButton }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up')
  const [lastScrollY, setLastScrollY] = useState(0)

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isMobileMenuOpen) {
      const handleClickOutside = () => setIsMobileMenuOpen(false)
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [isMobileMenuOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  // Handle scroll direction for navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setScrollDirection('down')
      } else {
        setScrollDirection('up')
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const navigationLinks = [
    { href: '/#services', label: 'How it works', active: currentPath === '/' },
    { href: '/#expertise', label: 'Use cases', active: currentPath === '/' },
    { href: '/pricing', label: 'Pricing', active: currentPath === '/pricing' },
    { href: '/enterprise', label: 'Enterprise', active: currentPath === '/enterprise' },
    { href: '/help', label: 'Help', active: currentPath === '/help' },
    { href: '/projects', label: 'Projects', active: currentPath === '/projects' }
  ]

  return (
    <motion.nav 
      className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/90 border-b border-gray-200/50"
      initial={{ y: 0 }}
      animate={{ y: showNav ? 0 : (scrollDirection === 'up' ? 0 : -100) }}
      transition={{ 
        duration: 0.3, 
        ease: "easeInOut" 
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2 z-50 relative">
            <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center">
              <span className="text-brand-background text-sm font-bold">V</span>
            </div>
            <div className="text-xl font-semibold text-brand-primary">VAIBRANT</div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-brand-primary/70">
            {navigationLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className={`hover:text-brand-primary transition-colors py-2 ${link.active ? 'text-brand-primary' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Action Button */}
          {actionButton && (
            <div className="hidden md:flex items-center">
              <Button 
                className="btn-brand-primary rounded-lg px-4 py-2 text-sm font-medium flex items-center gap-2"
                onClick={actionButton.onClick}
              >
                {actionButton.text}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 rounded-lg hover:bg-gray-100 transition-colors z-[60] relative bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm"
            onClick={(e) => {
              e.stopPropagation()
              setIsMobileMenuOpen(!isMobileMenuOpen)
            }}
            aria-label="Toggle mobile menu"
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-black" />
              ) : (
                <Menu className="h-6 w-6 text-black" />
              )}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Enhanced Background Blur Overlay - Full Screen */}
            <motion.div
              className="md:hidden fixed inset-0 z-30 backdrop-blur-md bg-black/40"
              style={{
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
              }}
              initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
              animate={{ opacity: 1, backdropFilter: 'blur(16px)' }}
              exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu Content - Positioned over blur */}
            <motion.div
              className="md:hidden fixed inset-0 z-40 flex items-start justify-center pt-[70px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
            {/* Menu Content Container with glass effect */}
            <motion.div
              className="w-full max-w-sm mx-4 mt-4 bg-white/95 backdrop-blur-sm border border-gray-200/50 rounded-2xl shadow-2xl overflow-hidden"
              initial={{ y: -50, scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: -50, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {/* Navigation Links */}
              <div className="px-6 py-6 space-y-2">
                {navigationLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className={`block py-3 px-4 text-lg font-medium rounded-xl transition-colors ${
                      link.active 
                        ? 'text-brand-primary bg-brand-primary/10' 
                        : 'text-brand-primary/70 hover:text-brand-primary hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              {/* Mobile Action Button */}
              {actionButton && (
                <motion.div 
                  className="px-6 pb-6 pt-2 border-t border-gray-200/50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <Button 
                    className="w-full btn-brand-primary rounded-xl py-3 text-lg font-medium flex items-center justify-center gap-2"
                    onClick={() => {
                      actionButton.onClick?.()
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    {actionButton.text}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Button>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  )
} 