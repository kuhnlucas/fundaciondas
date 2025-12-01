import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-bgCard shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white font-heading font-bold text-xl">
                DAS
              </div>
              <div className="font-heading font-bold text-primary text-lg">
                Fundación DAS
              </div>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            <a href="#inicio" className="text-textMain font-body hover:text-primary transition">
              Inicio
            </a>
            <a href="#quienes-somos" className="text-textMain font-body hover:text-primary transition">
              Quiénes somos
            </a>
            <a href="#programas" className="text-textMain font-body hover:text-primary transition">
              Programas
            </a>
            <a href="#como-ayudar" className="text-textMain font-body hover:text-primary transition">
              Cómo ayudar
            </a>
            <a href="#novedades" className="text-textMain font-body hover:text-primary transition">
              Novedades
            </a>
            <a href="#galeria" className="text-textMain font-body hover:text-primary transition">
              Galería
            </a>
            <a href="#contacto" className="text-textMain font-body hover:text-primary transition">
              Contacto
            </a>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <button className="px-6 py-2.5 bg-primary text-white font-body font-medium rounded-lg hover:bg-opacity-90 transition">
              Donar ahora
            </button>
            <button className="px-6 py-2.5 border-2 border-primary text-primary font-body font-medium rounded-lg hover:bg-primary hover:text-white transition">
              Comprá y ayudá
            </button>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-textMain" />
            ) : (
              <Menu className="w-6 h-6 text-textMain" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <a href="#inicio" className="text-textMain font-body hover:text-primary transition">
                Inicio
              </a>
              <a href="#quienes-somos" className="text-textMain font-body hover:text-primary transition">
                Quiénes somos
              </a>
              <a href="#programas" className="text-textMain font-body hover:text-primary transition">
                Programas
              </a>
              <a href="#como-ayudar" className="text-textMain font-body hover:text-primary transition">
                Cómo ayudar
              </a>
              <a href="#novedades" className="text-textMain font-body hover:text-primary transition">
                Novedades
              </a>
              <a href="#galeria" className="text-textMain font-body hover:text-primary transition">
                Galería
              </a>
              <a href="#contacto" className="text-textMain font-body hover:text-primary transition">
                Contacto
              </a>
              <div className="flex flex-col gap-3 pt-4">
                <button className="w-full px-6 py-2.5 bg-primary text-white font-body font-medium rounded-lg hover:bg-opacity-90 transition">
                  Donar ahora
                </button>
                <button className="w-full px-6 py-2.5 border-2 border-primary text-primary font-body font-medium rounded-lg hover:bg-primary hover:text-white transition">
                  Comprá y ayudá
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
