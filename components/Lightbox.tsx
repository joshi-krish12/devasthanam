'use client'

import { useEffect, useCallback } from 'react'
import Image, { StaticImageData } from 'next/image'

interface LightboxProps {
  images: { src: string | StaticImageData; alt: string }[]
  index: number
  onClose: () => void
  onNav: (index: number) => void
}

export default function Lightbox({ images, index, onClose, onNav }: LightboxProps) {
  const total = images.length

  const prev = useCallback(() => onNav((index - 1 + total) % total), [index, total, onNav])
  const next = useCallback(() => onNav((index + 1) % total), [index, total, onNav])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose, prev, next])

  const current = images[index]

  return (
    <div className="lightbox-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      {/* Close */}
      <button className="lightbox-close" onClick={onClose} aria-label="Close">
        <i className="fas fa-times"></i>
      </button>

      {/* Counter */}
      <div className="lightbox-counter">{index + 1} / {total}</div>

      {/* Prev */}
      {total > 1 && (
        <button
          className="lightbox-nav lightbox-nav-prev"
          onClick={(e) => { e.stopPropagation(); prev() }}
          aria-label="Previous image"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
      )}

      {/* Image */}
      <div className="lightbox-img-wrap" onClick={(e) => e.stopPropagation()}>
        <Image
          src={current.src}
          alt={current.alt}
          fill
          style={{ objectFit: 'contain' }}
          quality={90}
          unoptimized={typeof current.src === 'string'}
        />
      </div>

      {/* Next */}
      {total > 1 && (
        <button
          className="lightbox-nav lightbox-nav-next"
          onClick={(e) => { e.stopPropagation(); next() }}
          aria-label="Next image"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      )}
    </div>
  )
}
