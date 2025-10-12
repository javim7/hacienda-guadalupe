// src/components/AboutPage.jsx
import Head from 'next/head'
import SectionHeader from '@/components/SectionHeader'
import History from '@/features/about/History'
import Pillars from '@/features/about/Pillars'
import Team from '@/features/about/Team'
import Images from '@/features/about/Images'

export default function About() {
  return (
    <>
      <Head>
        <title>Sobre Nosotros - Hacienda Guadalupe</title>
        <meta name="description" content="Conoce más sobre Hacienda Guadalupe, nuestra tradición e innovación agrícola en Guatemala" />
      </Head>

      <SectionHeader title="SOBRE NOSOTROS" />
      
      <History />
      <Team />
      <Images />
    </>
  )
}
