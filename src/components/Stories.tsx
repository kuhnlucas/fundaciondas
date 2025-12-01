import { ArrowRight } from 'lucide-react';

export default function Stories() {
  const stories = [
    {
      image: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=800',
      name: 'Mariana, 14 años',
      testimony: 'Gracias al programa de deporte pude encontrar amigos y aprender a trabajar en equipo. Ahora me siento más segura y feliz.',
    },
    {
      image: 'https://images.pexels.com/photos/1432039/pexels-photo-1432039.jpeg?auto=compress&cs=tinysrgb&w=800',
      name: 'Club Atlético Unión',
      testimony: 'La alianza con Fundación DAS nos permitió abrir las puertas del club a más jóvenes de la comunidad. Es un orgullo ser parte de este cambio.',
    },
    {
      image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800',
      name: 'Roberto, voluntario',
      testimony: 'Cada sábado que vengo a entrenar con los chicos es un recordatorio de por qué el deporte puede cambiar vidas. Ver sus sonrisas lo vale todo.',
    },
  ];

  return (
    <section className="bg-bgCard py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-textMain mb-4">
            Historias que nos recuerdan por qué hacemos lo que hacemos.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-bgMain rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h4 className="text-lg font-heading font-semibold text-textMain mb-3">
                  {story.name}
                </h4>
                <p className="text-textSecondary font-body leading-relaxed">
                  "{story.testimony}"
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#novedades"
            className="inline-flex items-center gap-2 text-primary font-body font-medium hover:gap-3 transition-all"
          >
            Ver más historias
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
