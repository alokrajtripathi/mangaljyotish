import { LanguageProvider } from '@/components/language-provider'
import { AnnouncementBar } from '@/components/announcement-bar'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Highlights } from '@/components/highlights'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Astrology } from '@/components/astrology'
import { Gallery } from '@/components/gallery'
import { Branches } from '@/components/branches'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { FloatingActions } from '@/components/floating-actions'

export default function Page() {
  return (
    <LanguageProvider>
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <About />
        <Services />
        <Astrology />
        <Gallery />
        <Branches />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </LanguageProvider>
  )
}
