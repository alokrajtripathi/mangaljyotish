'use client'

import Image from 'next/image'
import { useLanguage } from './language-provider'
import { guru } from '@/lib/site-data'
import { Reveal } from './reveal'

export function GuruSection() {
  const { tr } = useLanguage()

  return (
    <Reveal className="mx-auto mt-16 w-full max-w-4xl">
      <div className="relative overflow-hidden rounded-3xl border-2 border-accent/40 bg-maroon-deep p-6 sm:p-10 shadow-2xl text-center md:text-left">
        {/* Sacred subtle watermark backdrop */}
        <div className="pointer-events-none absolute inset-0 bg-mandala opacity-[0.07]" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-accent/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative flex flex-col items-center gap-8 md:flex-row md:items-center md:gap-10">
          {/* Guru Ji's Large Portrait Image */}
          <div className="relative aspect-[3/4] w-64 shrink-0 overflow-hidden rounded-2xl border-2 border-accent/50 bg-maroon shadow-2xl ring-4 ring-accent/20 sm:w-72 md:w-80">
            <Image
              src={guru.image || '/images/guru-ji.jpeg'}
              alt={tr(guru.name)}
              fill
              className="object-cover object-top"
              sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, 320px"
              priority
            />
          </div>

          {/* Reverence Content */}
          <div className="min-w-0 flex-1">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/15 px-4 py-1.5 text-xs font-semibold tracking-widest text-accent">
              {tr(guru.tagline)}
            </span>

            <p className="mt-3 text-sm font-semibold tracking-wide text-cream/75 sm:text-base">
              {tr(guru.title)}
            </p>

            <h3 className="mt-2 font-display text-2xl font-bold text-accent sm:text-3xl lg:text-4xl">
              {tr(guru.name)}
            </h3>

            <div className="mx-auto my-4 h-0.5 w-20 rounded-full bg-accent/60 md:mx-0" />

            <p className="text-base leading-relaxed text-cream/90 text-pretty sm:text-lg">
              {tr(guru.desc)}
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  )
}
