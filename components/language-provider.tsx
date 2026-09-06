'use client'

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import type { Lang, Bilingual } from '@/lib/site-data'

type LanguageContextValue = {
  lang: Lang
  toggle: () => void
  setLang: (l: Lang) => void
  tr: (b: Bilingual) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('hi')

  const toggle = useCallback(() => {
    setLang((prev) => (prev === 'hi' ? 'en' : 'hi'))
  }, [])

  const tr = useCallback((b: Bilingual) => b[lang], [lang])

  return (
    <LanguageContext.Provider value={{ lang, toggle, setLang, tr }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
