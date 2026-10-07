import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'
export const revalidate = 86400

const CANONICAL_SITE_URL = 'https://www.mangaljyotishparamarash.in'

export default function sitemap(): MetadataRoute.Sitemap {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL
  const baseUrl = (envUrl && !envUrl.includes('.com') ? envUrl : CANONICAL_SITE_URL).replace(/\/$/, '')
  const lastModified = new Date()

  return [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: 'daily',
      priority: 1.0,
      alternates: {
        languages: {
          hi: `${baseUrl}/`,
          en: `${baseUrl}/`,
          'hi-IN': `${baseUrl}/`,
          'en-IN': `${baseUrl}/`,
        },
      },
    },
  ]
}

