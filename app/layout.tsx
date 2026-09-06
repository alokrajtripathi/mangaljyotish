import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Rozha_One, Mukta } from 'next/font/google'
import { StructuredData } from '@/components/structured-data'
import { brand } from '@/lib/site-data'
import './globals.css'

const display = Rozha_One({
  subsets: ['latin', 'devanagari'],
  weight: '400',
  variable: '--font-display',
  display: 'swap',
})

const body = Mukta({
  subsets: ['latin', 'devanagari'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mangaljyotishparamarsh.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'मंगल ज्योतिष परामर्श केंद्र | Mangal Jyotish Paramarsh Kendra - शास्त्री हिमांशु त्रिपाठी जी',
  description:
    'काशी के विद्वान ब्राह्मणों द्वारा वैदिक पूजा-पाठ, धार्मिक अनुष्ठान, फलित ज्योतिष, वास्तु शास्त्र एवं कुंडली परामर्श — शास्त्री हिमांशु त्रिपाठी जी। वाराणसी, आरा, पटना एवं पूरे भारत में सेवाएं।',
  generator: 'v0.app',
  keywords: [
    'पूजा पाठ',
    'वैदिक कर्मकांड',
    'ज्योतिष परामर्श',
    'कुंडली परामर्श',
    'वास्तु शास्त्र',
    'फलित ज्योतिष',
    'धार्मिक अनुष्ठान',
    'हवन',
    'रुद्राभिषेक',
    'गृह शांति',
    'गृह प्रवेश पूजा',
    'pooja path',
    'Vedic rituals',
    'astrology consultation',
    'kundali consultation',
    'vastu shastra',
    'spiritual guidance',
    'Hindu rituals Varanasi',
    'Shastri Himanshu Tripathi',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'मंगल ज्योतिष परामर्श केंद्र | शास्त्री हिमांशु त्रिपाठी जी',
    description:
      'काशी के विद्वान ब्राह्मणों द्वारा वैदिक पूजा-पाठ, धार्मिक अनुष्ठान, फलित ज्योतिष, वास्तु शास्त्र एवं कुंडली परामर्श। पूरे भारत में सेवाएं उपलब्ध।',
    url: '/',
    siteName: brand.name.hi,
    locale: 'hi_IN',
    type: 'website',
    images: [
      {
        url: '/images/logo.jpeg',
        width: 800,
        height: 800,
        alt: 'मंगल ज्योतिष परामर्श केंद्र - शास्त्री हिमांशु त्रिपाठी जी',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'मंगल ज्योतिष परामर्श केंद्र | शास्त्री हिमांशु त्रिपाठी जी',
    description:
      'काशी के विद्वान ब्राह्मणों द्वारा वैदिक पूजा-पाठ, धार्मिक अनुष्ठान, फलित ज्योतिष, वास्तु शास्त्र एवं कुंडली परामर्श।',
    images: ['/images/logo.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#4a121a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hi" className={`${display.variable} ${body.variable} bg-background`}>
      <head>
        <StructuredData />
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
