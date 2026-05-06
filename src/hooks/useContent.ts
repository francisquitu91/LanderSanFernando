import { useState, useEffect } from 'react';
import { NavigationItem, HeroContent } from '../types';

// Datos mock para desarrollo (simula respuesta de Supabase)
const mockNavigationItems: NavigationItem[] = [
  { id: 1, label: 'Inicio', path: '#inicio', isActive: true },
  { id: 2, label: 'Características', path: '#features', isActive: false },
  { id: 3, label: 'Tipologías', path: '#plantas', isActive: false },
  { id: 4, label: 'Ubicación', path: '#ubicacion', isActive: false },
];

const mockHeroContent: HeroContent = {
  title: '',
  backgroundImageUrl: '/assets/hero-background.jpg',
  backgroundVideoUrl: '/assets/2340-157269921.mp4',
  logoUrl: 'https://i.postimg.cc/x8S7fDJm/daeqeq.png',
  overlayOpacity: 0.15,
};

// Simula delay de red
const simulateNetworkDelay = <T>(data: T, delay = 500): Promise<T> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), delay);
  });
};

interface UseContentReturn {
  navigation: NavigationItem[];
  hero: HeroContent | null;
  isLoading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

export const useContent = (): UseContentReturn => {
  const [navigation, setNavigation] = useState<NavigationItem[]>([]);
  const [hero, setHero] = useState<HeroContent | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchContent = async (): Promise<void> => {
    setIsLoading(true);
    setError(null);

    try {
      // Simula llamadas paralelas a Supabase
      const [navData, heroData] = await Promise.all([
        simulateNetworkDelay(mockNavigationItems),
        simulateNetworkDelay(mockHeroContent),
      ]);

      setNavigation(navData);
      setHero(heroData);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Error desconocido'));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchContent();
  }, []);

  return {
    navigation,
    hero,
    isLoading,
    error,
    refetch: fetchContent,
  };
};

// Hook para actualizar el item activo de navegación
export const useActiveNavigation = (
  items: NavigationItem[],
  currentPath: string
): NavigationItem[] => {
  return items.map((item) => ({
    ...item,
    isActive: item.path === currentPath,
  }));
};

export default useContent;
