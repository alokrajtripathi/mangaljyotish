import { brand, contact, services, faqs } from '@/lib/site-data'

export function StructuredData() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mangaljyotishparamarsh.com'

  const structuredDataGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      // 1. WebSite
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: brand.name.hi,
        alternateName: brand.name.en,
        description:
          'काशी के विद्वान ब्राह्मणों द्वारा वैदिक पूजा-पाठ, धार्मिक अनुष्ठान, फलित ज्योतिष, वास्तु शास्त्र एवं कुंडली परामर्श — शास्त्री हिमांशु त्रिपाठी जी।',
        publisher: {
          '@id': `${siteUrl}/#organization`,
        },
        inLanguage: ['hi-IN', 'en-IN'],
      },

      // 2. Organization / ProfessionalService / LocalBusiness
      {
        '@type': ['ProfessionalService', 'LocalBusiness'],
        '@id': `${siteUrl}/#organization`,
        name: brand.name.hi,
        alternateName: brand.name.en,
        url: siteUrl,
        logo: `${siteUrl}${brand.logo}`,
        image: `${siteUrl}${brand.portrait}`,
        description:
          'काशी के विद्वान ब्राह्मणों द्वारा वैदिक पूजा-पाठ, धार्मिक अनुष्ठान, फलित ज्योतिष, वास्तु शास्त्र एवं कुंडली परामर्श। वाराणसी, आरा, पटना एवं सम्पूर्ण भारत में सेवाएं उपलब्ध।',
        telephone: contact.phoneIntl,
        email: contact.email,
        priceRange: '$$',
        currenciesAccepted: 'INR',
        paymentAccepted: 'Cash, UPI, Bank Transfer',
        founder: {
          '@id': `${siteUrl}/#expert`,
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Varanasi',
          addressRegion: 'Uttar Pradesh',
          postalCode: '221001',
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '25.3176',
          longitude: '82.9739',
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '06:00',
            closes: '21:00',
          },
        ],
        areaServed: [
          { '@type': 'City', name: 'Varanasi' },
          { '@type': 'City', name: 'Ara' },
          { '@type': 'City', name: 'Patna' },
          { '@type': 'State', name: 'Uttar Pradesh' },
          { '@type': 'State', name: 'Bihar' },
          { '@type': 'Country', name: 'India' },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Vedic Pujas, Religious Rituals & Astrology Services',
          itemListElement: services.map((s, index) => ({
            '@type': 'Offer',
            position: index + 1,
            itemOffered: {
              '@type': 'Service',
              name: s.name.hi,
              alternateName: s.name.en,
              description: s.desc?.hi || `${s.name.hi} - वैदिक विधि-विधान एवं विद्वान ब्राह्मणों द्वारा।`,
              provider: {
                '@id': `${siteUrl}/#organization`,
              },
            },
          })),
        },
      },

      // 3. Person (Shastri Himanshu Tripathi Ji)
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#expert`,
        name: brand.expert.hi,
        alternateName: brand.expert.en,
        jobTitle: brand.title.hi,
        image: `${siteUrl}${brand.portrait}`,
        alumniOf: {
          '@type': 'EducationalOrganization',
          name: 'संपूर्णानंद संस्कृत विश्वविद्यालय, वाराणसी (Sampurnanand Sanskrit University, Varanasi)',
        },
        hasCredential: {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'degree',
          name: 'Shastri (Jyotish)',
        },
        description:
          'सनातन वैदिक परंपरा और फलित ज्योतिष, वास्तु शास्त्र एवं वैदिक कर्मकांड के विशेषज्ञ शास्त्री हिमांशु त्रिपाठी जी, 10 वर्षों के अनुभव के साथ।',
      },

      // 4. FAQPage Schema
      {
        '@type': 'FAQPage',
        '@id': `${siteUrl}/#faq`,
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q.hi,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a.hi,
          },
        })),
      },

      // 5. BreadcrumbList Schema
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteUrl}/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: `${siteUrl}#services`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Astrology',
            item: `${siteUrl}#astrology`,
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'FAQ',
            item: `${siteUrl}#faq`,
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'Contact',
            item: `${siteUrl}#contact`,
          },
        ],
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataGraph) }}
    />
  )
}
