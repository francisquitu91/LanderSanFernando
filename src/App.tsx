import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, HeroSection, VideoParallaxSection, FeaturesSection, EditorialSection, ContactSection, PlantasSection, LocationSection } from './components';
import { useContent } from './hooks/useContent';
import ThanksYouPageFull from './pages/ThanksYouPage';

const HomePage: React.FC = () => {
  const { navigation, hero, error } = useContent();

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-red-500 text-lg mb-4">Error al cargar el contenido</p>
          <p className="text-brand-text">{error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent">
      {/* Navbar */}
      <Navbar items={navigation} />

      {/* Inicio - Hero Section */}
      {hero && <HeroSection content={hero} />}

      {/* El Proyecto */}
      <EditorialSection />

      {/* Parallax */}
      <VideoParallaxSection />

      {/* Características */}
      <FeaturesSection />

      {/* Tipologías */}
      <PlantasSection />

      {/* Ubicación */}
      <LocationSection />

      {/* Footer - Contacto */}
      <ContactSection />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/thanksyou" element={<ThanksYouPageFull />} />
      </Routes>
    </Router>
  );
};

export default App;
