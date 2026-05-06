import React, { useState, useEffect } from 'react';
import { NavigationItem } from '../types';

interface NavbarProps {
  items: NavigationItem[];
  logoSrc?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  items, 
  logoSrc = 'https://i.postimg.cc/ZnG6nMhq/image-removebg-preview.png' 
}) => {
  const [activeSection, setActiveSection] = useState<string>('inicio');

  // Detectar sección visible cuando el usuario hace scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'features', 'plantas', 'ubicacion'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Si la sección está en el viewport superior, marcarla como activa
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    const sectionId = path.replace('#', '');
    const element = document.getElementById(sectionId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <header className="fixed top-0 w-full z-[9999] flex justify-between items-center px-8 h-header bg-white shadow-md">
      {/* Logo Izquierda */}
      <div className="w-48 flex-shrink-0">
        <img 
          src={logoSrc} 
          alt="Co-crecer Logo" 
          className="h-20 w-auto" 
        />
      </div>

      {/* Navegación Central */}
      <nav className="flex-1 flex justify-center">
        <ul className="flex list-none px-2 py-1 gap-4">
          {items.map((item) => (
            <li key={item.id} className="relative list-none">
              <a
                href={item.path}
                onClick={(e) => handleNavClick(e, item.path)}
                className={`
                  block px-5 py-2 text-sm font-medium transition-all duration-200 mx-1 border-b-2
                  ${activeSection === item.path.replace('#', '')
                    ? 'text-red-600 border-red-600'
                    : 'text-gray-700 hover:text-gray-900 border-transparent'
                  }
                `}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Botón Cotiza Derecha */}
      <div className="flex-shrink-0">
        <a
          href="https://wa.me/message/YXNQEVRRCA2ZC1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-2 bg-teal-500 hover:bg-teal-600 text-white text-sm font-semibold rounded-lg transition-colors"
        >
          <img 
            src="https://i.postimg.cc/05dDNNHy/icono.png" 
            alt="WhatsApp" 
            className="w-4 h-4" 
          />
          Cotiza
        </a>
      </div>
    </header>
  );
};

export default Navbar;
