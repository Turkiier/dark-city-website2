import type { Metadata, Viewport } from 'next'
import { Tajawal } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const tajawal = Tajawal({ 
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '700', '800', '900'],
  variable: '--font-tajawal'
})

export const metadata: Metadata = {
  title: 'DARK CITY | سيرفر رول بلاي بلايستيشن',
  description: 'انضم إلى DARK CITY - أفضل سيرفر رول بلاي عربي على البلايستيشن. عش تجربة لعب فريدة في مدينة لا تنام.',
  keywords: ['GTA', 'RP', 'PlayStation', 'رول بلاي', 'سيرفر عربي', 'DARK CITY'],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#dc2626',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className="bg-background">
      <body className={`${tajawal.className} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
