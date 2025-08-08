import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const siteUrl = 'https://vaibrant.io'

export const metadata: Metadata = {
  title: {
    default: 'VAIBRANT - AI-Powered Solutions Built for Tomorrow',
    template: '%s | VAIBRANT'
  },
  description: 'Expert AI, Machine Learning, Data Science, and Web Development services. We transform your ideas into intelligent, automated solutions that drive real business value.',
  keywords: [
    'AI services',
    'Machine Learning solutions',
    'Data Science consulting', 
    'Web Development',
    'AI automation',
    'Business intelligence',
    'Custom AI development',
    'ML consulting',
    'Predictive analytics',
    'AI implementation',
    'Enterprise AI',
    'AI transformation',
    'Process Automation',
    'Data Analytics',
    'App Development',
    'VAIBRANT'
  ],
  authors: [{ name: 'VAIBRANT', url: siteUrl }],
  creator: 'VAIBRANT',
  publisher: 'VAIBRANT',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'VAIBRANT - AI-Powered Solutions Built for Tomorrow',
    description: 'Expert AI, Machine Learning, Data Science, and Web Development services. Transform your ideas into intelligent, automated solutions.',
    siteName: 'VAIBRANT',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VAIBRANT - AI-Powered Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VAIBRANT - AI-Powered Solutions Built for Tomorrow',
    description: 'Expert AI, Machine Learning, Data Science, and Web Development services. Transform your ideas into intelligent solutions.',
    images: ['/twitter-image.jpg'],
    creator: '@vaibrant',
    site: '@vaibrant',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
  classification: 'AI Services, Technology Consulting',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
}

// JSON-LD Structured Data
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'VAIBRANT',
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description: 'Expert AI, Machine Learning, Data Science, and Web Development services. We transform ideas into intelligent, automated solutions.',
  foundingDate: '2024',
  sameAs: [
    'https://twitter.com/vaibrant',
    'https://linkedin.com/company/vaibrant',
    'https://github.com/vaibrant'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'hello@vaibrant.io',
    availableLanguage: ['English']
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dubai',
    addressCountry: 'AE'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'VAIBRANT Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI & Machine Learning Solutions',
          description: 'Custom AI and ML solutions for business automation and intelligence'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service', 
          name: 'Data Science & Analytics',
          description: 'Data-driven insights and analytics solutions'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Web & Mobile Development',
          description: 'Modern web and mobile application development'
        }
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="color-scheme" content="light dark" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
} 