// src/components/Header.jsx
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'Inicio' },
    { href: '/about', label: 'Sobre Nosotros' },
    { href: '/cultivos', label: 'Cultivos' },
    { href: '/proyectos', label: 'Proyectos Extra' }
  ]

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="w-full px-6 lg:px-16 py-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-4">
            <div className="relative w-14 h-14">
              {/* Next 13: use `fill` + style for objectFit */}
              <Image
                src="/images/logo.png"
                alt="Logo"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>

            <span className="text-2xl font-bold tracking-wide brand-text">Hacienda Guadalupe</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {navItems.map((n) => (
              <Link key={n.href} href={n.href} className="hover:underline px-3 py-2 text-base">
                {n.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contacto"
            className="ml-3 inline-block px-5 py-3 rounded-md font-medium text-base shadow-sm"
            style={{
              backgroundColor: 'var(--brand-corinto-light)',
              color: 'var(--brand-contrast)'
            }}
            aria-label="Contacto"
          >
            Contacto
          </Link>
        </div>

        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menú"
            className="p-2 rounded hover:bg-gray-100"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white/95">
          <div className="px-4 py-4 flex flex-col gap-2">
            {navItems.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="py-3 px-3 rounded hover:bg-gray-100 block text-base"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            ))}

            <Link
              href="/contacto"
              onClick={() => setOpen(false)}
              className="mt-2 block text-center px-5 py-3 rounded-md text-base"
              style={{
                backgroundColor: 'var(--brand-corinto-light)',
                color: 'var(--brand-contrast)'
              }}
              aria-label="Contacto"
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
