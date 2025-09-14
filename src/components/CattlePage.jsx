// src/pages/about.js
import Head from 'next/head'
import SectionHeader from '@/components/SectionHeader'

export default function Cattle() {
  return (
    <>
      <Head>
        <title>Ganado - Hacienda Guadalupe</title>
        <meta name="description" content="Conoce más sobre Hacienda Guadalupe, nuestra tradición e innovación agrícola en Guatemala" />
      </Head>

      <SectionHeader title="GANADO" />
      
      {/* Additional About Us content will go here */}
      <section className="w-full py-16">
        <div className="mx-auto w-full px-6 md:px-8 lg:px-16 max-w-[1400px]">
          <p className="text-center text-lg text-gray-600">
            Contenido adicional sobre el ganado se agregará aquí...
          </p>
        </div>
      </section>
    </>
  )
}
