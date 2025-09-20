// src/components/HulePage.jsx
import Head from 'next/head'
import SectionHeader from '@/components/SectionHeader'
import HuleFarm from '@/features/cultivos/hule/HuleFarm'
import HuleHistory from '@/features/cultivos/hule/HuleHistory'
import HuleProducts from '@/features/cultivos/hule/HuleProducts'
import HuleTechniques from '@/features/cultivos/hule/HuleTechniques'

export default function Hule() {
  return (
    <>
      <Head>
        <title>Hule Natural - Hacienda Guadalupe</title>
        <meta name="description" content="Conoce nuestro cultivo de hule natural en Hacienda Guadalupe, producido de manera sostenible y responsable" />
      </Head>

      <SectionHeader title="HULE" />
      
      <HuleFarm />
      <HuleHistory />
      <HuleProducts />
      <HuleTechniques />
    </>
  )
}
