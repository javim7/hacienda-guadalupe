// src/components/MangostanPage.jsx
import Head from 'next/head'
import SectionHeader from '@/components/SectionHeader'
import MangostanIntroduction from '@/features/cultivos/mangostan/MangostanIntroduction'
import MangostanCultivation from '@/features/cultivos/mangostan/MangostanCultivation'
import MangostanBiology from '@/features/cultivos/mangostan/MangostanBiology'
import MangostanExpertise from '@/features/cultivos/mangostan/MangostanExpertise'

export default function Mangostan() {
  return (
    <>
      <Head>
        <title>Mangostán - Hacienda Guadalupe</title>
        <meta name="description" content="Descubre nuestro cultivo de mangostán en Hacienda Guadalupe, una fruta exótica con múltiples beneficios para la salud" />
      </Head>

      <SectionHeader title="MANGOSTÁN" />
      
      <MangostanIntroduction />
      <MangostanCultivation />
      <MangostanBiology />
      <MangostanExpertise />
    </>
  )
}
