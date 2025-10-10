// src/components/Header.jsx
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from './Navigation'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="w-full px-6 lg:px-16 py-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-4">
            <div className="relative w-14 h-14">
              {/* Next 13: use `fill` + style for objectFit */}
              <Image
                src="/images/Otras/logo.jpeg"
                alt="Logo"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>

            <span className="text-2xl font-bold font-serif tracking-wide brand-text">Hacienda Guadalupe</span>
          </Link>
        </div>

        <div className="hidden tablet:flex items-center gap-8">
          <Navigation 
            className="flex items-center gap-8"
            linkClassName="hover:underline px-3 py-2 text-base"
            contactButtonStyle={true}
            contactClassName="ml-3 inline-block px-5 py-3 rounded-md font-medium text-base shadow-sm"
            contactStyle={{
              backgroundColor: 'var(--brand-corinto-light)',
              color: 'var(--brand-contrast)'
            }}
          />
        </div>

        <div className="tablet:hidden">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menú"
            className="p-2 rounded hover:bg-gray-100"
          >
            <svg className={`w-8 h-8 transition-transform duration-300 ease-in-out ${open ? 'rotate-180' : 'rotate-0'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-all duration-300 ease-in-out"
                d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      <div className={`tablet:hidden border-t bg-white/95 transition-all duration-300 ease-in-out overflow-hidden ${
        open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 py-4 flex flex-col gap-2">
          <Navigation 
            className="flex flex-col gap-2"
            linkClassName="py-3 px-3 rounded hover:bg-gray-100 block text-base transition-colors duration-200"
            onClick={() => setOpen(false)}
            contactButtonStyle={true}
            contactClassName="mt-2 block text-center px-5 py-3 rounded-md text-base transition-colors duration-200"
            contactStyle={{
              backgroundColor: 'var(--brand-corinto-light)',
              color: 'var(--brand-contrast)'
            }}
          />
        </div>
      </div>
    </header>
  )
}
