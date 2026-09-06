'use client'

import { useLanguage } from './language-provider'
import { highlights } from '@/lib/site-data'
import { ServiceIcon } from './service-icon'
import { Reveal } from './reveal'

export function Highlights() {
  const { tr } = useLanguage()
  return (
    <section className="relative border-b border-border bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-4 py-8 sm:gap-5 lg:grid-cols-4 lg:py-10">
        {highlights.map((h, i) => (
          <Reveal
            key={h.icon + i}
            delay={i * 90}
            className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-background p-5 text-center transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-accent/10"
          >
            <span className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <ServiceIcon name={h.icon} className="size-7" />
            </span>
            <span className="text-sm font-semibold text-foreground sm:text-base text-balance">
              {tr(h.label)}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
