import React from 'react';

export const EditorialSection: React.FC = () => {
  return (
    <section className="relative z-20 py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            El Proyecto
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Solo 20 exclusivos departamentos, ubicados en un privilegiado sector de Concón, todos con vista al mar.
          </p>
        </div>

        {/* Galería de fotos */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          {/* Foto principal - Izquierda */}
          <div className="lg:col-span-1 lg:row-span-2">
            <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <img 
                src="https://i.postimg.cc/q7CVC1S3/Fachada1.jpg" 
                alt="Fachada principal - El Proyecto" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
              />
            </div>
          </div>

          {/* Galería de 4 fotos - Derecha */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {/* Foto 1 */}
            <div className="relative h-[210px] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src="https://i.postimg.cc/63LPdghk/Fachada2.jpg" 
                alt="Fachada - El Proyecto" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
              />
            </div>

            {/* Foto 2 */}
            <div className="relative h-[210px] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src="https://i.postimg.cc/J4d2cbbb/Imagen-Edificio.jpg" 
                alt="Edificio - El Proyecto" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
              />
            </div>

            {/* Foto 3 */}
            <div className="relative h-[210px] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src="https://i.postimg.cc/43p2gqjK/Interior1.png" 
                alt="Interior - El Proyecto" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
              />
            </div>

            {/* Foto 4 */}
            <div className="relative h-[210px] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src="https://i.postimg.cc/PfS3TmVz/Interior2.png" 
                alt="Interior - El Proyecto" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialSection;
