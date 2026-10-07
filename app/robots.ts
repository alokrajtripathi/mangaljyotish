import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const CANONICAL_SITE_URL = 'https://www.mangaljyotishparamarash.in'

export default function robots(): MetadataRoute.Robots {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL
  const baseUrl = (envUrl && !envUrl.includes('.com') ? envUrl : CANONICAL_SITE_URL).replace(/\/$/, '')

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
