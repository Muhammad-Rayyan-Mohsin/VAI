/**
 * Centralized TypeScript definitions for VAIBRANT
 */

// Navigation types
export interface NavigationProps {
  currentPath: string
  showNav: boolean
  actionButton?: {
    text: string
    onClick: () => void
  }
}

// Project form types
export interface ProjectFormData {
  fullName: string
  email: string
  selectedService: string
  estimatedBudget: string
  projectTimeline: string
  projectDetails: string
  files: File[]
}

export interface ProjectFormErrors {
  fullName?: string
  email?: string
  selectedService?: string
  estimatedBudget?: string
  projectTimeline?: string
  projectDetails?: string
}

// Database types (extending from supabase.ts)
export interface ProjectSubmission {
  id?: string
  created_at?: string
  updated_at?: string
  full_name: string
  email: string
  selected_service: string
  estimated_budget: string
  project_timeline: string
  project_details: string
  file_urls: string[]
  status?: 'pending' | 'in_review' | 'approved' | 'rejected'
}

// UI Component types
export interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  disabled?: boolean
  children: React.ReactNode
}

// External links
export interface ExternalLinksConfig {
  CALENDLY: string
  GITHUB: string
  LINKEDIN: string
  TWITTER: string
}

// Animation types
export interface MotionProps {
  initial?: object
  animate?: object
  transition?: object
  className?: string
  children: React.ReactNode
}

// File upload types
export interface FileUploadResult {
  filePath: string
  publicUrl: string
}

export interface FileValidation {
  allowedTypes: string[]
  maxSizeBytes: number
}

// SEO and metadata types
export interface SiteMetadata {
  title: string
  description: string
  url: string
  image: string
  keywords: string[]
}

export interface SitemapEntry {
  url: string
  lastModified: string
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: number
} 