import { useState, useMemo } from 'react';
import MiniSearch from 'minisearch';

const useSearch = (items) => {
  const [searchQuery, setSearchQuery] = useState('');

  // 1. Создаем индекс ОДИН РАЗ (только если изменился сам массив items)
  const miniSearchInstance = useMemo(() => {
    if (!items || items.length === 0) return null;

    const miniSearch = new MiniSearch({
      fields: ['title'],
      searchOptions: {
        prefix: true,
        fuzzy: 0.1,
        combineWith: 'AND',
      },
    });

    miniSearch.addAll(items);
    return miniSearch;
  }, [items]); // Пересоздается ТОЛЬКО если изменились исходные товары

  // 2. Вычисляем результаты СИНХРОННО (без useEffect и лишних стейтов)
  const searchResults = useMemo(() => {
    const query = searchQuery.trim();

    // Если запрос пустой или индекс еще не готов — отдаем пустой массив
    if (!query || !miniSearchInstance) return [];

    // MiniSearch вернет массив объектов, содержащих данные из storeFields
    return miniSearchInstance.search(query);
  }, [searchQuery, miniSearchInstance]); // Запускается только при вводе букв

  return {
    searchQuery,
    setSearchQuery,
    searchResults,
  };
};

export default useSearch;
