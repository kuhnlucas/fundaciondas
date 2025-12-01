import { ArrowRight } from 'lucide-react';

export default function Partners() {
  const partners = [
    { name: 'Empresa A', cashback: true },
    { name: 'Empresa B', cashback: false },
    { name: 'Empresa C', cashback: true },
    { name: 'Empresa D', cashback: false },
    { name: 'Empresa E', cashback: true },
    { name: 'Empresa F', cashback: false },
  ];

  return (
    <section className="bg-bgMain py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-textMain mb-4">
            Empresas y organizaciones que confían en Fundación DAS
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-bgCard p-6 rounded-xl border border-border flex flex-col items-center justify-center gap-3 hover:shadow-md transition-shadow relative"
            >
              {partner.cashback && (
                <span className="absolute top-2 right-2 px-2 py-0.5 bg-accent text-white text-xs font-body font-medium rounded">
                  Cashback
                </span>
              )}
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-heading font-bold text-primary">
                  {partner.name.charAt(0)}
                </span>
              </div>
              <span className="text-sm font-body font-medium text-textSecondary text-center">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/como-ayudar#empresas"
            className="inline-flex items-center gap-2 text-primary font-body font-medium hover:gap-3 transition-all"
          >
            Quiero que mi empresa sea aliada
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
