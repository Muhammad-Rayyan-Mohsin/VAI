'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { 
  X, 
  Upload, 
  FileText, 
  Image, 
  Archive,
  CheckCircle,
  AlertCircle,
  Loader2
} from 'lucide-react'

interface StartProjectModalProps {
  isOpen: boolean
  onClose: () => void
}

interface FormData {
  fullName: string
  email: string
  selectedService: string
  estimatedBudget: string
  projectTimeline: string
  projectDetails: string
  files: File[]
}

interface FormErrors {
  fullName?: string
  email?: string
  selectedService?: string
  estimatedBudget?: string
  projectTimeline?: string
  projectDetails?: string
}

const services = [
  'AI & Machine Learning',
  'Data Science & Analytics',
  'Web Development',
  'Mobile App Development',
  'Process Automation',
  'API Development',
  'Custom Software Solutions',
  'Consulting & Strategy'
]

const budgetRanges = [
  'Under $10,000',
  '$10,000 - $25,000',
  '$25,000 - $50,000',
  '$50,000 - $100,000',
  '$100,000 - $250,000',
  '$250,000+'
]

const timelines = [
  '1-2 weeks',
  '3-4 weeks',
  '1-2 months',
  '3-6 months',
  '6+ months'
]

export default function StartProjectModal({ isOpen, onClose }: StartProjectModalProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    selectedService: '',
    estimatedBudget: '',
    projectTimeline: '',
    projectDetails: '',
    files: []
  })
  
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')
  
  const fileInputRef = useRef<HTMLInputElement>(null)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters'
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Service validation
    if (!formData.selectedService) {
      newErrors.selectedService = 'Please select a service'
    }

    // Budget validation
    if (!formData.estimatedBudget) {
      newErrors.estimatedBudget = 'Please select your estimated budget'
    }

    // Timeline validation
    if (!formData.projectTimeline) {
      newErrors.projectTimeline = 'Please select your project timeline'
    }

    // Project details validation
    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = 'Project details are required'
    } else if (formData.projectDetails.trim().length < 20) {
      newErrors.projectDetails = 'Please provide more details (at least 20 characters)'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || [])
    const allowedTypes = [
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/msword',
      'image/jpeg',
      'image/jpg',
      'image/png',
      'application/zip',
      'application/x-zip-compressed'
    ]

    const validFiles = files.filter(file => {
      if (!allowedTypes.includes(file.type)) {
        setSubmitMessage(`File "${file.name}" is not supported. Please upload PDF, DOCX, JPG, PNG, or ZIP files.`)
        setSubmitStatus('error')
        return false
      }
      if (file.size > 10 * 1024 * 1024) { // 10MB limit
        setSubmitMessage(`File "${file.name}" is too large. Maximum file size is 10MB.`)
        setSubmitStatus('error')
        return false
      }
      return true
    })

    if (validFiles.length > 0) {
      setFormData(prev => ({ ...prev, files: [...prev.files, ...validFiles] }))
      setSubmitStatus('idle')
    }
  }

  const removeFile = (index: number) => {
    setFormData(prev => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index)
    }))
  }

  const getFileIcon = (file: File) => {
    if (file.type.startsWith('image/')) return <Image className="h-4 w-4" />
    if (file.type.includes('pdf') || file.type.includes('word')) return <FileText className="h-4 w-4" />
    if (file.type.includes('zip')) return <Archive className="h-4 w-4" />
    return <FileText className="h-4 w-4" />
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      let fileUrls: string[] = []

      // Upload files if any
      if (formData.files.length > 0) {
        setSubmitMessage('Uploading files...')
        
        const { uploadFile } = await import('@/lib/supabase')
        
        const uploadPromises = formData.files.map(file => uploadFile(file))
        const uploadResults = await Promise.all(uploadPromises)
        fileUrls = uploadResults.map(result => result.publicUrl)
      }

      // Save to database
      setSubmitMessage('Saving project data...')
      
      const { insertProject } = await import('@/lib/supabase')
      
      await insertProject({
        full_name: formData.fullName,
        email: formData.email,
        selected_service: formData.selectedService,
        estimated_budget: formData.estimatedBudget,
        project_timeline: formData.projectTimeline,
        project_details: formData.projectDetails,
        file_urls: fileUrls
      })
      
      setSubmitStatus('success')
      setSubmitMessage('Project submitted successfully! We\'ll get back to you within 24 hours.')
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          fullName: '',
          email: '',
          selectedService: '',
          estimatedBudget: '',
          projectTimeline: '',
          projectDetails: '',
          files: []
        })
        onClose()
        setSubmitStatus('idle')
        setSubmitMessage('')
      }, 2000)
      
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      
      if (error instanceof Error) {
        if (error.message.includes('Missing Supabase environment variables')) {
          setSubmitMessage('Configuration error. Please contact support.')
        } else {
          setSubmitMessage(`Failed to submit project: ${error.message}`)
        }
      } else {
        setSubmitMessage('Failed to submit project. Please try again.')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          className="relative w-full max-w-2xl max-h-[90vh] mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden"
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Start Your Project</h2>
              <p className="text-gray-600 mt-1">Tell us about your project and we'll get back to you within 24 hours.</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-6 w-6 text-gray-500" />
            </button>
          </div>

          {/* Form */}
          <div className="max-h-[calc(90vh-120px)] overflow-y-auto">
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Success/Error Messages */}
              {submitStatus !== 'idle' && (
                <motion.div
                  className={`p-4 rounded-lg flex items-center gap-3 ${
                    submitStatus === 'success' 
                      ? 'bg-green-50 border border-green-200' 
                      : 'bg-red-50 border border-red-200'
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {submitStatus === 'success' ? (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-red-600" />
                  )}
                  <span className={submitStatus === 'success' ? 'text-green-800' : 'text-red-800'}>
                    {submitMessage}
                  </span>
                </motion.div>
              )}

              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                    Full Name *
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className={`mt-1 ${errors.fullName ? 'border-red-300 focus:border-red-500' : ''}`}
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`mt-1 ${errors.email ? 'border-red-300 focus:border-red-500' : ''}`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <Label htmlFor="selectedService" className="text-sm font-medium text-gray-700">
                  Selected Service *
                </Label>
                <select
                  id="selectedService"
                  value={formData.selectedService}
                  onChange={(e) => handleInputChange('selectedService', e.target.value)}
                  className={`mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black ${
                    errors.selectedService ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {errors.selectedService && (
                  <p className="mt-1 text-sm text-red-600">{errors.selectedService}</p>
                )}
              </div>

              {/* Budget and Timeline */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="estimatedBudget" className="text-sm font-medium text-gray-700">
                    Estimated Budget *
                  </Label>
                  <select
                    id="estimatedBudget"
                    value={formData.estimatedBudget}
                    onChange={(e) => handleInputChange('estimatedBudget', e.target.value)}
                    className={`mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black ${
                      errors.estimatedBudget ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                  {errors.estimatedBudget && (
                    <p className="mt-1 text-sm text-red-600">{errors.estimatedBudget}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="projectTimeline" className="text-sm font-medium text-gray-700">
                    Project Timeline *
                  </Label>
                  <select
                    id="projectTimeline"
                    value={formData.projectTimeline}
                    onChange={(e) => handleInputChange('projectTimeline', e.target.value)}
                    className={`mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black ${
                      errors.projectTimeline ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select timeline</option>
                    {timelines.map((timeline) => (
                      <option key={timeline} value={timeline}>
                        {timeline}
                      </option>
                    ))}
                  </select>
                  {errors.projectTimeline && (
                    <p className="mt-1 text-sm text-red-600">{errors.projectTimeline}</p>
                  )}
                </div>
              </div>

              {/* Project Details */}
              <div>
                <Label htmlFor="projectDetails" className="text-sm font-medium text-gray-700">
                  Project Details *
                </Label>
                <Textarea
                  id="projectDetails"
                  value={formData.projectDetails}
                  onChange={(e) => handleInputChange('projectDetails', e.target.value)}
                  className={`mt-1 min-h-[120px] ${errors.projectDetails ? 'border-red-300 focus:border-red-500' : ''}`}
                  placeholder="Describe your project requirements, goals, and any specific features you need..."
                />
                {errors.projectDetails && (
                  <p className="mt-1 text-sm text-red-600">{errors.projectDetails}</p>
                )}
                <p className="mt-1 text-sm text-gray-500">
                  {formData.projectDetails.length}/500 characters (minimum 20)
                </p>
              </div>

              {/* File Upload */}
              <div>
                <Label className="text-sm font-medium text-gray-700">
                  Optional File Upload
                </Label>
                <div className="mt-1">
                  <div
                    className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors cursor-pointer"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">
                      Click to upload files or drag and drop
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      PDF, DOCX, JPG, PNG, ZIP (max 10MB each)
                    </p>
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept=".pdf,.docx,.doc,.jpg,.jpeg,.png,.zip"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </div>

                {/* Uploaded Files */}
                {formData.files.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {formData.files.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center gap-2">
                          {getFileIcon(file)}
                          <span className="text-sm font-medium text-gray-700">{file.name}</span>
                          <span className="text-xs text-gray-500">
                            ({(file.size / 1024 / 1024).toFixed(2)} MB)
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="text-red-500 hover:text-red-700 p-1"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex gap-4 pt-4">
                <Button
                  type="button"
                  onClick={onClose}
                  className="flex-1 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-lg py-3"
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-black text-white hover:bg-gray-800 rounded-lg py-3 flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Submit Project'
                  )}
                </Button>
              </div>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
} 