// src/features/home/Hero.jsx
'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CAROUSEL_IMAGES = [
  '/images/Car/vacas.JPG',
  '/images/Car/hero.jpg',
  '/images/Car/huleCar.png',
  '/images/Car/huleCar2.HEIC'
]

const TRANSITION_DURATION = 5000 // 5 seconds

export default function Hero({
  title = 'Hacienda Guadalupe\nTradición e innovación agrícola en Guatemala',
  ctaText = 'Conoce Más Sobre Nosotros',
  ctaHref = '/about'
}) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % CAROUSEL_IMAGES.length)
    }, TRANSITION_DURATION)

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? CAROUSEL_IMAGES.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % CAROUSEL_IMAGES.length)
  }

  return (
    <section className="w-full">
      {/* IMAGE CAROUSEL: full-bleed + eliminar línea blanca con -mb-px */}
      <div className="w-full relative h-[38vh] sm:h-[44vh] md:h-[50vh] lg:h-[54vh] -mb-px overflow-hidden group">
        {CAROUSEL_IMAGES.map((src, index) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: index === currentIndex ? 1 : 0,
              zIndex: index === currentIndex ? 1 : 0
            }}
          >
            <Image
              src={src}
              alt={`Hacienda Guadalupe - Imagen ${index + 1}`}
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority={index === 0}
            />
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-2 md:p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
          aria-label="Imagen anterior"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-2 md:p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
          aria-label="Imagen siguiente"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {CAROUSEL_IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all rounded-full ${
                index === currentIndex 
                  ? 'w-8 h-3 bg-white' 
                  : 'w-3 h-3 bg-white/60 hover:bg-white/80'
              }`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* CTA BAND: menos alto y color rojo claro vía variable */}
      <div
        className="w-full py-12 md:py-16"
        style={{ backgroundColor: 'var(--brand-corinto-light)', color: 'var(--brand-contrast)' }}
      >
        <div className="mx-auto w-full px-6 md:px-8 lg:px-16 max-w-[1400px] text-center">
          <h1 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight md:leading-snug mb-4">
            {title.split('\n').map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h1>
          
          <Link
            href={ctaHref}
            className="inline-block bg-white text-[var(--brand-corinto)] px-5 py-2 rounded-md font-medium shadow-sm hover:shadow-md transition"
            aria-label={ctaText}
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  )
}
