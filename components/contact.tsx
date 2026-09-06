'use client'

import { useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { contact, services, t } from '@/lib/site-data'
import { useLanguage } from './language-provider'
import { SectionHeading } from './section-heading'
import { ServiceIcon } from './service-icon'
import { Reveal } from './reveal'

export function Contact() {
  const { tr, lang } = useLanguage()
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    place: '',
    service: '',
    dob: '',
    birthTime: '',
    message: '',
  })

  const isKundali = form.service === 'kundali'

  function handleServiceChange(serviceId: string) {
    setForm((f) => ({
      ...f,
      service: serviceId,
      ...(serviceId !== 'kundali' ? { dob: '', birthTime: '' } : {}),
    }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // Compose a WhatsApp message so the enquiry actually reaches the astrologer.
    const selectedServiceObj = services.find((s) => s.id === form.service)
    const serviceName = selectedServiceObj ? tr(selectedServiceObj.name) : form.service
    const lines = [
      `${tr(t.form.name)}: ${form.name}`,
      `${tr(t.form.phone)}: ${form.phone}`,
      form.place ? `${tr(t.form.place)}: ${form.place}` : '',
      serviceName ? `${tr(t.form.service)}: ${serviceName}` : '',
      isKundali && form.dob ? `${tr(t.form.dob)}: ${form.dob}` : '',
      isKundali && form.birthTime ? `${tr(t.form.birthTime)}: ${form.birthTime}` : '',
      form.message ? `${tr(t.form.message)}: ${form.message}` : '',
    ].filter(Boolean)
    const url = `${contact.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  const info = [
    { icon: 'phone', label: t.labels.phone, value: contact.phone, href: contact.tel },
    { icon: 'whatsapp', label: t.labels.whatsapp, value: contact.phone, href: contact.whatsapp },
    { icon: 'mail', label: t.labels.email, value: contact.email, href: contact.mailto },
    { icon: 'pin', label: t.labels.branches, value: tr(contact.branches) },
    { icon: 'map', label: t.labels.serviceArea, value: tr(t.indiaWide) },
  ]

  return (
    <section id="contact" className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading title={tr(t.contactHeading)} subtitle={tr(t.contactSub)} />

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          {/* Contact info */}
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col gap-3 rounded-2xl border border-accent/40 bg-maroon-deep p-6 text-maroon-foreground">
              {info.map((item) => {
                const content = (
                  <div className="flex items-center gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <ServiceIcon name={item.icon} className="size-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-widest text-cream/70">{tr(item.label)}</p>
                      <p className="truncate font-semibold text-cream">{item.value}</p>
                    </div>
                  </div>
                )
                return item.href ? (
                  <a
                    key={tr(item.label)}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="rounded-xl p-2 transition-colors hover:bg-maroon/60"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={tr(item.label)} className="p-2">
                    {content}
                  </div>
                )
              })}
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  id="contact-name"
                  label={tr(t.form.name)}
                  value={form.name}
                  onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                  required
                />
                <Field
                  id="contact-phone"
                  label={tr(t.form.phone)}
                  type="tel"
                  value={form.phone}
                  onChange={(v) => setForm((f) => ({ ...f, phone: v }))}
                  required
                />
                <Field
                  id="contact-place"
                  label={tr(t.form.place)}
                  value={form.place}
                  onChange={(v) => setForm((f) => ({ ...f, place: v }))}
                />
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-service" className="text-sm font-medium text-foreground">
                    {tr(t.form.service)}
                  </label>
                  <select
                    id="contact-service"
                    value={form.service}
                    onChange={(e) => handleServiceChange(e.target.value)}
                    className="h-11 rounded-lg border border-border bg-background px-3 text-foreground outline-none transition-colors focus:border-primary"
                  >
                    <option value="">—</option>
                    {services.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name[lang]}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Conditional Kundali fields */}
              <div
                className={`grid gap-4 transition-all duration-300 sm:grid-cols-2 ${
                  isKundali
                    ? 'mt-4 max-h-48 opacity-100'
                    : 'max-h-0 overflow-hidden opacity-0 pointer-events-none'
                }`}
              >
                <Field
                  id="contact-dob"
                  label={tr(t.form.dob)}
                  type="date"
                  value={form.dob}
                  onChange={(v) => setForm((f) => ({ ...f, dob: v }))}
                  required={isKundali}
                />
                <Field
                  id="contact-time"
                  label={tr(t.form.birthTime)}
                  type="time"
                  value={form.birthTime}
                  onChange={(v) => setForm((f) => ({ ...f, birthTime: v }))}
                  required={isKundali}
                />
              </div>

              <div className="mt-4 flex flex-col gap-1.5">
                <label htmlFor="contact-message" className="text-sm font-medium text-foreground">
                  {tr(t.form.message)}
                </label>
                <textarea
                  id="contact-message"
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  rows={4}
                  className="rounded-lg border border-border bg-background px-3 py-2 text-foreground outline-none transition-colors focus:border-primary"
                />
              </div>

              <button
                type="submit"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3 font-bold text-secondary-foreground shadow-lg shadow-secondary/25 transition-all hover:brightness-105"
              >
                <MessageCircle className="size-5" aria-hidden="true" />
                {tr(t.form.submit)}
              </button>

              {sent && (
                <p className="mt-4 rounded-lg border border-primary/40 bg-primary/10 px-4 py-3 text-center text-sm font-medium text-foreground">
                  {tr(t.form.success)}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({
  id,
  label,
  value,
  onChange,
  type = 'text',
  required,
}: {
  id?: string
  label: string
  value: string
  onChange: (v: string) => void
  type?: string
  required?: boolean
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-secondary"> *</span>}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-11 rounded-lg border border-border bg-background px-3 text-foreground outline-none transition-colors focus:border-primary"
      />
    </div>
  )
}
