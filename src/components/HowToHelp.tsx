import { CreditCard, Heart, ShoppingBag, Building2, Users, ArrowRight } from 'lucide-react';

export default function HowToHelp() {
  return (
    <section id="como-ayudar" className="bg-bgMain py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-textMain mb-4">
            Formas de ayudar a Fundación DAS
          </h2>
          <p className="text-lg text-textSecondary font-body">
            Elijan el formato que mejor se adapte a ustedes, a su empresa o a su club.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-heading font-semibold text-textMain mb-6 text-center">
            Para personas
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-bgCard p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <CreditCard className="w-7 h-7 text-primary" />
              </div>
              <h4 className="text-xl font-heading font-semibold text-textMain mb-3">
                Donación única
              </h4>
              <p className="text-textSecondary font-body mb-6">
                Colaboren con el monto que elijan, cuando quieran.
              </p>
              <button className="w-full px-6 py-3 bg-primary text-white font-body font-medium rounded-lg hover:bg-opacity-90 transition">
                Donar ahora
              </button>
            </div>

            <div className="bg-bgCard p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-secondary" />
              </div>
              <h4 className="text-xl font-heading font-semibold text-textMain mb-3">
                Donación mensual
              </h4>
              <p className="text-textSecondary font-body mb-6">
                Conviértanse en donantes mensuales y ayúdennos a planificar mejor nuestros programas.
              </p>
              <button className="w-full px-6 py-3 bg-secondary text-white font-body font-medium rounded-lg hover:bg-opacity-90 transition">
                Quiero ser donante mensual
              </button>
            </div>

            <div className="bg-bgCard p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#8061ff]/10 rounded-xl flex items-center justify-center mb-6">
                <ShoppingBag className="w-7 h-7 text-[#8061ff]" />
              </div>
              <h4 className="text-xl font-heading font-semibold text-textMain mb-3">
                Comprá y ayudá (Cashback)
              </h4>
              <p className="text-textSecondary font-body mb-6">
                Regístrense en nuestra plataforma, compren en comercios aliados y un porcentaje se transforma en donación sin que paguen de más.
              </p>
              <button className="w-full px-6 py-3 border-2 border-[#8061ff] text-[#8061ff] font-body font-medium rounded-lg hover:bg-[#8061ff] hover:text-white transition">
                Explorar la plataforma de cashback
              </button>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-heading font-semibold text-textMain mb-6 text-center">
            Para instituciones
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-bgCard p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-heading font-semibold text-textMain mb-3">
                    Empresas y marcas
                  </h4>
                  <p className="text-textSecondary font-body mb-6">
                    Creamos alianzas de RSE, campañas de porcentaje de ventas y sponsoreos para que su empresa también sea parte del cambio.
                  </p>
                  <button className="px-6 py-3 border-2 border-primary text-primary font-body font-medium rounded-lg hover:bg-primary hover:text-white transition">
                    Quiero sumar mi empresa
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-bgCard p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-heading font-semibold text-textMain mb-3">
                    Clubes e instituciones deportivas
                  </h4>
                  <p className="text-textSecondary font-body mb-6">
                    Trabajamos con clubes en programas deportivos, becas y eventos solidarios.
                  </p>
                  <button className="px-6 py-3 border-2 border-primary text-primary font-body font-medium rounded-lg hover:bg-primary hover:text-white transition">
                    Quiero sumar mi club
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="/como-ayudar"
            className="inline-flex items-center gap-2 text-primary font-body font-medium hover:gap-3 transition-all"
          >
            Ver todas las formas de ayudar
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
