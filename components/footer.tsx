'use client'

import Image from 'next/image'
import { brand, contact, nav, t } from '@/lib/site-data'
import { useLanguage } from '@/components/language-provider'
import { ServiceIcon } from '@/components/service-icon'

export function Footer() {
  const { tr, lang } = useLanguage()

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-border/60 bg-card">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="relative h-14 w-14 overflow-hidden rounded-full ring-1 ring-primary/50">
                <Image src={brand.logo || "/placeholder.svg"} alt={tr(brand.name)} fill className="object-cover" />
              </span>
              <div>
                <p className="font-display text-lg leading-tight text-foreground">{tr(brand.name)}</p>
                <p className="text-sm text-primary">{tr(brand.expert)}</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{tr(t.footer.tagline)}</p>
          </div>

          {/* Quick links */}
          <div className="md:justify-self-center">
            <h4 className="font-display text-lg text-foreground">{tr(t.footer.quickLinks)}</h4>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label[lang]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg text-foreground">{tr(t.contactHeading)}</h4>
            <div className="mt-4 space-y-3">
              <a href={contact.tel} className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary">
                <ServiceIcon name="phone" className="h-4 w-4 text-primary" />
                {contact.phone}
              </a>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <ServiceIcon name="whatsapp" className="h-4 w-4 text-primary" />
                WhatsApp
              </a>
              <a
                href={contact.mailto}
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <ServiceIcon name="mail" className="h-4 w-4 text-primary" />
                {contact.email}
              </a>
              <p className="flex items-center gap-3 text-sm text-muted-foreground">
                <ServiceIcon name="pin" className="h-4 w-4 text-primary" />
                {contact.branches.join(' • ')}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border/60 pt-6 text-center">
          <p className="text-xs text-muted-foreground">{tr(t.footer.rights)}</p>
        </div>
      </div>
    </footer>
  )
}
