import React from 'react';

export const ContactSection: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-12">¿Tienes dudas? Contáctanos</h2>
          
          {/* Contact Options - Simplified */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-12 mb-12 flex-wrap">
            {/* Call */}
            <div>
              <p className="text-gray-400 text-sm mb-2">Llamar a Piloto</p>
              <a
                href="tel:+56944017547"
                className="text-blue-400 hover:text-blue-300 text-xl font-semibold transition"
              >
                +56 9 4401 7547
              </a>
            </div>

            {/* WhatsApp Chat */}
            <div>
              <p className="text-gray-400 text-sm mb-2">Chat WhatsApp</p>
              <a
                href="https://wa.me/message/YXNQEVRRCA2ZC1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 text-xl font-semibold transition"
              >
                <img 
                  src="https://i.postimg.cc/05dDNNHy/icono.png" 
                  alt="WhatsApp" 
                  className="w-6 h-6" 
                />
                Conectar
              </a>
            </div>

            {/* Quote */}
            <div>
              <p className="text-gray-400 text-sm mb-2">Cotizar</p>
              <a
                href="#"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-purple-400 hover:text-purple-300 text-xl font-semibold transition"
              >
                Solicitar
              </a>
            </div>
          </div>
        </div>

        {/* Company Info */}
        <div className="border-t border-gray-700 pt-12 pb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Company Name */}
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Inmobiliaria San Fernando</h3>
              <p className="text-gray-400 text-sm">Proyectos inmobiliarios exclusivos con excelencia</p>
            </div>

            {/* Address */}
            <div>
              <p className="text-gray-400 text-sm">Calle El Alba 3, Parcela 15, Colina, Santiago, Chile</p>
            </div>

            {/* Phone */}
            <div>
              <a
                href="tel:+56232632477"
                className="text-blue-400 hover:text-blue-300 transition text-sm"
              >
                Teléfono: (+562) 32632477
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400 mb-8 border-t border-gray-700 pt-8">
            <a href="#" className="hover:text-white transition">Privacidad</a>
            <a href="#" className="hover:text-white transition">Términos</a>
            <a href="#" className="hover:text-white transition">Contacto</a>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-500 text-xs">
            <p>© 2026 Inmobiliaria San Fernando. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
