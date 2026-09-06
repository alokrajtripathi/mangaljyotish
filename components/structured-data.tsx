import { brand, contact, services } from '@/lib/site-data'

export function StructuredData() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mangaljyotishparamarsh.com'

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: brand.name.hi,
    alternateName: brand.name.en,
    description:
      'काशी के विद्वान ब्राह्मणों द्वारा वैदिक पूजा-पाठ, धार्मिक अनुष्ठान, फलित ज्योतिष, वास्तु शास्त्र एवं कुंडली परामर्श।',
    image: `${siteUrl}${brand.portrait}`,
    logo: `${siteUrl}${brand.logo}`,
    telephone: contact.phoneIntl,
    email: contact.email,
    url: siteUrl,
    priceRange: '$$',
    founder: {
      '@type': 'Person',
      name: brand.expert.hi,
      jobTitle: brand.title.hi,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Varanasi',
      addressRegion: 'Uttar Pradesh',
      addressCountry: 'IN',
    },
    areaServed: [
      { '@type': 'City', name: 'Varanasi' },
      { '@type': 'City', name: 'Ara' },
      { '@type': 'City', name: 'Patna' },
      { '@type': 'Country', name: 'India' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Vedic Pujas & Astrology Services',
      itemListElement: services.slice(0, 10).map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.name.hi,
          alternateName: s.name.en,
          description: s.desc?.hi || s.name.hi,
        },
      })),
    },
    sameAs: [],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
