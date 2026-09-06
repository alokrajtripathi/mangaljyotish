'use client'

import { MessageCircle } from 'lucide-react'
import { useLanguage } from './language-provider'
import { astrologyTopics, contact, t } from '@/lib/site-data'
import { SectionHeading } from './section-heading'
import { ServiceIcon } from './service-icon'
import { Reveal } from './reveal'

export function Astrology() {
  const { tr } = useLanguage()

  return (
    <section
      id="astrology"
      className="relative overflow-hidden bg-maroon-deep py-16 text-maroon-foreground lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-mandala opacity-[0.12]" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(80% 60% at 50% 0%, oklch(0.7 0.16 52 / 0.22), transparent 60%)',
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4">
        <SectionHeading light title={tr(t.astrologyHeading)} subtitle={tr(t.astrologyText)} />

        <ul className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
          {astrologyTopics.map((topic, i) => (
            <Reveal
              as="li"
              key={topic.icon + i}
              delay={i * 80}
              className="flex items-center gap-4 rounded-2xl border border-accent/30 bg-maroon/40 p-5 transition-all hover:border-accent hover:bg-maroon/60"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                <ServiceIcon name={topic.icon} className="size-6" />
              </span>
              <span className="text-base font-semibold text-cream text-pretty sm:text-lg">
                {tr(topic.label)}
              </span>
            </Reveal>
          ))}
        </ul>

        <div className="mt-10 flex justify-center">
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 font-bold text-maroon-deep shadow-lg shadow-accent/20 transition-all hover:bg-gold-soft hover:shadow-xl"
          >
            <MessageCircle className="size-5" aria-hidden="true" />
            {tr(t.astrologyCta)}
          </a>
        </div>
      </div>
    </section>
  )
}
