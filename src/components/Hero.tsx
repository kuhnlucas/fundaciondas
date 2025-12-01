import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-bgMain py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-secondary font-body font-medium text-sm">
                Fundación DAS · Deporte, inclusión y desarrollo
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-textMain leading-tight">
              Sentí el valor de ayudar, todos los días.
            </h1>

            <p className="text-lg lg:text-xl text-textSecondary font-body leading-relaxed">
              Impulsamos programas deportivos y sociales que transforman la vida de niñas, niños, jóvenes y comunidades.
            </p>

            <div className="pt-4">
              <p className="text-textSecondary font-body font-medium mb-4">
                ¿Cómo quieren ayudar hoy?
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3.5 bg-primary text-white font-body font-medium rounded-lg hover:bg-opacity-90 transition shadow-sm">
                  Donar ahora
                </button>
                <button className="px-8 py-3.5 border-2 border-secondary text-secondary font-body font-medium rounded-lg hover:bg-secondary hover:text-white transition">
                  Ayudar con mis compras (Cashback)
                </button>
              </div>

              <a href="#como-ayudar" className="inline-flex items-center gap-2 text-primary font-body font-medium mt-4 hover:gap-3 transition-all">
                Ver todas las formas de ayudar
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/296301/pexels-photo-296301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Jóvenes practicando deporte en comunidad"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
