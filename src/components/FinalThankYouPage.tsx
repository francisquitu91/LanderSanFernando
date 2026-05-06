import React from 'react';

interface FinalThankYouPageProps {
  onClose?: () => void;
}

export const FinalThankYouPage: React.FC<FinalThankYouPageProps> = ({ onClose }) => {
  return (
    <div className="min-h-screen w-full relative bg-gray-900 flex flex-col items-center justify-center p-4">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://i.postimg.cc/xj5DwNSW/thankyoupage.png"
          alt="Thank you background"
          className="w-full h-full object-cover opacity-100"
        />
        {/* Overlay con gradiente */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-2xl text-center space-y-8">
        {/* Título principal */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Gracias Por Tu Interés en Maroto II
        </h1>

        {/* Descripción */}
        <div className="space-y-4">
          <p className="text-xl text-white/90">
            Para ayudarte más rápido, puedes escribirnos directamente y ver disponibilidad actual en tiempo real.
          </p>
        </div>

        {/* Botón WhatsApp */}
        <a
          href="https://wa.me/message/YXNQEVRRCA2ZC"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl transition duration-300 shadow-2xl transform hover:scale-105"
        >
          <img 
            src="https://i.postimg.cc/05dDNNHy/icono.png" 
            alt="WhatsApp" 
            className="w-6 h-6" 
          />
          Hablar con un asesor ahora
        </a>

        {/* Botón de cerrar/ir a inicio */}
        <button
          onClick={onClose}
          className="mt-8 text-white/70 hover:text-white text-sm underline transition"
        >
          Volver al inicio
        </button>
      </div>

      {/* Decoración inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent"></div>
    </div>
  );
};

export default FinalThankYouPage;
