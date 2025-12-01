import { Users, Heart, Activity, Leaf, CircleDot, ArrowRight } from 'lucide-react';

export default function WhatWeDo() {
  const programs = [
    {
      icon: Activity,
      title: 'Deporte social',
      description: 'Potenciamos el desarrollo a través del deporte inclusivo',
    },
    {
      icon: Users,
      title: 'Integración comunitaria',
      description: 'Construimos comunidades más unidas y participativas',
    },
    {
      icon: Heart,
      title: 'Salud y hábitos saludables',
      description: 'Promovemos estilos de vida saludables para todos',
    },
    {
      icon: Leaf,
      title: 'Medio ambiente',
      description: 'Educamos en sustentabilidad y cuidado ambiental',
    },
    {
      icon: CircleDot,
      title: 'Inclusión y diversidad',
      description: 'Garantizamos espacios de participación para todos',
    },
    {
      icon: Users,
      title: 'Desarrollo comunitario',
      description: 'Fortalecemos capacidades locales y organizativas',
    },
  ];

  return (
    <section className="bg-bgCard py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-textMain mb-4">
            Usamos el deporte y la acción social para cambiar realidades.
          </h2>
          <p className="text-lg text-textSecondary font-body">
            Desarrollamos programas que potencian el desarrollo humano a través del deporte, la educación, la salud y la inclusión.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                key={index}
                className="bg-bgMain p-6 rounded-xl border border-border hover:border-primary transition-colors group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-textMain mb-2">
                  {program.title}
                </h3>
                <p className="text-textSecondary font-body">
                  {program.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href="#programas"
            className="inline-flex items-center gap-2 text-primary font-body font-medium hover:gap-3 transition-all"
          >
            Conozcan más sobre nuestros programas
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
