import { Mail } from 'lucide-react';
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Suscripción:', email);
    setEmail('');
  };

  return (
    <section className="bg-primary py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl lg:text-3xl font-heading font-bold text-white mb-3">
            Sumate a la comunidad
          </h2>
          <p className="text-lg text-white/90 font-body">
            Entérense de nuevas campañas, eventos solidarios y oportunidades para ayudar.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu correo electrónico"
              className="flex-1 px-4 py-3 rounded-lg font-body focus:outline-none focus:ring-2 focus:ring-white/50"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-white text-primary font-body font-medium rounded-lg hover:bg-opacity-90 transition shadow-sm whitespace-nowrap"
            >
              Quiero recibir novedades
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
