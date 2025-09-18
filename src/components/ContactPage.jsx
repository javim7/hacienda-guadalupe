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
    </>
  )
}