'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { useLanguage } from './language-provider'
import { faqs, t } from '@/lib/site-data'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

export function FAQSection() {
  const { tr, lang } = useLanguage()
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  const toggle = (idx: number) => {
    setOpenIdx((cur) => (cur === idx ? null : idx))
  }

  return (
    <section id="faq" className="relative bg-muted/30 py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading
          title={tr(t.faqHeading)}
          subtitle={tr(t.faqSub)}
        />

        <div className="mt-12 space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx
            return (
              <Reveal
                key={idx}
                delay={idx * 60}
                className="overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-accent/40 hover:shadow-md"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  id={`faq-question-${idx}`}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left transition sm:p-6"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <HelpCircle className="size-4" />
                    </span>
                    <h3 className="font-display text-base font-semibold text-foreground sm:text-lg">
                      {tr(faq.q)}
                    </h3>
                  </div>
                  <span
                    className={`flex size-8 shrink-0 items-center justify-center rounded-full bg-muted transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-accent text-maroon-deep' : 'text-muted-foreground'
                    }`}
                  >
                    <ChevronDown className="size-4" />
                  </span>
                </button>

                <div
                  id={`faq-answer-${idx}`}
                  role="region"
                  aria-labelledby={`faq-question-${idx}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-border/60 bg-muted/10 px-6 py-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {tr(faq.a)}
                    </p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
