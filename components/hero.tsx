'use client'

import Image from 'next/image'
import { MessageCircle, Phone, MapPin } from 'lucide-react'
import { useLanguage } from './language-provider'
import { brand, contact, t } from '@/lib/site-data'

export function Hero() {
  const { tr } = useLanguage()

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-maroon-deep text-maroon-foreground"
    >
      {/* decorative layers */}
      <div className="pointer-events-none absolute inset-0 bg-mandala opacity-[0.15]" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          background:
            'radial-gradient(120% 90% at 80% 0%, oklch(0.7 0.16 52 / 0.28), transparent 55%), radial-gradient(90% 80% at 10% 100%, oklch(0.37 0.13 22 / 0.5), transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:gap-8 md:py-20 lg:py-24">
        {/* Text */}
        <div className="order-2 text-center md:order-1 md:text-left">
          <span className="reveal reveal-in inline-flex items-center gap-2 rounded-full border border-accent/40 bg-maroon/40 px-4 py-1.5 text-sm font-medium text-accent">
            <span aria-hidden="true">{'\u0950'}</span>
            {tr(brand.title)}
          </span>

          <h1 className="reveal reveal-in mt-5 font-display text-4xl leading-[1.15] text-balance sm:text-5xl lg:text-6xl">
            <span className="text-gold-gradient">{tr(brand.name)}</span>
          </h1>

          <p className="reveal reveal-in mt-4 text-lg font-medium text-cream/90 text-pretty sm:text-xl">
            {tr(t.hero.sub)}
          </p>

          <p className="reveal reveal-in mx-auto mt-4 max-w-xl text-base leading-relaxed text-cream/75 text-pretty md:mx-0">
            {tr(t.hero.intro)}
          </p>

          <div className="reveal reveal-in mt-6 flex flex-col items-center gap-3 sm:flex-row md:items-start">
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3 font-bold text-secondary-foreground shadow-lg shadow-secondary/25 transition-all hover:brightness-105 sm:w-auto"
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              {tr(t.hero.whatsapp)}
            </a>
            <a
              href={contact.tel}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-accent/60 bg-transparent px-6 py-3 font-bold text-accent transition-all hover:bg-accent hover:text-maroon-deep sm:w-auto"
            >
              <Phone className="size-5" aria-hidden="true" />
              {tr(t.hero.call)}
            </a>
          </div>

          <div className="reveal reveal-in mt-6 inline-flex items-center gap-2 rounded-lg bg-maroon/40 px-4 py-2 text-sm font-medium text-accent">
            <MapPin className="size-4" aria-hidden="true" />
            {tr(t.indiaWide)}
          </div>
        </div>

        {/* Portrait */}
        <div className="order-1 flex justify-center md:order-2">
          <div className="relative">
            <div
              className="absolute -inset-6 animate-glow-pulse rounded-full"
              style={{
                background:
                  'radial-gradient(circle, oklch(0.79 0.125 82 / 0.55), transparent 65%)',
              }}
              aria-hidden="true"
            />
            <div className="relative size-64 overflow-hidden rounded-full border-4 border-accent shadow-2xl shadow-black/40 sm:size-80 lg:size-96">
              <Image
                src={brand.portrait || '/placeholder.svg'}
                alt={tr(brand.expert)}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 16rem, (max-width: 1024px) 20rem, 24rem"
                priority
              />
            </div>
            <div className="absolute -bottom-3 left-1/2 w-max max-w-[90%] -translate-x-1/2 rounded-full border border-accent/50 bg-maroon-deep/95 px-5 py-2 text-center shadow-lg backdrop-blur">
              <p className="font-display text-base text-accent sm:text-lg">{tr(brand.expert)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
