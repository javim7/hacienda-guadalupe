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
                includeContact={true}
              />
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
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M15.12 8.667H13.5c-.262 0-.5.238-.5.5v1.5h2.117l-.283 2.333H13v6h-2.333v-6H9v-2.333h1.667v-1.5c0-1.667 1.166-3 2.833-3h1.617v2z"
                  fill="currentColor"
                />
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
  