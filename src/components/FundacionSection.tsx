import React, { useEffect, useRef, useState } from 'react';

export const FundacionSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight && rect.bottom > 0) {
          const progress = (windowHeight - sectionTop) / (windowHeight + rect.height);
          setScrollY(progress);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Movimiento brusco e instantáneo
  const parallaxOffset = scrollY * 600;

  return (
    <section 
      ref={sectionRef}
      className="relative z-20 py-16 bg-gray-100 overflow-hidden min-h-[600px]"
    >
      {/* Solo burbujas/puntos moviéndose rápido - reducidas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grupo 1 - Izquierda */}
        <div 
          className="absolute inset-0"
          style={{ transform: `translateX(${parallaxOffset * 0.5}px) translateY(${parallaxOffset * 0.2}px)` }}
        >
          <div className="absolute w-4 h-4 bg-[#DD5D14]/30 rounded-full top-[10%] left-[8%]" />
          <div className="absolute w-3 h-3 bg-[#8B9CC8]/40 rounded-full top-[28%] left-[12%]" />
          <div className="absolute w-4 h-4 bg-[#DD5D14]/30 rounded-full top-[52%] left-[18%]" />
          <div className="absolute w-3 h-3 bg-[#8B9CC8]/35 rounded-full top-[78%] left-[10%]" />
        </div>

        {/* Grupo 2 - Derecha (dirección opuesta) */}
        <div 
          className="absolute inset-0"
          style={{ transform: `translateX(${-parallaxOffset * 0.45}px) translateY(${-parallaxOffset * 0.15}px)` }}
        >
          <div className="absolute w-4 h-4 bg-[#8B9CC8]/35 rounded-full top-[12%] right-[10%]" />
          <div className="absolute w-3 h-3 bg-[#DD5D14]/30 rounded-full top-[35%] right-[8%]" />
          <div className="absolute w-4 h-4 bg-[#8B9CC8]/30 rounded-full top-[58%] right-[15%]" />
          <div className="absolute w-3 h-3 bg-[#DD5D14]/35 rounded-full top-[82%] right-[12%]" />
        </div>

        {/* Grupo 3 - Centro (más lento) */}
        <div 
          className="absolute inset-0"
          style={{ transform: `translateX(${parallaxOffset * 0.3}px) translateY(${parallaxOffset * 0.35}px)` }}
        >
          <div className="absolute w-4 h-4 bg-[#DD5D14]/20 rounded-full top-[20%] left-[40%]" />
          <div className="absolute w-3 h-3 bg-[#8B9CC8]/25 rounded-full top-[60%] left-[35%]" />
        </div>

        {/* Grupo 4 - Centro-derecha (opuesto) */}
        <div 
          className="absolute inset-0"
          style={{ transform: `translateX(${-parallaxOffset * 0.35}px) translateY(${-parallaxOffset * 0.25}px)` }}
        >
          <div className="absolute w-3 h-3 bg-[#8B9CC8]/30 rounded-full top-[35%] right-[40%]" />
          <div className="absolute w-4 h-4 bg-[#DD5D14]/25 rounded-full top-[75%] right-[38%]" />
        </div>
      </div>

      {/* Contenido principal */}
      <div className="relative max-w-7xl mx-auto px-4 lg:px-8 z-10">
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

// Componente separado para la sección de video parallax
export const VideoParallaxSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Imagen de fondo con efecto parallax */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{ 
          clipPath: 'inset(0 0 0 0)',
        }}
      >
        <img
          src="https://i.postimg.cc/FsmLWqxY/image.png"
          alt="Parallax Section"
          className="w-full h-full object-cover"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
          }}
        />
      </div>
      
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/40 z-10" />
    </section>
  );
};

export default FundacionSection;
