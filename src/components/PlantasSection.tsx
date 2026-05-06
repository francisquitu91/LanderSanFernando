import React, { useState } from 'react';

interface Plant {
  id: string;
  type: string;
  code: string;
  image: string;
  dormitorios: number;
  banos: number;
  superficie: string;
  terraza?: string;
  patio?: string;
}

const plants: Plant[] = [
  // 2 Dormitorios - Piso Bajo
  {
    id: '503-c1',
    type: 'Tipo 503 / C1',
    code: '503',
    image: 'https://i.postimg.cc/SQ1mFJB1/Planta-Tipo-503-C1.jpg',
    dormitorios: 2,
    banos: 2,
    superficie: '57,97 m²',
  },
  {
    id: '504-c2',
    type: 'Tipo 504 / C2',
    code: '504',
    image: 'https://i.postimg.cc/g28pZ4xP/Planta-Tipo-504-C2.jpg',
    dormitorios: 2,
    banos: 2,
    superficie: '66 m²',
  },
  {
    id: '505-d',
    type: 'Tipo 505 / D',
    code: '505',
    image: 'https://i.postimg.cc/j2D0d4ph/Planta-Tipo-505-D.jpg',
    dormitorios: 2,
    banos: 2,
    superficie: '62,72 m²',
  },
  {
    id: '506-e',
    type: 'Tipo 506 / E',
    code: '506',
    image: 'https://i.postimg.cc/y6GCp29s/Planta-Tipo-506-E.jpg',
    dormitorios: 2,
    banos: 2,
    superficie: '70,11 m²',
  },
  // 2 Dormitorios - Piso Alto
  {
    id: '603-c1',
    type: 'Tipo 603 / C1',
    code: '603',
    image: 'https://i.postimg.cc/SQ1mFJB1/Planta-Tipo-503-C1.jpg',
    dormitorios: 2,
    banos: 2,
    superficie: '115,81 m²',
    terraza: '57,84 m²',
  },
  {
    id: '604-c2',
    type: 'Tipo 604 / C2',
    code: '604',
    image: 'https://i.postimg.cc/tTmwfVs6/Planta-Tipo-604-C2.jpg',
    dormitorios: 2,
    banos: 2,
    superficie: '131,55 m²',
    terraza: '65,55 m²',
  },
  {
    id: '605-d',
    type: 'Tipo 605 / D',
    code: '605',
    image: 'https://i.postimg.cc/j2D0d4ph/Planta-Tipo-505-D.jpg',
    dormitorios: 2,
    banos: 2,
    superficie: '125,87 m²',
    terraza: '63,15 m²',
  },
  {
    id: '606-e',
    type: 'Tipo 606 / E',
    code: '606',
    image: 'https://i.postimg.cc/y6GCp29s/Planta-Tipo-506-E.jpg',
    dormitorios: 2,
    banos: 2,
    superficie: '140,40 m²',
    terraza: '70,29 m²',
  },
  // 3 Dormitorios - Piso Bajo
  {
    id: '101-a',
    type: 'Tipo 101 / A',
    code: '101',
    image: 'https://i.postimg.cc/9fxcm04m/Planta-Tipo-101-A.jpg',
    dormitorios: 3,
    banos: 2,
    superficie: '111,18 m²',
    patio: '125,97 m²',
  },
  {
    id: '102-b',
    type: 'Tipo 102 / B',
    code: '102',
    image: 'https://i.postimg.cc/wvZHNrcG/Planta-Tipo-102-B.jpg',
    dormitorios: 3,
    banos: 2,
    superficie: '116,26 m²',
    patio: '144,28 m²',
  },
  // 3 Dormitorios - Piso 2
  {
    id: '201-a',
    type: 'Tipo 201 / A',
    code: '201',
    image: 'https://i.postimg.cc/9fxcm04m/Planta-Tipo-101-A.jpg',
    dormitorios: 3,
    banos: 2,
    superficie: '111,18 m²',
  },
  {
    id: '202-b',
    type: 'Tipo 202 / B',
    code: '202',
    image: 'https://i.postimg.cc/wvZHNrcG/Planta-Tipo-102-B.jpg',
    dormitorios: 3,
    banos: 2,
    superficie: '116,26 m²',
  },
  // 3 Dormitorios - Piso 3
  {
    id: '301-a',
    type: 'Tipo 301 / A',
    code: '301',
    image: 'https://i.postimg.cc/9fxcm04m/Planta-Tipo-101-A.jpg',
    dormitorios: 3,
    banos: 2,
    superficie: '111,18 m²',
  },
  {
    id: '302-b',
    type: 'Tipo 302 / B',
    code: '302',
    image: 'https://i.postimg.cc/wvZHNrcG/Planta-Tipo-102-B.jpg',
    dormitorios: 3,
    banos: 2,
    superficie: '116,26 m²',
  },
  // 3 Dormitorios - Piso 4
  {
    id: '401-a',
    type: 'Tipo 401 / A',
    code: '401',
    image: 'https://i.postimg.cc/9fxcm04m/Planta-Tipo-101-A.jpg',
    dormitorios: 3,
    banos: 2,
    superficie: '111,18 m²',
  },
  {
    id: '402-b',
    type: 'Tipo 402 / B',
    code: '402',
    image: 'https://i.postimg.cc/wvZHNrcG/Planta-Tipo-102-B.jpg',
    dormitorios: 3,
    banos: 2,
    superficie: '116,26 m²',
  },
  // 3 Dormitorios - Piso 5
  {
    id: '501-a',
    type: 'Tipo 501 / A',
    code: '501',
    image: 'https://i.postimg.cc/9fxcm04m/Planta-Tipo-101-A.jpg',
    dormitorios: 3,
    banos: 2,
    superficie: '111,18 m²',
  },
  {
    id: '502-b',
    type: 'Tipo 502 / B',
    code: '502',
    image: 'https://i.postimg.cc/wvZHNrcG/Planta-Tipo-102-B.jpg',
    dormitorios: 3,
    banos: 2,
    superficie: '116,26 m²',
  },
  // 3 Dormitorios - Piso 6
  {
    id: '601-a',
    type: 'Tipo 601 / A',
    code: '601',
    image: 'https://i.postimg.cc/9fxcm04m/Planta-Tipo-101-A.jpg',
    dormitorios: 3,
    banos: 2,
    superficie: '111,18 m²',
  },
  {
    id: '602-b',
    type: 'Tipo 602 / B',
    code: '602',
    image: 'https://i.postimg.cc/wvZHNrcG/Planta-Tipo-102-B.jpg',
    dormitorios: 3,
    banos: 2,
    superficie: '116,26 m²',
  },
];

const PlantasSection: React.FC = () => {
  const [filter, setFilter] = useState<'todos' | '2dorm' | '3dorm'>('todos');

  const filteredPlants = plants.filter((plant) => {
    if (filter === '2dorm') return plant.dormitorios === 2;
    if (filter === '3dorm') return plant.dormitorios === 3;
    return true;
  });

  const scrollToForm = () => {
    const formElement = document.querySelector('[data-form-container]');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="plantas" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Tipos y Plantas</h2>
          <p className="text-xl text-gray-600">Explora las diferentes tipologías disponibles en nuestro proyecto.</p>
        </div>

        {/* Filtros */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <button
            onClick={() => setFilter('todos')}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              filter === 'todos'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-blue-600'
            }`}
          >
            Todos
          </button>
          <button
            onClick={() => setFilter('2dorm')}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              filter === '2dorm'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-blue-600'
            }`}
          >
            2 Dormitorios
          </button>
          <button
            onClick={() => setFilter('3dorm')}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              filter === '3dorm'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-blue-600'
            }`}
          >
            3 Dormitorios
          </button>
        </div>

        {/* Grid de Plantas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPlants.map((plant) => (
            <div
              key={plant.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
            >
              {/* Imagen */}
              <div className="relative h-56 overflow-hidden bg-gray-200 flex items-center justify-center">
                <img
                  src={plant.image}
                  alt={plant.type}
                  className="w-full h-full object-contain hover:scale-110 transition duration-300"
                />
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{plant.type}</h3>

                {/* Specs */}
                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">Dormitorios</span>
                    <span>{plant.dormitorios} dorm</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">Baños</span>
                    <span>{plant.banos} baños</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">Sup. total:</span>
                    <span>{plant.superficie}</span>
                  </div>
                  {plant.terraza && (
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">Terraza:</span>
                      <span>{plant.terraza}</span>
                    </div>
                  )}
                  {plant.patio && (
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">Patio:</span>
                      <span>{plant.patio}</span>
                    </div>
                  )}
                </div>

                {/* Botón Cotizar */}
                <button
                  onClick={scrollToForm}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition"
                >
                  Cotizar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlantasSection;
