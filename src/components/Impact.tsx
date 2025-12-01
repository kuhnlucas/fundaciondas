import { Users, Calendar, Building2, MapPin } from 'lucide-react';

export default function Impact() {
  const stats = [
    {
      icon: Users,
      number: '15,000+',
      label: 'Personas alcanzadas',
    },
    {
      icon: Calendar,
      number: '120+',
      label: 'Actividades y programas anuales',
    },
    {
      icon: Building2,
      number: '45+',
      label: 'Clubes e instituciones aliadas',
    },
    {
      icon: MapPin,
      number: '12',
      label: 'Provincias con presencia',
    },
  ];

  return (
    <section className="bg-bgCard py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-textMain mb-4">
            Su ayuda se transforma en impacto real.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-textSecondary font-body font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-lg text-textSecondary font-body max-w-3xl mx-auto">
            Cada donación, compra con cashback o alianza nos permite llegar a más personas.
          </p>
        </div>
      </div>
    </section>
  );
}
