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
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    categories: ['business', 'productivity', 'utilities'],
    screenshots: [
      {
        src: '/screenshot-wide.png',
        sizes: '1280x720',
        type: 'image/png',
        form_factor: 'wide',
      },
      {
        src: '/screenshot-narrow.png',
        sizes: '640x1136',
        type: 'image/png',
        form_factor: 'narrow',
      },
    ],
  }
} 