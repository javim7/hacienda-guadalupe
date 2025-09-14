// src/components/Footer.jsx
import Navigation from './Navigation'

export default function Footer() {
    return (
      <footer className="brand-bg text-white">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center">
          <h2 className="text-2xl font-serif font-semibold mb-3">Hacienda Guadalupe</h2>
  
          <nav className="mb-4">
            <ul className="flex flex-wrap justify-center gap-6 text-sm">
              <Navigation 
                linkClassName="footer-link"
                asList={true}
              />
              <li><a href="/contacto" className="footer-link">Contacto</a></li>
            </ul>
          </nav>
  
          {/* Contacto */}
          <div className="mb-3 text-sm">
            <div>
              <a href="mailto:info@haciendaguadalupe.example" className="footer-link">info@haciendaguadalupe.example</a>
            </div>
            <div>
              <a href="tel:+50230059357" className="footer-link">+502 3005-9357</a>
            </div>
          </div>
  
          {/* Icono social minimal (Facebook) y créditos */}
          <div className="flex flex-col items-center gap-2">
            <a
              href="https://www.facebook.com/haciendaguadalupe"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-white/20"
            >
              {/* simple SVG facebook icon */}
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.12 8.44 9.95v-7.05H8.08v-2.9h2.36V9.41c0-2.33 1.39-3.62 3.52-3.62.  1.02 0 2.08.18 2.08.18v2.29h-1.17c-1.15 0-1.51.72-1.51 1.46v1.76h2.57l-.41 2.9h-2.16v7.05C18.34 21.19 22 17.06 22 12.07z" />
              </svg>
            </a>
  
            <div className="text-xs opacity-90">
            © Hacienda Guadalupe – Tradición e innovación agrícola en Guatemala.
            </div>
          </div>
        </div>
      </footer>
    )
  }
  