'use client'

import { Phone } from 'lucide-react'
import { useLanguage } from './language-provider'
import { contact, t } from '@/lib/site-data'

export function AnnouncementBar() {
  const { tr } = useLanguage()
  return (
    <div className="bg-maroon-deep text-maroon-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-1 px-4 py-2 text-center text-sm sm:flex-row sm:text-left">
        <p className="flex flex-wrap items-center justify-center gap-2 tracking-wide sm:justify-start">
          <span className="text-accent font-semibold" aria-hidden="true">
            {'\u0950'}
          </span>
          <span className="font-semibold text-accent">{tr(t.devotionalLine)}</span>
          <span className="text-cream/50" aria-hidden="true">|</span>
          <span className="text-cream/90">{tr(t.announcement)}</span>
        </p>
        <a
          href={contact.tel}
          className="flex items-center gap-2 font-semibold text-accent transition-colors hover:text-gold-soft"
        >
          <Phone className="size-4" aria-hidden="true" />
          {contact.phone}
        </a>
      </div>
    </div>
  )
}
