import { useSearchParams } from 'react-router-dom';
import { useCallback, useMemo } from 'react';

const useQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useMemo(() => {
    return {
      category: searchParams.get('category') || '',
      group: searchParams.get('group') || '',
      subcategory: searchParams.get('subcategory') || '',
      hasMark: searchParams.get('hasMark') === 'true',
      minPrice: searchParams.get('minPrice') || '',
      maxPrice: searchParams.get('maxPrice') || '',
      sortOrder: searchParams.get('sortOrder') || '',
      search: searchParams.get('search') || '',
    };
  }, [searchParams]);

  const setParams = useCallback(
    (newParams, options = { replace: false }) => {
      setSearchParams((prev) => {
        const updated = new URLSearchParams(prev);

        Object.entries(newParams).forEach(([key, value]) => {
          if (value === '' || value === null || value === false) {
            updated.delete(key);
          } else if (key === 'hasMark' && value === true) {
            updated.set(key, 'true');
          } else if (value !== undefined && value !== '') {
            updated.set(key, String(value));
          }
        });
        return updated;
      }, options);
    },
    [setSearchParams]
  );

  const clearParams = useCallback(() => {
    setSearchParams({});
  }, [setSearchParams]);

  const removeParam = useCallback(
    (key) => {
      setSearchParams((prev) => {
        const updated = new URLSearchParams(prev);
        updated.delete(key);
        return updated;
      });
    },
    [setSearchParams]
  );

  return { params, setParams, removeParam, clearParams };
};

export default useQueryParams;
