import useItemsStore from '@/stores/useItemsStore';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const useCatalog = () => {
  const items = useItemsStore((state) => state.items);
  const loading = useItemsStore((state) => state.loading);
  const error = useItemsStore((state) => state.error);
  const navigate = useNavigate();

  const handleCardClick = useCallback(
    (item) => {
      navigate(`/catalog/${item.id}`);
    },
    [navigate]
  );

  return {
    items,
    loading,
    error,
    handleCardClick,
  };
};

export default useCatalog;
