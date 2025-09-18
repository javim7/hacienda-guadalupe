// src/components/CattlePage.jsx
import Head from 'next/head'
import SectionHeader from '@/components/SectionHeader'
import Introduction from '@/features/cattle/Introduction'
import GyrLechero from '@/features/cattle/GyrLechero'
import PastoreoVoisin from '@/features/cattle/PastoreoVoisin'

export default function Cattle() {
  return (
    <>
      <Head>
        <title>Ganado - Hacienda Guadalupe</title>
        <meta name="description" content="Conoce nuestro ganado Gyr lechero y Boran en Hacienda Guadalupe, con más de 30 años de experiencia en genética y pastoreo racional Voisin" />
      </Head>

      <SectionHeader title="GANADO" />
      
      <Introduction />
      <GyrLechero />
      <PastoreoVoisin />
    </>
  )
}