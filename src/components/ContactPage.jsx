// src/components/ContactPage.jsx
import Head from 'next/head'
import SectionHeader from '@/components/SectionHeader'
import ContactForm from '@/features/contact/ContactForm'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contacto - Hacienda Guadalupe</title>
        <meta name="description" content="Contáctanos para conocer más sobre nuestros productos agrícolas y ganaderos en Hacienda Guadalupe" />
      </Head>

      <SectionHeader title="CONTÁCTANOS" />
      
      <ContactForm />
      
      {/* Decorative Hero Image */}
      <section className="w-full -mb-px">
        <div className="w-full relative h-[25vh] sm:h-[30vh] md:h-[35vh]">
          <video
            src="/videos/hulera3.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
        </div>
      </section>
    </>
  )
}