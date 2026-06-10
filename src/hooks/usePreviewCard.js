import { useMemo } from 'react';

const usePreviewCard = (items) => {
  const previewItems = useMemo(() => {
    if (!items?.length) return [];
    return items.map((item) => ({
      id: item.id,
      title: item.title,
      photo: item.photos?.[0],
    }));
  }, [items]);

  return previewItems;
};

export default usePreviewCard;
