import React from 'react';

interface Feature {
  id: number;
  title: string;
  description: string;
  emoji: string;
}

const features: Feature[] = [
  {
    id: 1,
    title: 'Terrazas con barandas de vidrio templado',
    description: 'Disfruta de vistas panorámicas al mar con terrazas seguras y elegantes.',
    emoji: '🏠',
  },
  {
    id: 2,
    title: 'Cocina encimera vitrocerámica',
    description: 'Cocinas modernas equipadas con encimeras de alta calidad.',
    emoji: '🍳',
  },
  {
    id: 3,
    title: 'Ventanas de PVC termopanel',
    description: 'Aislación térmica y acústica superior para tu comodidad.',
    emoji: '🪟',
  },
  {
    id: 4,
    title: 'Todos los dormitorios con closet',
    description: 'Amplios espacios de almacenamiento en cada habitación.',
    emoji: '🚪',
  },
  {
    id: 5,
    title: 'Baños con Gres porcelanato',
    description: 'Terminaciones de lujo en pisos y muros de baños.',
    emoji: '🛁',
  },
];

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="relative z-20 py-20 bg-gray-50 overflow-hidden">
      {/* Decoración de fondo sutil */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      {/* Contenedor principal */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Encabezado de sección */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Características y Terminaciones
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Departamentos de alta calidad con terminaciones de lujo pensadas para tu comodidad.
          </p>
          
          {/* Línea decorativa */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-blue-500 rounded-full"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="w-12 h-1 bg-gradient-to-l from-transparent to-blue-500 rounded-full"></div>
          </div>
        </div>

        {/* Grid de características */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.slice(0, 3).map((feature) => (
            <div
              key={feature.id}
              className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-l-4 border-blue-400"
            >
              {/* Emoji */}
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">
                {feature.emoji}
              </div>

              {/* Título */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {feature.title}
              </h3>

              {/* Descripción */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Efecto de hover - línea */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl" />
            </div>
          ))}
        </div>

        {/* Segunda fila con 2 items centrados */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mt-8 lg:mt-10 max-w-4xl mx-auto">
          {features.slice(3).map((feature) => (
            <div
              key={feature.id}
              className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-l-4 border-blue-400"
            >
              {/* Emoji */}
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">
                {feature.emoji}
              </div>

              {/* Título */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {feature.title}
              </h3>

              {/* Descripción */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Efecto de hover - línea */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
