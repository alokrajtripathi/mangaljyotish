'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Menu, X, Languages } from 'lucide-react'
import { useLanguage } from './language-provider'
import { brand, nav, t } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function Navbar() {
  const { tr, lang, toggle } = useLanguage()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    setOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-maroon-deep/95 shadow-lg shadow-maroon-deep/20 backdrop-blur-md'
          : 'bg-maroon-deep/80 backdrop-blur-sm',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5">
        <button
          onClick={() => scrollTo('home')}
          className="flex items-center gap-3 text-left"
          aria-label={brand.name.hi}
        >
          <span className="relative block size-12 shrink-0 overflow-hidden rounded-full ring-2 ring-accent/60 sm:size-14">
            <Image
              src={brand.logo || '/placeholder.svg'}
              alt={tr(brand.name)}
              fill
              className="object-cover"
              sizes="56px"
              priority
            />
          </span>
          <span className="hidden flex-col leading-tight md:flex">
            <span className="font-display text-lg text-accent">{tr(brand.name)}</span>
            <span className="text-xs tracking-wide text-cream/70">{tr(brand.title)}</span>
          </span>
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="rounded-md px-3 py-2 text-sm font-medium text-cream/85 transition-colors hover:bg-maroon/60 hover:text-accent"
            >
              {tr(item.label)}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            className="flex items-center gap-1.5 rounded-full border border-accent/40 px-3 py-1.5 text-xs font-semibold text-accent transition-colors hover:bg-accent hover:text-maroon-deep"
            aria-label="Toggle language"
          >
            <Languages className="size-4" aria-hidden="true" />
            {lang === 'hi' ? 'EN' : 'हिं'}
          </button>

          <button
            onClick={() => scrollTo('contact')}
            className="hidden rounded-full bg-accent px-5 py-2 text-sm font-bold text-maroon-deep shadow-md transition-all hover:bg-gold-soft hover:shadow-lg sm:block"
          >
            {tr(t.navCta)}
          </button>

          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-md p-2 text-cream lg:hidden"
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden border-t border-accent/20 bg-maroon-deep transition-[max-height,opacity] duration-300 lg:hidden',
          open ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3">
          {nav.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="rounded-md px-3 py-3 text-left text-base font-medium text-cream/90 transition-colors hover:bg-maroon/60 hover:text-accent"
            >
              {tr(item.label)}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contact')}
            className="mt-2 rounded-full bg-accent px-5 py-3 text-center text-base font-bold text-maroon-deep"
          >
            {tr(t.navCta)}
          </button>
        </nav>
      </div>
    </header>
  )
}
