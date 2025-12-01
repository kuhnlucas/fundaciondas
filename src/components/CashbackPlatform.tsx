import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function CashbackPlatform() {
  const features = [
    'Registran su cuenta una sola vez.',
    'Compran en comercios físicos y online aliados.',
    'Un porcentaje va directo a Fundación DAS.',
  ];

  return (
    <section className="bg-bgMain py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="px-3 py-1 bg-accent text-white text-sm font-body font-medium rounded-full">
                Nueva forma de ayudar
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-textMain">
              Ayuden simplemente comprando.
            </h2>

            <p className="text-lg text-textSecondary font-body leading-relaxed">
              Lanzamos nuestra plataforma de cashback para que puedan apoyar a Fundación DAS mientras realizan sus compras habituales. No pagan de más: los comercios aliados destinan un porcentaje a nuestros programas.
            </p>

            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-textMain font-body">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-3.5 bg-primary text-white font-body font-medium rounded-lg hover:bg-opacity-90 transition shadow-sm">
                Ir a la plataforma de cashback
              </button>
              <a
                href="/cashback"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-primary font-body font-medium hover:gap-3 transition-all"
              >
                Quiero saber cómo funciona
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <div className="bg-bgCard rounded-2xl shadow-2xl p-8 border border-border">
                <div className="aspect-[4/3] bg-gradient-to-br from-secondary/10 to-primary/10 rounded-xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto">
                      <span className="text-3xl">🛍️</span>
                    </div>
                    <div className="font-heading font-bold text-2xl text-textMain">
                      Plataforma de Cashback
                    </div>
                    <p className="text-textSecondary font-body">
                      Comprá y ayudá al mismo tiempo
                    </p>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-bgMain rounded-lg">
                    <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                      <span className="text-lg">🏪</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-body font-medium text-textMain">
                        Comercio Aliado
                      </div>
                      <div className="text-xs text-textSecondary">2% de cashback</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-bgMain rounded-lg">
                    <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                      <span className="text-lg">🛒</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-body font-medium text-textMain">
                        Tienda Online
                      </div>
                      <div className="text-xs text-textSecondary">3% de cashback</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-4 right-4 w-full h-full bg-secondary/10 rounded-2xl -z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
