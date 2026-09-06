'use client'

import Image from 'next/image'
import { useLanguage } from './language-provider'
import { about, brand, t } from '@/lib/site-data'
import { SectionHeading } from './section-heading'
import { ServiceIcon } from './service-icon'
import { Reveal } from './reveal'
import { GuruSection } from './guru-section'

export function About() {
  const { tr, lang } = useLanguage()

  return (
    <section id="about" className="relative overflow-hidden py-16 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-mandala opacity-[0.05]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4">
        <SectionHeading title={tr(t.aboutHeading)} />

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          {/* Portrait card */}
          <Reveal className="mx-auto w-full max-w-sm">
            <div className="relative rounded-3xl border border-accent/40 bg-maroon-deep p-3 shadow-xl">
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src={brand.portrait || '/placeholder.svg'}
                  alt={tr(brand.expert)}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 24rem, 28rem"
                />
              </div>
              <div className="mt-4 pb-2 text-center">
                <p className="font-display text-xl text-accent">{tr(brand.expert)}</p>
                <p className="mt-1 text-sm text-cream/75">{tr(brand.title)}</p>
              </div>
            </div>
          </Reveal>

          {/* Content */}
          <div>
            <Reveal>
              <div className="space-y-5">
                {about.paragraphs[lang].map((para, i) => (
                  <p key={i} className="text-base leading-relaxed text-foreground/85 sm:text-lg text-pretty">
                    {para}
                  </p>
                ))}
              </div>
            </Reveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {about.facts.map((f, i) => (
                <Reveal
                  key={f.icon}
                  delay={i * 80}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:border-accent hover:shadow-md"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary/15 text-secondary">
                    <ServiceIcon name={f.icon} className="size-6" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {tr(f.label)}
                    </p>
                    <p className="mt-1 font-semibold text-foreground text-pretty">{tr(f.value)}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Guru Ji section */}
        <GuruSection />
      </div>
    </section>
  )
}
