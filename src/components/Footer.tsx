import { Mail, Phone, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-textMain text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="font-heading font-bold text-primary text-lg">DAS</span>
              </div>
              <div className="font-heading font-bold text-white">
                Fundación DAS
              </div>
            </div>
            <p className="text-white/80 font-body text-sm mb-4">
              Sentí el valor de ayudar.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Navegación</h3>
            <ul className="space-y-2 font-body text-sm">
              <li>
                <a href="#quienes-somos" className="text-white/80 hover:text-white transition">
                  Quiénes somos
                </a>
              </li>
              <li>
                <a href="#programas" className="text-white/80 hover:text-white transition">
                  Programas
                </a>
              </li>
              <li>
                <a href="#como-ayudar" className="text-white/80 hover:text-white transition">
                  Cómo ayudar
                </a>
              </li>
              <li>
                <a href="#novedades" className="text-white/80 hover:text-white transition">
                  Novedades
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-white/80 hover:text-white transition">
                  Galería
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-white/80 hover:text-white transition">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2 font-body text-sm">
              <li>
                <a href="#" className="text-white/80 hover:text-white transition">
                  Políticas de privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition">
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition">
                  Transparencia
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-white/60 font-body text-xs leading-relaxed">
                Fundación DAS<br />
                Personería Jurídica N° 12345<br />
                CUIT: 00-00000000-0
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Contacto</h3>
            <ul className="space-y-3 font-body text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-white/60 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@fundaciondas.org"
                  className="text-white/80 hover:text-white transition"
                >
                  info@fundaciondas.org
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-white/60 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+541112345678"
                  className="text-white/80 hover:text-white transition"
                >
                  +54 11 1234-5678
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <p className="text-center text-white/60 font-body text-sm">
            © {new Date().getFullYear()} Fundación DAS. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
