import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'VAIBRANT - AI-Powered Solutions Built for Tomorrow',
    short_name: 'VAIBRANT',
    description: 'Expert AI, Machine Learning, Data Science, and Web Development services. Transform your ideas into intelligent, automated solutions.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1f2937',
    orientation: 'portrait',
    scope: '/',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'maskable',
      },
    ],
    categories: ['business', 'productivity', 'utilities'],
  }
} 