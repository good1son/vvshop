import { useState, useEffect } from 'react';
import { mobileSlides, desktopSlides } from '../components/Hero/heroSlides';

export const useHeroSlides = () => {
  const [slides, setSlides] = useState(desktopSlides);

  useEffect(() => {
    const handleResize = () => {
      setSlides(window.innerWidth <= 768 ? mobileSlides : desktopSlides);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return slides;
};
