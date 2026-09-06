'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { X, ZoomIn } from 'lucide-react'
import { useLanguage } from './language-provider'
import { gallery, t } from '@/lib/site-data'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

type GalleryItem = (typeof gallery)[number]

export function Gallery() {
  const { tr } = useLanguage()
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setSelectedImage(null)
      }
    }
    if (selectedImage) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedImage])

  return (
    <section id="gallery" className="relative overflow-hidden py-16 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-mandala opacity-[0.04]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4">
        <SectionHeading title={tr(t.galleryHeading)} subtitle={tr(t.galleryIntro)} />

        <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {gallery.map((item, i) => (
            <Reveal
              key={item.src}
              delay={(i % 3) * 80}
              className="mb-6 break-inside-avoid"
            >
              <button
                type="button"
                onClick={() => setSelectedImage(item)}
                className="group relative block w-full overflow-hidden rounded-2xl border border-border bg-card text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <div
                  className={`relative w-full overflow-hidden bg-muted ${
                    item.orientation === 'portrait' ? 'aspect-[3/4]' : 'aspect-[4/3]'
                  }`}
                >
                  <Image
                    src={item.src}
                    alt={tr(item.alt)}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                    <span className="flex size-11 items-center justify-center rounded-full bg-accent/90 text-maroon-deep shadow-lg">
                      <ZoomIn className="size-5" aria-hidden="true" />
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium leading-snug text-foreground/90 text-pretty">
                    {tr(item.alt)}
                  </p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={tr(selectedImage.alt)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="fixed right-4 top-4 z-50 rounded-full bg-maroon-deep/80 p-2.5 text-cream shadow-lg backdrop-blur-md transition-colors hover:bg-accent hover:text-maroon-deep"
            aria-label="Close lightbox"
          >
            <X className="size-6" aria-hidden="true" />
          </button>

          <div
            className="relative flex max-h-[90vh] max-w-4xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`relative overflow-hidden rounded-2xl border border-accent/40 bg-card shadow-2xl ${
                selectedImage.orientation === 'portrait'
                  ? 'h-[65vh] w-[min(85vw,480px)]'
                  : 'h-[50vh] sm:h-[65vh] w-[min(90vw,780px)]'
              }`}
            >
              <Image
                src={selectedImage.src}
                alt={tr(selectedImage.alt)}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 90vw, 800px"
                priority
              />
            </div>
            <p className="mt-4 max-w-xl text-center text-sm font-medium text-cream sm:text-base">
              {tr(selectedImage.alt)}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
