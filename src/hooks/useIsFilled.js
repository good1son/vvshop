import { useMemo } from 'react';

const useIsFilled = (value, mask) => {
  return useMemo(() => {
    if (!value) return false;
    if (mask) {
      const digitsOnly = value.replace(/\D/g, '');
      return digitsOnly.length > 1;
    }

    return value.length > 0;
  }, [value, mask]);
};

export default useIsFilled;
