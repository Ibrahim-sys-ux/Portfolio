import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/shared/ThemeProvider'
import Navbar from '@/components/shared/Navbar'
import ScrollProgress from '@/components/shared/ScrollProgress'
import BackToTop from '@/components/shared/BackToTop'
import CommandPalette from '@/components/shared/CommandPalette'
import Particles from '@/components/shared/Particles'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://ibrahimkutty.dev'),
  title: {
    default: 'Ibrahim Kutty T.A — Full Stack Developer',
    template: '%s | Ibrahim Kutty T.A',
  },
  description:
    'Full Stack Software Developer specializing in Python, Django, React, and Node.js. MCA student at Amrita Vishwa Vidyapeetham building scalable web applications with optimized backend performance.',
  keywords: [
    'Ibrahim Kutty',
    'Full Stack Developer',
    'Software Engineer',
    'Python Developer',
    'Django',
    'React Developer',
    'MERN Stack',
    'Backend Engineer',
    'Kerala',
    'India',
    'Web Developer',
    'Portfolio',
  ],
  authors: [{ name: 'Ibrahim Kutty T.A', url: 'https://github.com/Ibrahim-sys-ux' }],
  creator: 'Ibrahim Kutty T.A',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ibrahimkutty.dev',
    title: 'Ibrahim Kutty T.A — Full Stack Developer',
    description:
      'Full Stack Software Developer specializing in Python, Django, React, and Node.js.',
    siteName: 'Ibrahim Kutty Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ibrahim Kutty T.A — Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ibrahim Kutty T.A — Full Stack Developer',
    description:
      'Full Stack Software Developer specializing in Python, Django, React, and Node.js.',
    images: ['/og-image.png'],
    creator: '@ibrahimkutty',
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div id="scroll-progress" />
          <Particles />
          <Navbar />
          <CommandPalette />
          <main className="relative z-10">{children}</main>
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
