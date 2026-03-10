import type { Metadata, Viewport } from 'next'
import { Barlow_Condensed, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  variable: '--font-heading',
  weight: ['400', '500', '600', '700'],
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'River Valley Athletic Club | Stillwater\'s Full-Service Athletic Club',
  description: 'River Valley Athletic Club is a full-service gym and aquatic center in Stillwater, MN. 50+ free fitness classes, racquetball, basketball, indoor and outdoor pools, spa, childcare, and more.',
  generator: 'v0.app',
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#29ABE2',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${barlowCondensed.variable} ${dmSans.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
