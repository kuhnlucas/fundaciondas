import { Users, Calendar, Building2, MapPin } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

function useCountUp(targetNumber: number, duration = 800, startWhenInView = true) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    let rafId: number;
    let startTime: number | null = null;

    function step(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(progress * targetNumber);
      setValue(current);
      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    }

    if (!startWhenInView) {
      started.current = true;
      rafId = requestAnimationFrame(step);
    } else if (ref.current && typeof IntersectionObserver !== 'undefined') {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            rafId = requestAnimationFrame(step);
            obs.disconnect();
          }
        });
      }, { threshold: 0.3 });
      obs.observe(ref.current);
      return () => obs.disconnect();
    }

    return () => cancelAnimationFrame(rafId);
  }, [targetNumber, duration, startWhenInView]);

  return { ref, value };
}

export default function Impact() {
  const stats = [
    {
      icon: Users,
      number: 15000,
      suffix: '+',
      label: 'Personas alcanzadas',
    },
    {
      icon: Calendar,
      number: 120,
      suffix: '+',
      label: 'Actividades y programas anuales',
    },
    {
      icon: Building2,
      number: 45,
      suffix: '+',
      label: 'Clubes e instituciones aliadas',
    },
    {
      icon: MapPin,
      number: 12,
      suffix: '',
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
            const { ref, value } = useCountUp(stat.number, 1700, true);
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div ref={ref as any} className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-2">
                  {value.toLocaleString()}{stat.suffix}
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
