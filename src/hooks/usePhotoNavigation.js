import { useState } from 'react';

const usePhotoNavigation = (photos) => {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhoto(
      (prev) => (prev - 1 + photos.length) % photos.length
    );
  };

  const goToPhoto = (index) => {
    setCurrentPhoto(index);
  };

  return { currentPhoto, nextPhoto, prevPhoto, goToPhoto };
};

export default usePhotoNavigation;
