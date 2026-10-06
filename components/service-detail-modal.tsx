'use client'

import { useEffect, useState } from 'react'
import { X, MessageCircle, Phone, Sparkles, ShieldCheck, HeartHandshake, CheckCircle2, ChevronRight } from 'lucide-react'
import { useLanguage } from './language-provider'
import { allPujaBenefitsData, type PujaBenefitItem } from '@/lib/puja-benefits-data'
import { contact } from '@/lib/site-data'

interface ServiceDetailModalProps {
  serviceId: string | null
  onClose: () => void
}

export function ServiceDetailModal({ serviceId, onClose }: ServiceDetailModalProps) {
  const { lang, tr } = useLanguage()
  const [activeTab, setActiveTab] = useState<'benefits' | 'table' | 'kashi'>('benefits')

  const serviceData: PujaBenefitItem | undefined = serviceId ? allPujaBenefitsData[serviceId] : undefined

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    if (serviceId) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [serviceId, onClose])

  if (!serviceId || !serviceData) return null

  const isHindi = lang === 'hi'

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-accent/40 bg-card text-card-foreground shadow-2xl shadow-primary/20">
        {/* Header */}
        <div className="relative border-b border-border bg-gradient-to-r from-maroon-deep via-maroon to-maroon-deep px-6 py-6 text-cream">
          <button
            onClick={onClose}
            aria-label={isHindi ? 'बंद करें' : 'Close modal'}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-cream transition hover:bg-white/20 hover:text-white"
          >
            <X className="size-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
            <Sparkles className="size-4" />
            <span>{isHindi ? 'विस्तृत महत्व एवं लाभ' : 'Detailed Significance & Benefits'}</span>
          </div>

          <h2 id="service-modal-title" className="mt-1 font-display text-2xl font-bold text-accent sm:text-3xl">
            {tr(serviceData.name)}
          </h2>

          <p className="mt-1.5 text-sm text-cream/85 sm:text-base">
            <strong className="text-accent">{isHindi ? 'मुख्य देव:' : 'Main Deity:'} </strong>
            {tr(serviceData.mainDeity)}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-border bg-muted/40 px-6">
          <button
            onClick={() => setActiveTab('benefits')}
            className={`border-b-2 px-4 py-3 text-sm font-semibold transition ${
              activeTab === 'benefits'
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            {isHindi ? 'विस्तृत लाभ' : 'Detailed Benefits'}
          </button>
          <button
            onClick={() => setActiveTab('table')}
            className={`border-b-2 px-4 py-3 text-sm font-semibold transition ${
              activeTab === 'table'
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            {isHindi ? 'लाभ तालिका' : 'Benefits Table'}
          </button>
          <button
            onClick={() => setActiveTab('kashi')}
            className={`border-b-2 px-4 py-3 text-sm font-semibold transition ${
              activeTab === 'kashi'
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            {isHindi ? 'काशी के ब्राह्मण क्यों?' : 'Why Kashi Brahmins?'}
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 text-foreground">
          {activeTab === 'benefits' && (
            <div className="space-y-6">
              {/* Scriptural & Traditional Reason */}
              <div className="grid gap-4 rounded-2xl border border-accent/20 bg-accent/5 p-4 sm:grid-cols-2">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary">
                    {isHindi ? 'धार्मिक उद्देश्य' : 'Religious Purpose'}
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {tr(serviceData.religiousPurpose)}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary">
                    {isHindi ? 'पारंपरिक महत्व' : 'Traditional Significance'}
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {tr(serviceData.traditionalReason)}
                  </p>
                </div>
              </div>

              {/* 7 Web Benefits */}
              <div>
                <h3 className="font-display text-lg font-bold text-primary">
                  {isHindi ? `${tr(serviceData.name)} के प्रमुख लाभ` : `Key Benefits of ${tr(serviceData.name)}`}
                </h3>
                <div className="mt-3 space-y-3">
                  {serviceData.websiteBenefits.map((item, idx) => (
                    <div key={idx} className="flex gap-3 rounded-xl border border-border/80 bg-muted/20 p-3.5 transition hover:border-accent/50">
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                      <div>
                        <h4 className="text-sm font-semibold text-foreground">{tr(item.title)}</h4>
                        <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          {tr(item.explanation)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specific Categories A-E */}
              <div className="rounded-2xl border border-border bg-card p-4">
                <h4 className="font-display text-base font-bold text-primary">
                  {isHindi ? 'पारंपरिक लाभ वर्गीकरण' : 'Traditional Benefit Classifications'}
                </h4>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl bg-muted/40 p-3">
                    <span className="text-xs font-bold uppercase text-primary">
                      {isHindi ? 'A. आध्यात्मिक लाभ' : 'A. Spiritual Benefits'}
                    </span>
                    <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-muted-foreground">
                      {serviceData.categories.spiritual.map((pt, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-primary">•</span>
                          <span>{tr(pt)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl bg-muted/40 p-3">
                    <span className="text-xs font-bold uppercase text-primary">
                      {isHindi ? 'B. धार्मिक लाभ' : 'B. Religious Benefits'}
                    </span>
                    <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-muted-foreground">
                      {serviceData.categories.religious.map((pt, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-primary">•</span>
                          <span>{tr(pt)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl bg-muted/40 p-3">
                    <span className="text-xs font-bold uppercase text-primary">
                      {isHindi ? 'C. पारिवारिक एवं गृह लाभ' : 'C. Family & Home Benefits'}
                    </span>
                    <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-muted-foreground">
                      {serviceData.categories.family.map((pt, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-primary">•</span>
                          <span>{tr(pt)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl bg-muted/40 p-3">
                    <span className="text-xs font-bold uppercase text-primary">
                      {isHindi ? 'D. व्यक्तिगत लाभ' : 'D. Personal Benefits'}
                    </span>
                    <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-muted-foreground">
                      {serviceData.categories.personal.map((pt, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-primary">•</span>
                          <span>{tr(pt)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {serviceData.categories.specificPurpose && serviceData.categories.specificPurpose.length > 0 && (
                    <div className="rounded-xl bg-muted/40 p-3 sm:col-span-2">
                      <span className="text-xs font-bold uppercase text-primary">
                        {isHindi ? 'E. विशिष्ट उद्देश्य एवं संकल्प' : 'E. Specific Purpose & Sankalp'}
                      </span>
                      <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-muted-foreground">
                        {serviceData.categories.specificPurpose.map((pt, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-primary">•</span>
                            <span>{tr(pt)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'table' && (
            <div className="space-y-4">
              <p className="text-xs text-muted-foreground sm:text-sm">
                {isHindi
                  ? 'सनातन वैदिक परंपरा के अनुसार इस सेवा के पारंपरिक महत्व की तालिका:'
                  : 'Traditional significance matrix for this ritual according to Vedic tradition:'}
              </p>

              <div className="overflow-x-auto rounded-2xl border border-border">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="border-b border-border bg-muted/70 text-xs font-bold uppercase text-primary">
                    <tr>
                      <th className="px-4 py-3 sm:px-6">{isHindi ? 'लाभ' : 'Benefit'}</th>
                      <th className="px-4 py-3 sm:px-6">{isHindi ? 'पारंपरिक महत्व' : 'Traditional Significance'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {serviceData.tableRows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-muted/30">
                        <td className="whitespace-nowrap px-4 py-3.5 font-semibold text-foreground sm:px-6">
                          {tr(row.benefit)}
                        </td>
                        <td className="px-4 py-3.5 text-muted-foreground sm:px-6">
                          {tr(row.significance)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'kashi' && (
            <div className="space-y-6">
              <div className="rounded-2xl border border-accent/40 bg-gradient-to-br from-card via-accent/5 to-card p-5">
                <div className="flex items-center gap-2.5 text-primary">
                  <ShieldCheck className="size-6 text-accent" />
                  <h3 className="font-display text-lg font-bold">
                    {isHindi ? 'इस पूजा के लिए काशी के ब्राह्मणों को क्यों चुनें?' : 'Why Choose Kashi Brahmins for This Puja?'}
                  </h3>
                </div>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {isHindi
                    ? 'काशी (वाराणसी) अनादि काल से सनातन धर्म, वेद विद्या एवं कर्मकांड की पावन राजधानी रही है। काशी के विद्वान ब्राह्मणों द्वारा शास्त्रीय विधि-विधान, शुद्ध मंत्रोच्चार एवं पूर्ण संकल्प के साथ अनुष्ठान संपन्न कराया जाता है।'
                    : 'Kashi (Varanasi) is the timeless spiritual capital of Vedic knowledge and ritual traditions. Learned Brahmins of Kashi perform this ceremony with strict adherence to Shastric rites, precise Vedic pronunciation, and proper devotion.'}
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {serviceData.whyChooseKashiBrahmins.map((item, idx) => (
                  <div key={idx} className="flex gap-3 rounded-xl border border-border bg-muted/20 p-4">
                    <ChevronRight className="mt-0.5 size-4 shrink-0 text-accent" />
                    <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">{tr(item)}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer CTAs */}
        <div className="flex flex-col gap-3 border-t border-border bg-muted/40 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            {isHindi
              ? 'प्रत्येक अनुष्ठान वैदिक विधि-विधान एवं निष्ठापूर्वक संपन्न कराया जाता है।'
              : 'Each ritual is performed strictly adhering to Vedic traditions and devotion.'}
          </p>

          <div className="flex items-center gap-2.5">
            <a
              href={`${contact.whatsapp}?text=${encodeURIComponent(
                isHindi
                  ? `नमस्ते शास्त्री जी, मुझे "${tr(serviceData.name)}" के बारे में जानकारी एवं परामर्श चाहिए।`
                  : `Namaste Shastri Ji, I would like consultation and booking details for "${tr(serviceData.name)}".`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-accent px-4 py-2.5 text-xs font-bold text-maroon-deep shadow transition hover:bg-gold-soft sm:flex-initial sm:text-sm"
            >
              <MessageCircle className="size-4" />
              <span>{isHindi ? 'WhatsApp पर पूछें' : 'WhatsApp'}</span>
            </a>
            <a
              href={contact.tel}
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-border bg-card px-4 py-2.5 text-xs font-bold text-foreground transition hover:bg-muted sm:flex-initial sm:text-sm"
            >
              <Phone className="size-4 text-primary" />
              <span>{isHindi ? 'कॉल करें' : 'Call'}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
