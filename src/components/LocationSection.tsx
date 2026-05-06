import React from 'react';

const LocationSection: React.FC = () => {
  return (
    <section id="ubicacion" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Imagen izquierda */}
          <div className="lg:w-1/2 flex-shrink-0">
            <img
              src="https://i.postimg.cc/d1rv8BHr/mapa.png"
              alt="Ubicación Maroto II"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>

          {/* Contenido derecha */}
          <div className="lg:w-1/2 space-y-8">
            {/* Header */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-3">Ubicación Privilegiada</h2>
              <p className="text-xl text-gray-600 font-semibold">
                Maroto 1175, 2510896 Concón, Valparaíso
              </p>
              <p className="text-lg text-gray-600 mt-2">
                A sólo 16 km de Viña del Mar y a 133 km de Santiago
              </p>
            </div>

            {/* Mapa de ubicación */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">📍</span>
                Dirección
              </h3>
              <p className="text-gray-700">Maroto 1175, Concón, Valparaíso</p>
            </div>

            {/* Accesibilidad */}
            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">🚗</span>
                Accesibilidad
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• A 16 km de Viña del Mar</li>
                <li>• A 133 km de Santiago</li>
              </ul>
            </div>

            {/* Vista al Mar */}
            <div className="bg-cyan-50 border-l-4 border-cyan-600 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">🌊</span>
                Vista al Mar
              </h3>
              <p className="text-gray-700">
                Todos los departamentos cuentan con vistas privilegiadas al océano Pacífico.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
