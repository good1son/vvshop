import useItemsStore from '@/stores/useItemsStore';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import usePhotoNavigation from '@/hooks/usePhotoNavigation';
import Loader from '@/components/shared/Loader/Loader';
import { getRandomItems } from '@/utils/random';

const useCardDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const getItemById = useItemsStore((state) => state.getItemById);
  const getSimilarItems = useItemsStore((state) => state.getItemsBySubcategory);
  const getAuthorItems = useItemsStore((state) => state.getItemsByAuthor);
  const loading = useItemsStore((state) => state.loading);
  const error = useItemsStore((state) => state.error);

  const item = getItemById(id);

  const similarItems = useMemo(() => {
    return getSimilarItems(item?.subcategory).filter((i) => i.id !== item.id);
  }, [getSimilarItems, item]);

  const authorItems = useMemo(() => {
    return getAuthorItems(item?.author).filter((i) => i.id !== item.id);
  }, [getAuthorItems, item]);

  const randomSimilar = useMemo(
    () => getRandomItems(similarItems),
    [similarItems]
  );
  const randomAuthor = useMemo(
    () => getRandomItems(authorItems),
    [authorItems]
  );

  const { currentPhoto, nextPhoto, prevPhoto, goToPhoto } = usePhotoNavigation(
    item?.photos
  );

  const properties = item
    ? [
        { label: 'Автор: ', value: item.author },
        { label: 'Производство: ', value: item.manufacture },
        { label: 'Эпоха: ', value: item.year },
        { label: 'Категория: ', value: item.category },
        { label: 'Марка: ', value: item.mark },
        { label: 'Сохранность: ', value: item.condition },
        { label: 'Размеры: ', value: item.dimensions },
        { label: 'Описание: ', value: item.description },
      ]
    : [];

  const goBack = () => navigate('/');

  return {
    item,
    similarItems: randomSimilar,
    authorItems: randomAuthor,
    loading,
    error,
    properties,
    currentPhoto,
    nextPhoto,
    prevPhoto,
    goToPhoto,
    goBack,
  };
};

export default useCardDetail;
