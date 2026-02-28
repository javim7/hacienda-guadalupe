// src/components/ContactPage.jsx
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import SEOHead from '@/components/SEOHead'
import SectionHeader from '@/components/SectionHeader'
import ContactForm from '@/features/contact/ContactForm'

export default function Contact() {
  const t = useTranslations()

  return (
    <>
      <SEOHead title={t('meta.contact.title')} description={t('meta.contact.description')} />
      <SectionHeader title={t('contact.sectionHeader')} />
      <ContactForm />
      
      <section className="w-full -mb-px">
        <div className="w-full relative h-[25vh] sm:h-[30vh] md:h-[35vh]">
          <Image
            src="/images/Otras/huleras.jpg"
            alt={t('contact.heroImageAlt')}
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 60%' }}
            priority
          />
        </div>
      </section>
    </>
  )
}