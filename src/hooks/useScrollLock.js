import { useEffect } from 'react';

const useScrollLock = (lock) => {
  useEffect(() => {
    if (lock) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [lock]);
};

export default useScrollLock;
