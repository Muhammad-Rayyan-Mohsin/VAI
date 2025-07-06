import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VAIBRANT - Code. Intelligence. Impact.',
  description: 'We build data-driven, AI-powered web and mobile experiences. Specializing in AI/ML, Data Science, Web & App Development.',
  keywords: ['AI', 'ML', 'Data Science', 'Web Development', 'App Development', 'VAIBRANT'],
  authors: [{ name: 'VAIBRANT' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 