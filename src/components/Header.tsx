import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // Header background changed to brand orange #fab32b as requested.
    <header className="sticky top-0 z-50 bg-[#fab32b] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center">
                {/* Logo file expected at public/logo-das.png — replace the SVG with the real PNG when ready */}
                <img src="/logo-das.png" alt="Logo Fundación DAS" className="w-full h-full object-contain" />
              </div>
              <div className="font-heading font-bold text-primary text-lg">
                Fundación DAS
              </div>
            </div>
          </div>

          {/* Replace desktop nav + action buttons with a universal MENU button
              The button shows an icon + the word "MENU" and toggles the full dropdown
              which contains all sections and action buttons. */}
          <div className="flex items-center gap-3">
            <button
              className="flex items-center gap-2 bg-transparent p-0 text-white font-body font-medium hover:opacity-90 transition"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="main-navigation"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
              <span className="uppercase text-sm">{isMenuOpen ? 'CERRAR' : 'MENU'}</span>
            </button>

            {/* Action buttons kept on the header to the right of the MENU button */}
            <div className="flex items-center gap-3">
              <button className="px-6 py-2.5 bg-[#1BC5B3] text-white font-body font-medium rounded-lg hover:opacity-90 transition">
                Donar ahora
              </button>
              <button className="px-6 py-2.5 border-2 border-[#8061ff] text-[#8061ff] font-body font-medium rounded-lg hover:bg-[#8061ff] hover:text-white transition">
                Comprá y ayudá
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div id="main-navigation" className="w-full bg-white text-black py-4 border-t border-border">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-4">
              <a href="#inicio" className="font-body hover:text-primary transition">
                Inicio
              </a>
              <a href="#quienes-somos" className="font-body hover:text-primary transition">
                Quiénes somos
              </a>
              <a href="#programas" className="font-body hover:text-primary transition">
                Programas
              </a>
              <a href="#como-ayudar" className="font-body hover:text-primary transition">
                Cómo ayudar
              </a>
              <a href="#novedades" className="font-body hover:text-primary transition">
                Novedades
              </a>
              <a href="#galeria" className="font-body hover:text-primary transition">
                Galería
              </a>
              <a href="#contacto" className="font-body hover:text-primary transition">
                Contacto
              </a>
              {/* Action buttons removed from dropdown (kept in header) */}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
