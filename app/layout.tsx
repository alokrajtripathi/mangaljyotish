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
  title: {
    default: 'मंगल ज्योतिष परामर्श केंद्र | शास्त्री हिमांशु त्रिपाठी जी - वैदिक पूजा-पाठ एवं ज्योतिष',
    template: '%s | मंगल ज्योतिष परामर्श केंद्र',
  },
  description:
    'काशी (वाराणसी) के विद्वान ब्राह्मणों द्वारा वैदिक पूजा-पाठ, रुद्राभिषेक, महामृत्युंजय जाप, शतचंडी पाठ, गृह प्रवेश, वास्तु शांति एवं फलित ज्योतिष कुंडली परामर्श — शास्त्री हिमांशु त्रिपाठी जी। वाराणसी, आरा, पटना एवं सम्पूर्ण भारत में सेवाएं उपलब्ध।',
  applicationName: 'मंगल ज्योतिष परामर्श केंद्र',
  authors: [{ name: 'शास्त्री हिमांशु त्रिपाठी जी (Shastri Himanshu Tripathi Ji)', url: siteUrl }],
  generator: 'Next.js',
  creator: 'शास्त्री हिमांशु त्रिपाठी जी',
  publisher: 'मंगल ज्योतिष परामर्श केंद्र',
  category: 'Astrology, Vedic Rituals, Religion & Spirituality',
  keywords: [
    // Hindi Keywords
    'मंगल ज्योतिष परामर्श केंद्र',
    'शास्त्री हिमांशु त्रिपाठी जी',
    'शास्त्री हिमांशु त्रिपाठी 9798802239',
    'आस्था परंपरा वैदिक मार्गदर्शन',
    'वैदिक पूजा पाठ',
    'धार्मिक अनुष्ठान',
    'वाराणसी आरा पटना ज्योतिष केंद्र',
    'वाराणसी शाखा',
    'आरा शाखा',
    'पटना शाखा',
    'पूरे भारत में सेवाएं उपलब्ध',
    'रुद्राभिषेक वाराणसी',
    'महामृत्युंजय जाप',
    'गृह प्रवेश पूजा',
    'शतचंडी पाठ',
    'नवचंडी पाठ',
    'बगलामुखी पूजन',
    'कालसर्प दोष निवारण',
    'ग्रह बाधा निवारण',
    'कुंडली परामर्श',
    'फलित ज्योतिष',
    'वास्तु शास्त्र विशेषज्ञ',
    'पितृ पक्ष श्राद्ध तर्पण',
    'शादी में बाधा निवारण',
    'काशी के पंडित जी 9798802239',
    'वाराणसी पूजा बुकिंग',
    'आरा ज्योतिष केंद्र',
    'पटना पूजा पाठ',
    'himanshujee802156@gmail.com',
    '9798802239',
    // English Keywords
    'Mangal Jyotish Paramarsh Kendra',
    'Shastri Himanshu Tripathi Ji',
    'Shastri Himanshu Tripathi 9798802239',
    'Faith Tradition Vedic Guidance',
    'Varanasi Ara Patna branches',
    'Services available across India',
    'Vedic pujas in Varanasi',
    'Kashi Brahmins for puja',
    'Rudrabhishek in Varanasi',
    'Mahamrityunjaya Jaap anushthan',
    'Griha Pravesh puja vidhi',
    'Shatchandi Paath yagya',
    'Baglamukhi pujan',
    'Kaal Sarp dosh remedy',
    'Kundali consultation online',
    'Predictive Vedic astrology',
    'Vastu Shastra consultant India',
    'Pitru Paksha Shraddha Tarpan',
    'Marriage obstacle astrological guidance',
    'Best astrologer in Varanasi Ara Patna',
    'Hindu religious rituals India',
  ],
  alternates: {
    canonical: '/',
    languages: {
      'hi-IN': '/',
      'en-IN': '/',
    },
  },
  openGraph: {
    title: 'मंगल ज्योतिष परामर्श केंद्र | शास्त्री हिमांशु त्रिपाठी जी - वैदिक पूजा एवं ज्योतिष',
    description:
      'काशी के विद्वान ब्राह्मणों द्वारा संपूर्ण वैदिक विधि-विधान से पूजा-पाठ, धार्मिक अनुष्ठान एवं सटीक ज्योतिषीय मार्गदर्शन। वाराणसी, आरा, पटना एवं पूरे भारत में सेवाएं।',
    url: siteUrl,
    siteName: 'मंगल ज्योतिष परामर्श केंद्र (Mangal Jyotish Paramarsh Kendra)',
    locale: 'hi_IN',
    alternateLocale: ['en_IN'],
    type: 'website',
    images: [
      {
        url: '/images/logo.jpeg',
        width: 800,
        height: 800,
        alt: 'मंगल ज्योतिष परामर्श केंद्र - शास्त्री हिमांशु त्रिपाठी जी',
      },
      {
        url: '/images/shastri-ji.jpeg',
        width: 800,
        height: 1000,
        alt: 'शास्त्री हिमांशु त्रिपाठी जी - फलित ज्योतिष एवं कर्मकांड विशेषज्ञ',
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
  icons: {
    icon: '/images/logo.jpeg',
    shortcut: '/images/logo.jpeg',
    apple: '/images/logo.jpeg',
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
  other: {
    'geo.region': 'IN-UP',
    'geo.placename': 'Varanasi',
    'geo.position': '25.3176;82.9739',
    ICBM: '25.3176, 82.9739',
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

