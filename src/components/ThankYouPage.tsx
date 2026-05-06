import React from 'react';

interface ThankYouPageProps {
  onContinue: () => void;
  onBack?: () => void;
  phoneNumber?: string;
  inline?: boolean;
  final?: boolean;
}

export const ThankYouPage: React.FC<ThankYouPageProps> = ({ 
  onContinue,
  onBack: _onBack,
  phoneNumber: _phoneNumber = 'YXNQEVRRCA2ZC',
  inline = false,
  final = false
}) => {
  // Versión final con imagen de fondo pantalla completa
  if (final) {
    return (
      <div className="fixed inset-0 bg-cover bg-center z-50 flex flex-col items-center justify-center p-4" style={{
        backgroundImage: 'url(https://i.postimg.cc/xj5DwNSW/thankyoupage.png)',
        backgroundAttachment: 'fixed'
      }}>
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60 z-0"></div>

        {/* Contenido centrado */}
        <div className="relative z-10 max-w-2xl w-full text-center space-y-6">
          {/* Título principal */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Gracias Por Tu Interés en Maroto II
          </h1>

          {/* Subtítulo */}
          <p className="text-xl text-white/90">
            Nos alegra poder ayudarte a encontrar tu próximo hogar
          </p>

          {/* Separador */}
          <div className="flex justify-center gap-2">
            <div className="w-12 h-1 bg-green-500 rounded-full"></div>
            <div className="w-12 h-1 bg-blue-500 rounded-full"></div>
          </div>

          {/* Sección principal */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white">Para ayudarte más rápido</h3>
            <p className="text-white/80">
              Puedes escribirnos directamente y ver disponibilidad actual en tiempo real.
            </p>
          </div>

          {/* CTA WhatsApp grande */}
          <a
            href="https://wa.me/message/YXNQEVRRCA2ZC1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl transition duration-300 shadow-2xl transform hover:scale-105 text-lg"
          >
            <img 
              src="https://i.postimg.cc/05dDNNHy/icono.png" 
              alt="WhatsApp" 
              className="w-7 h-7" 
            />
            Hablar con un asesor ahora
          </a>

          {/* Información de seguimiento */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 text-left">
            <p className="text-white">
              <span className="font-semibold">Uno de nuestros asesores</span> ya recibió tu información y revisará las opciones que mejor calzan contigo.
            </p>
          </div>

          {/* Información del proyecto */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 text-left">
            <h4 className="font-bold text-white mb-2">Maroto II - Proyecto Exclusivo</h4>
            <p className="text-white/90 mb-2">
              Maroto II es un proyecto exclusivo de solo <span className="font-semibold">20 departamentos</span> con vista al mar en Concón, por lo que algunas unidades ya están en proceso de evaluación.
            </p>
            <p className="text-white/70 text-sm">
              <span className="font-semibold">Equipo Inmobiliaria San Fernando</span>
            </p>
          </div>

          {/* Botón Volver */}
          <button
            onClick={onContinue}
            className="mt-6 bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-8 rounded-lg transition duration-300 border border-white/50"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  if (inline) {
    // Versión inline para reemplazar formulario
    return (
      <div className="w-full">
        {/* Header con imagen pequeña */}
        <div className="mb-4 text-center flex flex-col items-center gap-3">
          <img
            src="https://i.postimg.cc/xj5DwNSW/fototh.png"
            alt="Maroto II"
            className="w-32 h-32 object-cover rounded-lg shadow-md"
          />
          <div>
            <h2 className="text-lg font-bold text-gray-900">Gracias Por Tu Interés en Maroto II</h2>
            <p className="text-gray-600 text-xs">Nos alegra poder ayudarte a encontrar tu próximo hogar</p>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="space-y-3">
          {/* Sección 1 */}
          <div>
            <h3 className="font-bold text-gray-900 text-sm mb-1">Para ayudarte más rápido</h3>
            <p className="text-gray-700 text-xs">
              Puedes escribirnos directamente y ver disponibilidad actual en tiempo real.
            </p>
          </div>

          {/* CTA WhatsApp */}
          <a
            href="https://wa.me/message/YXNQEVRRCA2ZC1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-3 rounded-lg transition duration-300 shadow-md text-sm"
          >
            <img 
              src="https://i.postimg.cc/05dDNNHy/icono.png" 
              alt="WhatsApp" 
              className="w-4 h-4" 
            />
            Hablar con un asesor ahora
          </a>

          {/* Información del proyecto */}
          <div className="bg-gray-50 p-3 rounded-lg text-xs">
            <h4 className="font-bold text-gray-900 mb-1">Maroto II - Proyecto Exclusivo</h4>
            <p className="text-gray-700 mb-1">
              Maroto II es un proyecto exclusivo de solo <span className="font-semibold">20 departamentos</span> con vista al mar en Concón, por lo que algunas unidades ya están en proceso de evaluación.
            </p>
            <p className="text-gray-600 text-xs">
              <span className="font-semibold">Equipo Inmobiliaria San Fernando</span>
            </p>
          </div>
        </div>

        {/* Botón Finalizar para recargar página */}
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-3 py-1.5 text-xs bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition w-full"
        >
          Finalizar
        </button>
      </div>
    );
  }

  // Versión modal original (para cuando sea necesario)
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden">
        {/* Header con fondo */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-8">
          <h2 className="text-3xl font-bold mb-2">Gracias Por Tu Interés en Maroto II</h2>
          <p className="text-blue-100 text-lg">Nos alegra poder ayudarte a encontrar tu próximo hogar</p>
        </div>

        {/* Contenido */}
        <div className="p-8 space-y-6">
          {/* Mensaje principal */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Para ayudarte más rápido</h3>
            <p className="text-gray-700">
              Puedes escribirnos directamente y ver disponibilidad actual en tiempo real.
            </p>
          </div>

          {/* CTA WhatsApp */}
          <div>
            <a
              href="https://wa.me/message/YXNQEVRRCA2ZC1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg"
            >
              <img 
                src="https://i.postimg.cc/05dDNNHy/icono.png" 
                alt="WhatsApp" 
                className="w-6 h-6" 
              />
              Hablar con un asesor ahora
            </a>
          </div>

          {/* Información del proyecto */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-bold text-gray-900 mb-3">Maroto II - Proyecto Exclusivo</h4>
            <p className="text-gray-700 text-sm mb-3">
              Maroto II es un proyecto exclusivo de solo <span className="font-semibold">20 departamentos</span> con vista al mar en Concón, por lo que algunas unidades ya están en proceso de evaluación.
            </p>
            <p className="text-gray-600 text-xs">
              <span className="font-semibold">Equipo Inmobiliaria San Fernando</span>
            </p>
          </div>

          {/* Botón continuar */}
          <button
            onClick={onContinue}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
