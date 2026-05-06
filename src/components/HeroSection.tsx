import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeroContent } from '../types';
import { DynamicForm } from './DynamicForm';
import { ThankYouPage } from './ThankYouPage';

interface HeroProps {
  content: HeroContent;
}

export const HeroSection: React.FC<HeroProps> = ({ content: _content }) => {
  void _content;
  const navigate = useNavigate();
  
  const [formStep, setFormStep] = useState<'initial' | 'dynamic' | 'thankYou'>('initial');
  
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    rut: '',
    rentaAproximada: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario inicial enviado:', formData);
    setFormStep('dynamic');
  };

  const handleDynamicFormComplete = (allData: any) => {
    console.log('Todos los datos del formulario:', allData);
    setFormStep('thankYou');
  };

  const handleCloseModal = () => {
    setFormStep('initial');
  };

  const handleContinueToFinal = () => {
    navigate('/thanksyou');
  };

  return (
    <>
      {/* Fondo fijo (parallax) - Video o Imagen */}
      <div className="hero-parallax-bg" aria-hidden="true">
        <img
          src="https://i.postimg.cc/rw3K5Yns/Imagenportadasanfernando.png"
          alt="Hero Background"
          className="hero-image"
        />
        {/* Overlay negro sobre el fondo */}
        <div
          className="hero-overlay"
          style={{ backgroundColor: 'black', opacity: 0.4 }}
        />
      </div>

      {/* Sección Hero con contenido */}
      <section id="inicio" className="relative w-full h-screen flex flex-col md:flex-row md:items-center overflow-hidden z-10 px-4 md:px-8 lg:px-16 pt-20 md:pt-0 md:justify-between" data-form-container>
        {/* Contenido Izquierda - Solo visible en desktop */}
        <div className="hidden md:flex flex-1 text-white max-w-lg">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">20 exclusivos departamentos</h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">Todos con vista al mar, el verano se vive en Concón</p>
            
            {/* Opciones de departamentos */}
            <div className="flex gap-8 mb-8">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏠</span>
                <span className="text-sm">3 dorm | 2 baños</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏠</span>
                <span className="text-sm">2 dorm | 2 baños</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contenido mobile - Solo visible en celular, antes del formulario */}
        <div className="md:hidden flex flex-col text-white mb-4 w-full">
          <h2 className="text-lg font-bold mb-1">20 exclusivos departamentos</h2>
          <p className="text-white/90 text-xs mb-3">Todos con vista al mar en Concón</p>
          
          {/* Opciones de departamentos - lado a lado */}
          <div className="flex gap-4">
            <div className="flex items-center gap-1">
              <span className="text-xl">🏠</span>
              <span className="text-xs font-medium">3 dorm | 2 baños</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-xl">🏠</span>
              <span className="text-xs font-medium">2 dorm | 2 baños</span>
            </div>
          </div>
        </div>

        {/* Formulario - Desktop a la derecha, Mobile a todo ancho */}
        <div className="w-full md:max-w-sm bg-white rounded-lg p-1.5 md:p-2 shadow-xl md:ml-auto md:mr-8 md:mt-16">
          {formStep === 'initial' ? (
            <>
              <h2 className="hidden md:block text-base font-bold text-gray-900 mb-0.5">Ingresa tus datos para cotizar una propiedad</h2>
              <p className="hidden md:block text-gray-600 text-xs mb-2">Completa el formulario y nos pondremos en contacto contigo a la brevedad.</p>
              
              {/* Mobile */}
              <h3 className="md:hidden text-xs font-bold text-gray-900 mb-1">Cotiza tu propiedad</h3>
              <p className="md:hidden text-gray-600 text-xs mb-2">Completa el formulario y nos contactaremos</p>
              
              <form onSubmit={handleSubmit} className="space-y-1 md:space-y-1.5">
                <div>
                  <label className="block text-xs font-medium text-gray-900 mb-0.5">Nombre</label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    placeholder="Ej. María"
                    className="w-full px-2 py-1 md:px-3 md:py-1.5 text-xs md:text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-900 mb-0.5">Apellido</label>
                  <input
                    type="text"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleInputChange}
                    placeholder="Ej. González"
                    className="w-full px-2 py-1 md:px-3 md:py-1.5 text-xs md:text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-900 mb-0.5">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="maria.gonzalez@email.com"
                    className="w-full px-2 py-1 md:px-3 md:py-1.5 text-xs md:text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-900 mb-0.5">Teléfono</label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    placeholder="+56 9 1234 5678"
                    className="w-full px-2 py-1 md:px-3 md:py-1.5 text-xs md:text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-900 mb-0.5">Rut</label>
                  <input
                    type="text"
                    name="rut"
                    value={formData.rut}
                    onChange={handleInputChange}
                    placeholder="12.345.678-9"
                    className="w-full px-2 py-1 md:px-3 md:py-1.5 text-xs md:text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-900 mb-0.5">Renta Aproximada</label>
                  <select
                    name="rentaAproximada"
                    value={formData.rentaAproximada}
                    onChange={handleInputChange}
                    className="w-full px-2 py-1 md:px-3 md:py-1.5 text-xs md:text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  >
                    <option value="">Selecciona un rango</option>
                    <option value="1-500">$1.000 - $500.000</option>
                    <option value="500-1000">$500.000 - $1.000.000</option>
                    <option value="1000+">$1.000.000+</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-1.5 md:py-2 text-xs md:text-sm rounded-lg transition-colors mt-2"
                >
                  Cotizar
                </button>

                <p className="text-xs text-gray-600 text-center mt-1.5">
                  Al enviar este formulario, aceptas ser contactado.{' '}
                  <a href="#" className="text-teal-500 hover:underline">Políticas de privacidad</a>
                </p>
              </form>
            </>
          ) : formStep === 'dynamic' ? (
            <DynamicForm
              initialData={formData}
              onComplete={handleDynamicFormComplete}
              onBack={handleCloseModal}
            />
          ) : formStep === 'thankYou' ? (
            <ThankYouPage
              onContinue={handleContinueToFinal}
              onBack={() => setFormStep('dynamic')}
              phoneNumber="YXNQEVRRCA2ZC"
              inline={true}
            />
          ) : null}
        </div>
      </section>
    </>
  );
};

export default HeroSection;
