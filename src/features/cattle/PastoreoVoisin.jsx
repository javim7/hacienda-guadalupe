// src/features/cattle/PastoreoVoisin.jsx
import { useState, useRef } from 'react'
import { useTranslations } from 'next-intl'

export default function PastoreoVoisin() {
  const t = useTranslations('cattle.pastoreo')
  const tc = useTranslations('common')
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)

  const handlePlayClick = () => {
    const el = videoRef.current
    if (!el) return
    el.play()
  }

  return (
    <section className="w-full -mb-px bg-white">
      <div className="w-full py-16 md:py-20">
        <div className="mx-auto w-full px-6 md:px-8 lg:px-16 max-w-[1000px] text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-8 text-gray-900">
            {t('title')}
          </h2>

          <div className="text-base md:text-lg text-gray-800 leading-relaxed">
            <p className="mb-6">{t('text1')}</p>
            <p className="mb-6">{t('text2')}</p>
            <p className="mb-6">{t('text3')}</p>
            <p className="mb-8">{t('text4')}</p>
          </div>

          <div className="w-full max-w-4xl mx-auto">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg bg-gray-900">
              <video
                ref={videoRef}
                id="voisin-video"
                className="w-full h-full object-cover"
                controls={isPlaying}
                preload="metadata"
                poster="/images/Ganado/ganadoPoster2.jpeg"
                title={t('videoTitle')}
                playsInline
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src="https://media.hacienda-guadalupe.com/videos/voison2.mp4" type="video/mp4" />
                {tc('videoNotSupported')}
              </video>

              {!isPlaying && (
                <button
                  type="button"
                  aria-label={tc('playVideo')}
                  onClick={handlePlayClick}
                  className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors cursor-pointer"
                >
                  <span className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-xl transition-transform hover:scale-110">
                    <svg className="w-8 h-8 md:w-10 md:h-10 ml-1 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </button>
              )}
            </div>
            <p className="text-sm text-gray-600 mt-4 italic">{t('videoCaption')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
