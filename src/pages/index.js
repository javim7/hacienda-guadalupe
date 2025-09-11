// src/pages/index.jsx
import Head from 'next/head'
import Hero from '@/features/home/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>Hacienda Guadalupe — Inicio</title>
      </Head>

      <Hero
        imageSrc="/images/hero.jpg"
        title={'Pasture Raised Raw Milk\nStraight from the Farm'}
        ctaText="About Our Herdshare"
        ctaHref="/about"
      />

      {/* resto de la página... */}
      <main className="py-12">
        {/* contenido */}
      </main>
    </>
  )
}
