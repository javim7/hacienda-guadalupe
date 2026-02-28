import { useRouter } from 'next/router'
import Link from 'next/link'

export default function LanguageSwitcher({ className = '' }) {
  const router = useRouter()
  const { locale, asPath } = router

  const otherLocale = locale === 'en' ? 'es' : 'en'

  return (
    <Link
      href={asPath}
      locale={otherLocale}
      className={`flex items-center gap-1.5 px-2 py-1 rounded text-sm font-medium transition-colors hover:bg-gray-100 ${className}`}
      aria-label={otherLocale === 'es' ? 'Cambiar a Español' : 'Switch to English'}
    >
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
      <span className="uppercase">{otherLocale}</span>
    </Link>
  )
}
