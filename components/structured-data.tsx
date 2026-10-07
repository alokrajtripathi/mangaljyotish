import { brand, contact, services, faqs, branchList, nav } from '@/lib/site-data'

const CANONICAL_SITE_URL = 'https://www.mangaljyotishparamarash.in'

export function StructuredData() {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL
  const siteUrl = (envUrl && !envUrl.includes('.com') ? envUrl : CANONICAL_SITE_URL).replace(/\/$/, '')

  const structuredDataGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      // 1. WebSite Schema
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: brand.name.hi,
        alternateName: [brand.name.en, 'Mangal Jyotish Kendra', 'शास्त्री हिमांशु त्रिपाठी ज्योतिष'],
        headline: 'आस्था • परंपरा • वैदिक मार्गदर्शन',
        description:
          'काशी के विद्वान ब्राह्मणों द्वारा वैदिक पूजा-पाठ, धार्मिक अनुष्ठान, फलित ज्योतिष, वास्तु शास्त्र एवं कुंडली परामर्श — शास्त्री हिमांशु त्रिपाठी जी। वाराणसी, आरा, पटना एवं पूरे भारत में सेवाएं उपलब्ध।',
        publisher: {
          '@id': `${siteUrl}/#organization`,
        },
        inLanguage: ['hi-IN', 'en-IN'],
      },

      // 2. Organization / ProfessionalService / LocalBusiness
      {
        '@type': ['ProfessionalService', 'LocalBusiness', 'Organization'],
        '@id': `${siteUrl}/#organization`,
        name: brand.name.hi,
        alternateName: [brand.name.en, 'Mangal Jyotish Paramarsh Kendra'],
        slogan: 'आस्था • परंपरा • वैदिक मार्गदर्शन',
        url: siteUrl,
        logo: `${siteUrl}${brand.logo}`,
        image: [`${siteUrl}${brand.logo}`, `${siteUrl}${brand.portrait}`],
        description:
          'काशी के विद्वान ब्राह्मणों द्वारा वैदिक पूजा-पाठ, धार्मिक अनुष्ठान, फलित ज्योतिष, वास्तु शास्त्र एवं कुंडली परामर्श। मुख्य शाखाएं: वाराणसी, आरा, पटना। सेवा क्षेत्र: पूरे भारत में सेवाएं उपलब्ध।',
        telephone: contact.phoneIntl,
        email: contact.email,
        priceRange: '$$',
        currenciesAccepted: 'INR',
        paymentAccepted: 'Cash, UPI, Bank Transfer, Net Banking',
        founder: {
          '@id': `${siteUrl}/#expert`,
        },
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: contact.phoneIntl,
            contactType: 'Customer Service & Puja Consultation Booking',
            areaServed: 'IN',
            availableLanguage: ['Hindi', 'English', 'Sanskrit', 'Bhojpuri'],
          },
          {
            '@type': 'ContactPoint',
            telephone: '+919798802239',
            url: contact.whatsapp,
            contactType: 'WhatsApp Consultation & Support',
            areaServed: 'IN',
            availableLanguage: ['Hindi', 'English'],
          },
        ],
        sameAs: [
          contact.whatsapp,
          contact.mailto,
          contact.tel,
        ],
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Varanasi',
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
        location: [
          {
            '@type': 'Place',
            name: 'वाराणसी मुख्य शाखा (Varanasi Main Branch)',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Varanasi',
              addressRegion: 'Uttar Pradesh',
              addressCountry: 'IN',
            },
          },
          {
            '@type': 'Place',
            name: 'आरा शाखा (Ara Branch)',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Ara',
              addressRegion: 'Bihar',
              addressCountry: 'IN',
            },
          },
          {
            '@type': 'Place',
            name: 'पटना शाखा (Patna Branch)',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Patna',
              addressRegion: 'Bihar',
              addressCountry: 'IN',
            },
          },
        ],
        areaServed: [
          { '@type': 'City', name: 'Varanasi' },
          { '@type': 'City', name: 'Ara' },
          { '@type': 'City', name: 'Patna' },
          { '@type': 'State', name: 'Uttar Pradesh' },
          { '@type': 'State', name: 'Bihar' },
          { '@type': 'Country', name: 'India', description: 'पूरे भारत में सेवाएं उपलब्ध (Services Available Across India)' },
        ],
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '06:00',
            closes: '21:00',
          },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'वैदिक पूजा-पाठ, अनुष्ठान एवं ज्योतिष सेवाएं (Vedic Pujas & Astrology Services)',
          itemListElement: services.map((s, index) => ({
            '@type': 'Offer',
            position: index + 1,
            itemOffered: {
              '@type': 'Service',
              name: s.name.hi,
              alternateName: s.name.en,
              description: s.desc?.hi || `${s.name.hi} — काशी के विद्वान ब्राह्मणों द्वारा वैदिक विधि-विधान से संपन्न कराई जाती है।`,
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
        telephone: contact.phoneIntl,
        email: contact.email,
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
          'शास्त्री हिमांशु त्रिपाठी जी — फलित ज्योतिष, वास्तु शास्त्र एवं वैदिक कर्मकांड के विशेषज्ञ। 10 वर्षों का अनुभव, काशी की पारंपरिक वैदिक ज्ञान परंपरा से दीक्षित। फोन/व्हाट्सएप: 9798802239, ईमेल: himanshujee802156@gmail.com।',
      },

      // 4. SiteNavigationElement (Quick Links)
      {
        '@type': 'ItemList',
        '@id': `${siteUrl}/#navigation`,
        name: 'त्वरित लिंक (Quick Links)',
        itemListElement: nav.map((item, index) => ({
          '@type': 'SiteNavigationElement',
          position: index + 1,
          name: item.label.hi,
          alternateName: item.label.en,
          url: `${siteUrl}#${item.id}`,
        })),
      },

      // 5. FAQPage Schema
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

      // 6. BreadcrumbList Schema
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteUrl}/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'होम (Home)',
            item: siteUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'हमारे बारे में (About)',
            item: `${siteUrl}#about`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'हमारी सेवाएं (Services)',
            item: `${siteUrl}#services`,
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'ज्योतिष परामर्श (Astrology)',
            item: `${siteUrl}#astrology`,
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'गैलरी (Gallery)',
            item: `${siteUrl}#gallery`,
          },
          {
            '@type': 'ListItem',
            position: 6,
            name: 'शाखाएं (Branches)',
            item: `${siteUrl}#branches`,
          },
          {
            '@type': 'ListItem',
            position: 7,
            name: 'प्रश्नोत्तरी (FAQ)',
            item: `${siteUrl}#faq`,
          },
          {
            '@type': 'ListItem',
            position: 8,
            name: 'संपर्क करें (Contact)',
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
