// src/pages/index.js
import Head from 'next/head'
import HomePage from '@/components/HomePage'

export default function Home() {
  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>Hacienda Guadalupe - Tradición e Innovación Agrícola y Ganadera en Guatemala</title>
        <meta name="description" content="Hacienda Guadalupe, fundada en 1958, combina tradición agrícola y ganadera familiar con innovación sostenible. Cultivamos hule, café y mangostán, y criamos ganado Gyr lechero con pastoreo racional Voisin en Guatemala." />
        <meta name="keywords" content="hacienda guadalupe, guatemala, agricultura sostenible, ganado gyr, pastoreo voisin, cultivo hule, café robusta, mangostán, agricultura regenerativa" />
        <meta name="author" content="Hacienda Guadalupe" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="es" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://hacienda-guadalupe.com" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hacienda Guadalupe - Tradición e Innovación Agrícola y Ganadera en Guatemala" />
        <meta property="og:description" content="Hacienda Guadalupe, fundada en 1958, combina tradición agrícola y ganadera familiar con innovación sostenible. Cultivamos hule, café y mangostán, y criamos ganado Gyr lechero con pastoreo racional Voisin en Guatemala." />
        <meta property="og:image" content="https://hacienda-guadalupe.com/images/hero.jpg" />
        <meta property="og:image:alt" content="Hacienda Guadalupe - Vista panorámica de la hacienda" />
        <meta property="og:url" content="https://hacienda-guadalupe.com" />
        <meta property="og:site_name" content="Hacienda Guadalupe" />
        <meta property="og:locale" content="es_GT" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hacienda Guadalupe - Tradición e Innovación Agrícola y Ganadera en Guatemala" />
        <meta name="twitter:description" content="Hacienda Guadalupe, fundada en 1958, combina tradición agrícola y ganadera familiar con innovación sostenible. Cultivamos hule, café y mangostán, y criamos ganado Gyr lechero con pastoreo racional Voisin en Guatemala." />
        <meta name="twitter:image" content="https://hacienda-guadalupe.com/images/hero.jpg" />
        <meta name="twitter:image:alt" content="Hacienda Guadalupe - Vista panorámica de la hacienda" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#2d5016" />
        <meta name="msapplication-TileColor" content="#2d5016" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Geo Tags */}
        <meta name="geo.region" content="GT" />
        <meta name="geo.placename" content="Guatemala" />
        
        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Hacienda Guadalupe",
              "alternateName": "Hacienda Guadalupe Guatemala",
              "description": "Hacienda Guadalupe, fundada en 1958, combina tradición agrícola y ganadera familiar con innovación sostenible en Guatemala.",
              "url": "https://hacienda-guadalupe.com",
              "logo": "https://hacienda-guadalupe.com/images/logo.png",
              "image": "https://hacienda-guadalupe.com/images/hero.jpg",
              "foundingDate": "1958",
              "founder": {
                "@type": "Person",
                "name": "Roberto Mombiela de León"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "GT",
                "addressRegion": "Guatemala"
              },
              "sameAs": [
                "https://www.facebook.com/haciendaguadalupe",
                "https://www.instagram.com/haciendaguadalupe"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Productos y Servicios Agrícolas",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Cultivo de Hule",
                      "description": "Extracción y recolección de látex con mano de obra especializada"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Café Robusta",
                      "description": "Café robusta con riego y nutrición de precisión en sistema intensivo"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Mangostán",
                      "description": "Mangostán cultivado con manejo biológico y bioinsumos"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Ganado Gyr Lechero",
                      "description": "Ganado Gyr lechero con pastoreo racional Voisin"
                    }
                  }
                ]
              }
            })
          }}
        />
      </Head>
      <HomePage />
    </>
  )
}
