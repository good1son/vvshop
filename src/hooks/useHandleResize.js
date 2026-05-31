import { useEffect } from 'react';

const useHandleResize = (isOpen, close, breakpoint) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > breakpoint && isOpen) {
        close();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen, close, breakpoint]);
};

export default useHandleResize;
