// src/pages/index.js
import Head from 'next/head'
import { useTranslations } from 'next-intl'
import SEOHead from '@/components/SEOHead'
import HomePage from '@/components/HomePage'

export default function Home() {
  const t = useTranslations('meta.home')

  return (
    <>
      <SEOHead title={t('title')} description={t('description')} />
      <Head>
        <meta name="keywords" content="hacienda guadalupe, guatemala, agricultura sostenible, ganado gyr, pastoreo de ultra alta densidad, cultivo hule, café robusta, mangostán, pitahaya, agricultura regenerativa, expansión estratégica, frutas tropicales, rubber tree, coffee, mangostan, dragon fruit, pitaya, gyr lechery, voisin, sustainable agriculture, regenerative agriculture, strategic expansion, tropical fruits" />
        <meta name="author" content="Hacienda Guadalupe" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={t('title')} />
        <meta property="og:description" content={t('description')} />
        <meta property="og:image" content="https://hacienda-guadalupe.com/images/Otras/logo.jpeg" />
        <meta property="og:image:alt" content={t('imageAlt')} />
        <meta property="og:url" content="https://hacienda-guadalupe.com" />
        <meta property="og:site_name" content="Hacienda Guadalupe" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('title')} />
        <meta name="twitter:description" content={t('description')} />
        <meta name="twitter:image" content="https://hacienda-guadalupe.com/images/Otras/logo.jpeg" />
        <meta name="twitter:image:alt" content={t('imageAlt')} />
        
        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#2d5016" />
        <meta name="msapplication-TileColor" content="#2d5016" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Geo Tags */}
        <meta name="geo.region" content="GT" />
        <meta name="geo.placename" content="Guatemala" />
        
        {/* Structured Data - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Hacienda Guadalupe",
              "alternateName": "Hacienda Guadalupe Guatemala",
              "url": "https://hacienda-guadalupe.com"
            })
          }}
        />

        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Hacienda Guadalupe",
              "alternateName": "Hacienda Guadalupe Guatemala",
              "description": t('description'),
              "url": "https://hacienda-guadalupe.com",
              "logo": "https://hacienda-guadalupe.com/images/Otras/logo.jpeg",
              "image": "https://hacienda-guadalupe.com/images/Car/vacas2.jpeg",
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
                "name": t('catalogName'),
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Cultivo de Hule",
                      "description": t('huleDesc')
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": t('cafeTitle'),
                      "description": t('cafeDesc')
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": t('mangostanTitle'),
                      "description": t('mangostanDesc')
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": t('ganadoTitle'),
                      "description": t('ganadoDesc')
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

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  }
}
