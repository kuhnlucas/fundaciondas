import { Users, Heart, Activity, Leaf, CircleDot, ArrowRight } from 'lucide-react';

export default function WhatWeDo() {
  // Define programs with colors and precomputed Tailwind classes for predictable build output
  const programs = [
    {
      icon: Activity,
      title: 'Deporte social',
      description: 'Potenciamos el desarrollo a través del deporte inclusivo',
      colorHex: '#FF8A3D',
      iconBgClass: 'bg-[#FF8A3D]/10',
      iconTextClass: 'text-[#FF8A3D]',
      hoverBorderClass: 'hover:border-[#FF8A3D]',
      hoverBgClass: 'hover:bg-[#FF8A3D]/6',
      hoverIconBgClass: 'hover:bg-[#FF8A3D]/20',
      titleHoverClass: 'hover:text-[#FF8A3D]'
    },
    {
      icon: Users,
      title: 'Integración comunitaria',
      description: 'Construimos comunidades más unidas y participativas',
      colorHex: '#6C4DFF',
      iconBgClass: 'bg-[#6C4DFF]/10',
      iconTextClass: 'text-[#6C4DFF]',
      hoverBorderClass: 'hover:border-[#6C4DFF]',
      hoverBgClass: 'hover:bg-[#6C4DFF]/6',
      hoverIconBgClass: 'hover:bg-[#6C4DFF]/20',
      titleHoverClass: 'hover:text-[#6C4DFF]'
    },
    {
      icon: Heart,
      title: 'Salud y hábitos saludables',
      description: 'Promovemos estilos de vida saludables para todos',
      colorHex: '#1BC5B3',
      iconBgClass: 'bg-[#1BC5B3]/10',
      iconTextClass: 'text-[#1BC5B3]',
      hoverBorderClass: 'hover:border-[#1BC5B3]',
      hoverBgClass: 'hover:bg-[#1BC5B3]/6',
      hoverIconBgClass: 'hover:bg-[#1BC5B3]/20',
      titleHoverClass: 'hover:text-[#1BC5B3]'
    },
    {
      icon: Leaf,
      title: 'Medio ambiente',
      description: 'Educamos en sustentabilidad y cuidado ambiental',
      colorHex: '#4FBF5C',
      iconBgClass: 'bg-[#4FBF5C]/10',
      iconTextClass: 'text-[#4FBF5C]',
      hoverBorderClass: 'hover:border-[#4FBF5C]',
      hoverBgClass: 'hover:bg-[#4FBF5C]/6',
      hoverIconBgClass: 'hover:bg-[#4FBF5C]/20',
      titleHoverClass: 'hover:text-[#4FBF5C]'
    },
    {
      icon: CircleDot,
      title: 'Inclusión y diversidad',
      description: 'Garantizamos espacios de participación para todos',
      colorHex: '#F64B8B',
      iconBgClass: 'bg-[#F64B8B]/10',
      iconTextClass: 'text-[#F64B8B]',
      hoverBorderClass: 'hover:border-[#F64B8B]',
      hoverBgClass: 'hover:bg-[#F64B8B]/6',
      hoverIconBgClass: 'hover:bg-[#F64B8B]/20',
      titleHoverClass: 'hover:text-[#F64B8B]'
    },
    {
      icon: Users,
      title: 'Desarrollo comunitario',
      description: 'Fortalecemos capacidades locales y organizativas',
      // default / neutral styling for items not in the explicit list
      colorHex: null,
      iconBgClass: 'bg-primary/10',
      iconTextClass: 'text-primary',
      hoverBorderClass: 'hover:border-primary',
      hoverBgClass: 'hover:bg-primary/6',
      hoverIconBgClass: 'hover:bg-primary/20',
      titleHoverClass: 'hover:text-primary'
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
                className={`bg-white p-6 rounded-xl border border-[#E5E7EB] transition-transform duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg ${program.hoverBorderClass} ${program.hoverBgClass}`}
              >
                <div className="h-full">
                  <div className={`w-12 h-12 ${program.iconBgClass} rounded-lg flex items-center justify-center mb-4 transition-colors ${program.hoverIconBgClass}`}>
                    <Icon className={`${program.iconTextClass} w-6 h-6`} />
                  </div>
                  <h3 className={`text-xl font-heading font-semibold text-textMain mb-2 transition-colors ${program.titleHoverClass}`}>
                    {program.title}
                  </h3>
                  <p className="text-textSecondary font-body">
                    {program.description}
                  </p>
                </div>
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
