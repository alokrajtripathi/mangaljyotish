'use client'

import { MessageCircle, Phone } from 'lucide-react'
import { contact } from '@/lib/site-data'

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={contact.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="flex size-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 transition-transform hover:scale-110"
        style={{ width: '3.25rem', height: '3.25rem' }}
      >
        <MessageCircle className="size-6" aria-hidden="true" />
      </a>
      <a
        href={contact.tel}
        aria-label="Call"
        className="flex items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-lg shadow-black/40 transition-transform hover:scale-110"
        style={{ width: '3.25rem', height: '3.25rem' }}
      >
        <Phone className="size-6" aria-hidden="true" />
      </a>
    </div>
  )
}
