// src/components/Navigation.jsx
import Link from 'next/link'

export const navItems = [
  { href: '/about', label: 'Sobre Nosotros' },
  { href: '/cattle', label: 'Ganado' },
  { href: '/crops', label: 'Cultivos' },
  { href: '/projects', label: 'Proyectos Extra' },
  { href: '/contact', label: 'Contacto', isButton: false } // Default to regular link
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
  // Filter items based on includeContact prop
  const itemsToRender = includeContact ? navItems : navItems.filter(item => item.href !== '/contact')
  
  const content = itemsToRender.map((item) => {
    // Special handling for contact item when it should be styled as a button
    if (item.href === '/contact' && contactButtonStyle) {
      return (
        <Link
          key={item.href}
          href={item.href}
          className={contactClassName}
          onClick={onClick}
          aria-label="Contacto"
          style={contactStyle}
        >
          Contáctanos
        </Link>
      )
    }
    
    // Regular navigation items
    return (
      <Link 
        key={item.href} 
        href={item.href} 
        className={linkClassName}
        onClick={onClick}
      >
        {item.label}
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
