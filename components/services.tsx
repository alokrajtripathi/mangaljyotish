'use client'

import { useLanguage } from './language-provider'
import { services, t } from '@/lib/site-data'
import { SectionHeading } from './section-heading'
import { ServiceIcon } from './service-icon'
import { Reveal } from './reveal'

export function Services() {
  const { tr } = useLanguage()

  return (
    <section id="services" className="relative bg-muted/40 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading title={tr(t.servicesHeading)} />

        <Reveal className="mx-auto mt-6 max-w-3xl">
          <p className="rounded-2xl border border-accent/40 bg-card px-6 py-5 text-center text-base font-medium leading-relaxed text-foreground/90 text-pretty sm:text-lg">
            {tr(t.servicesIntro)}
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal
              as="li"
              key={tr(s.name) + i}
              delay={(i % 3) * 70}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-xl hover:shadow-primary/5"
            >
              <span
                className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-secondary/10 transition-transform duration-500 group-hover:scale-150"
                aria-hidden="true"
              />
              <span className="relative flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <ServiceIcon name={s.icon} className="size-6" />
              </span>
              <h3 className="relative mt-4 font-display text-xl text-primary text-balance">
                {tr(s.name)}
              </h3>
              {s.desc ? (
                <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {tr(s.desc)}
                </p>
              ) : null}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
