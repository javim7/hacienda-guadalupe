// src/components/Navigation.jsx
import Link from 'next/link'

export const navItems = [
  { href: '/', label: 'Inicio' },
  { href: '/about', label: 'Sobre Nosotros' },
  { href: '/cultivos', label: 'Cultivos' },
  { href: '/proyectos', label: 'Proyectos Extra' }
]

export default function Navigation({ className = '', linkClassName = '', onClick, asList = false }) {
  const content = navItems.map((item) => (
    <Link 
      key={item.href} 
      href={item.href} 
      className={linkClassName}
      onClick={onClick}
    >
      {item.label}
    </Link>
  ))

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
