import { useState, useMemo, useCallback } from 'react';
import MiniSearch from 'minisearch';
import useQueryParams from './useQueryParams';

const useSearch = (items) => {
  const { params, setParams } = useQueryParams();
  const searchQuery = params.search || '';

  const setSearchQuery = useCallback(
    (value) => {
      setParams({ search: value });
    },
    [setParams]
  );

  const miniSearchInstance = useMemo(() => {
    if (!items || items.length === 0) return null;

    const miniSearch = new MiniSearch({
      fields: ['title'],
      searchOptions: {
        prefix: true,
        fuzzy: 0.2,
        combineWith: 'AND',
      },
    });

    miniSearch.addAll(items);
    return miniSearch;
  }, [items]);

  const searchResults = useMemo(() => {
    const query = searchQuery.trim();
    if (!query || !miniSearchInstance) return [];
    return miniSearchInstance.search(query);
  }, [searchQuery, miniSearchInstance]);

  return {
    searchQuery,
    setSearchQuery,
    searchResults,
  };
};

export default useSearch;
