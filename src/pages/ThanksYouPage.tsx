import React from 'react';
import { useNavigate } from 'react-router-dom';

const ThanksYouPageFull: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center p-4 relative overflow-hidden" style={{
      backgroundImage: 'url(https://i.postimg.cc/xj5DwNSW/fototh.png)',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60 z-0"></div>

      {/* Contenido centrado */}
      <div className="relative z-10 max-w-4xl w-full text-center space-y-8">
        {/* Header con imagen */}
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Gracias Por Tu Interés en Maroto II</h1>
          <p className="text-2xl text-white/90">Nos alegra poder ayudarte a encontrar tu próximo hogar</p>
        </div>

        {/* Separador */}
        <div className="flex justify-center gap-2 mb-12">
          <div className="w-12 h-1 bg-green-500 rounded-full"></div>
          <div className="w-12 h-1 bg-blue-500 rounded-full"></div>
        </div>

        {/* Sección 1 */}
        <div className="mb-8">
          <h3 className="text-3xl font-bold text-white mb-4">Para ayudarte más rápido</h3>
          <p className="text-white/80 text-xl">
            Puedes escribirnos directamente y ver disponibilidad actual en tiempo real.
          </p>
        </div>

        {/* CTA WhatsApp */}
        <div className="text-center mb-12">
          <a
            href="https://wa.me/message/YXNQEVRRCA2ZC1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl transition duration-300 shadow-2xl transform hover:scale-105 text-xl"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.734.896 5.29 2.531 7.422L2.88 23.817l2.826-.933a9.827 9.827 0 004.713 1.196h.005c5.395 0 9.747-4.363 9.747-9.798 0-2.613-.999-5.074-2.818-6.93a9.828 9.828 0 00-6.98-2.89" />
            </svg>
            Hablar con un asesor ahora
          </a>
        </div>

        {/* Información de seguimiento */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
          <p className="text-white text-lg">
            <span className="font-semibold">Uno de nuestros asesores</span> ya recibió tu información y revisará las opciones que mejor calzan contigo.
          </p>
        </div>

        {/* Información del proyecto */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-8 mb-12 max-w-2xl mx-auto">
          <h4 className="text-3xl font-bold text-white mb-4">Maroto II - Proyecto Exclusivo</h4>
          <p className="text-white/90 text-lg mb-4">
            Maroto II es un proyecto exclusivo de solo <span className="font-semibold">20 departamentos</span> con vista al mar en Concón, por lo que algunas unidades ya están en proceso de evaluación.
          </p>
          <p className="text-white/70 text-lg">
            <span className="font-semibold">Equipo Inmobiliaria San Fernando</span>
          </p>
        </div>

        {/* Botón de regreso */}
        <div className="text-center">
          <button
            onClick={() => navigate('/')}
            className="px-8 py-3 bg-white/20 hover:bg-white/30 text-white font-bold rounded-lg transition duration-300 border border-white/50 text-lg"
          >
            Volver al Inicio
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThanksYouPageFull;
