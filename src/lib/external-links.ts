/**
 * External Links Configuration
 * Centralized management of external URLs with environment variable support
 */

export const EXTERNAL_LINKS = {
  CALENDLY: process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/usmanabbas5030',
  // Add other external links as needed
  GITHUB: process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/vaibrant',
  LINKEDIN: process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://linkedin.com/company/vaibrant',
  TWITTER: process.env.NEXT_PUBLIC_TWITTER_URL || 'https://twitter.com/vaibrant',
} as const

export type ExternalLinkKey = keyof typeof EXTERNAL_LINKS 