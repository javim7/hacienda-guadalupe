import Head from 'next/head'
import { useRouter } from 'next/router'

const BASE_URL = 'https://hacienda-guadalupe.com'

export default function SEOHead({ title, description }) {
  const { locale, asPath, locales } = useRouter()

  const pathWithoutTrailingSlash = asPath === '/' ? '' : asPath
  const canonicalUrl = locale === 'en'
    ? `${BASE_URL}${pathWithoutTrailingSlash}`
    : `${BASE_URL}/${locale}${pathWithoutTrailingSlash}`

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {locales.map((loc) => {
        const href = loc === 'en'
          ? `${BASE_URL}${pathWithoutTrailingSlash}`
          : `${BASE_URL}/${loc}${pathWithoutTrailingSlash}`
        return (
          <link key={loc} rel="alternate" hrefLang={loc} href={href} />
        )
      })}
      <link rel="alternate" hrefLang="x-default" href={`${BASE_URL}${pathWithoutTrailingSlash}`} />

      <meta property="og:locale" content={locale === 'es' ? 'es_GT' : 'en_US'} />
    </Head>
  )
}
