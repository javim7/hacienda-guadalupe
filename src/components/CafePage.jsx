// src/components/CafePage.jsx
import Head from 'next/head'
import SectionHeader from '@/components/SectionHeader'
import CafeTradition from '@/features/cultivos/cafe/CafeTradition'
import CafeToday from '@/features/cultivos/cafe/CafeToday'
import CafeNutrition from '@/features/cultivos/cafe/CafeNutrition'
import CafeSystem from '@/features/cultivos/cafe/CafeSystem'

export default function Cafe() {
  return (
    <>
      <Head>
        <title>Café Robusta - Hacienda Guadalupe</title>
        <meta name="description" content="Conoce nuestro cultivo de café robusta en Hacienda Guadalupe, con técnicas intensivas y modernas" />
      </Head>

      <SectionHeader title="CAFÉ" />
      
      <CafeTradition />
      <CafeToday />
      <CafeNutrition />
      <CafeSystem />
    </>
  )
}
