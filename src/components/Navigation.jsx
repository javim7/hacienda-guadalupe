// src/components/Navigation.jsx
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'

export const navKeys = [
  { href: '/about', key: 'about' },
  { href: '/crops', key: 'crops' },
  { href: '/cattle', key: 'cattle' },
  { href: '/projects', key: 'projects' },
  { href: '/contact', key: 'contact', isButton: false }
]

export default function Navigation({ 
  className = '', 
  linkClassName = '', 
  onClick, 
  asList = false, 
  includeContact = true,
  contactButtonStyle = false,
  contactClassName = '',
  contactStyle = {}
}) {
  const pathname = usePathname()
  const t = useTranslations('common')
  
  const itemsToRender = includeContact ? navKeys : navKeys.filter(item => item.href !== '/contact')
  
  const content = itemsToRender.map((item) => {
    if (item.href === '/contact' && contactButtonStyle) {
      return (
        <Link
          key={item.href}
          href={item.href}
          className={contactClassName}
          onClick={onClick}
          aria-label={t('nav.contact')}
          style={contactStyle}
        >
          {t('contactUs')}
        </Link>
      )
    }
    
    const isSelected = pathname === item.href && item.href !== '/contact'
    const linkClasses = isSelected 
      ? `${linkClassName} underline` 
      : linkClassName
    
    return (
      <Link 
        key={item.href} 
        href={item.href} 
        className={linkClasses}
        onClick={onClick}
      >
        {t(`nav.${item.key}`)}
      </Link>
    )
  })

  if (asList) {
    return (
      <>
        {content.map((link, index) => (
          <li key={index}>{link}</li>
        ))}
      </>
    )
  }

  return (
    <nav className={className}>
      {content}
    </nav>
  )
}
