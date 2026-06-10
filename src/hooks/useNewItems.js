import useItemsStore from '@/stores/useItemsStore';
import { useMemo } from 'react';
import usePreviewCard from '@/hooks/usePreviewCard';

const useNewItems = (limit = 8) => {
  const items = useItemsStore((state) => state.items);

  const newItems = useMemo(() => {
    return [...items].sort((a, b) => b.id - a.id).slice(0, limit);
  }, [items, limit]);

  return usePreviewCard(newItems);
};

export default useNewItems;
