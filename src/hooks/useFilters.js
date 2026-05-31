import { useState, useMemo, useCallback } from 'react';
import useSearch from './useSearch';

const useFilters = (items) => {
  const [filters, setFilters] = useState({
    category: '',
    group: '',
    subcategory: '',
    hasMark: false,
    minPrice: '',
    maxPrice: '',
    sortOrder: '',
  });

  const { searchQuery, setSearchQuery, searchResults } =
    useSearch(items);

  const categories = useMemo(() => {
    const countMap = {};
    const categories = new Set();
    items.forEach((item) => {
      categories.add(item.category);
      countMap[item.category] = (countMap[item.category] || 0) + 1;
    });
    return [...categories]
      .filter(Boolean)
      .sort((a, b) => countMap[b] - countMap[a]);
  }, [items]);

  const groups = useMemo(
    () => [
      ...new Set(
        items
          .filter(
            (item) =>
              !filters.category || item.category === filters.category
          )
          .map((item) => item.group)
          .filter(Boolean)
      ),
    ],
    [items, filters.category]
  );

  const subcategories = useMemo(
    () => [
      ...new Set(
        items
          .filter(
            (item) =>
              (!filters.category ||
                item.category === filters.category) &&
              (!filters.group || item.group === filters.group)
          )
          .map((item) => item.subcategory)
          .filter(Boolean)
      ),
    ],
    [items, filters.category, filters.group]
  );

  const priceBounds = useMemo(() => {
    let maxPrice = -Infinity;

    items.forEach((item) => {
      const price = Number(item.price);
      if (!isNaN(price)) {
        maxPrice = Math.max(maxPrice, price);
      }
    });
    return {
      minPrice: 0,
      maxPrice: maxPrice === -Infinity ? 0 : maxPrice,
    };
  }, [items]);

  const filteredByCategory = useMemo(
    () =>
      items.filter((item) => {
        if (filters.category && item.category !== filters.category)
          return false;
        if (filters.group && item.group !== filters.group)
          return false;
        if (
          filters.subcategory &&
          item.subcategory !== filters.subcategory
        )
          return false;
        if (filters.hasMark && !item.mark) return false;
        return true;
      }),
    [
      items,
      filters.category,
      filters.group,
      filters.subcategory,
      filters.hasMark,
    ]
  );

  const filteredByPrice = useMemo(() => {
    const min = filters.minPrice
      ? Number(filters.minPrice)
      : priceBounds.minPrice;
    const max = filters.maxPrice
      ? Number(filters.maxPrice)
      : priceBounds.maxPrice;
    return filteredByCategory.filter((item) => {
      const price = Number(item.price);
      if (isNaN(price)) return false;
      return price >= min && price <= max;
    });
  }, [
    filteredByCategory,
    filters.minPrice,
    filters.maxPrice,
    priceBounds,
  ]);

  const sortedItems = useMemo(() => {
    if (!filters.sortOrder || filters.sortOrder === '') {
      return filteredByPrice;
    }
    const result = [...filteredByPrice];
    if (filters.sortOrder === 'price_asc') {
      return result.sort((a, b) => Number(a.price) - Number(b.price));
    }
    if (filters.sortOrder === 'price_desc') {
      return result.sort((a, b) => Number(b.price) - Number(a.price));
    }
    return result;
  }, [filteredByPrice, filters.sortOrder]);

  const filteredItems = useMemo(() => {
    let result = sortedItems;

    if (searchResults.length > 0) {
      const searchIds = new Set(searchResults.map((r) => r.id));
      result = result.filter((item) => searchIds.has(item.id));
    } else if (searchQuery.trim()) {
      return [];
    }
    return result;
  }, [sortedItems, searchQuery, searchResults]);

  const handleCategoryChange = useCallback((category) => {
    setFilters((prev) => ({
      ...prev,
      category: prev.category === category ? '' : category,
      group: '',
      subcategory: '',
    }));
  }, []);

  const handleGroupChange = useCallback((group) => {
    setFilters((prev) => ({
      ...prev,
      group: prev.group === group ? '' : group,
      subcategory: '',
    }));
  }, []);

  const handleSubcategoryChange = useCallback((subcategory) => {
    setFilters((prev) => ({
      ...prev,
      subcategory:
        prev.subcategory === subcategory ? '' : subcategory,
    }));
  }, []);

  const handlePriceChange = useCallback((priceRange) => {
    setFilters((prev) => ({
      ...prev,
      minPrice: priceRange.minPrice,
      maxPrice: priceRange.maxPrice,
    }));
  }, []);

  const handleSortChange = useCallback((sortOrder) => {
    setFilters((prev) => ({
      ...prev,
      sortOrder,
    }));
  }, []);

  const handleCheckboxChange = useCallback((key, e) => {
    setFilters((prev) => ({
      ...prev,
      [key]: e.target.checked,
    }));
  }, []);

  const resetFilters = useCallback(() => {
    setFilters({
      category: '',
      group: '',
      subcategory: '',
      hasMark: false,
      minPrice: '',
      maxPrice: '',
      sortOrder: '',
    });
    setSearchQuery('');
  }, []);

  const handleRemoveFilters = useCallback(
    (key) => {
      const handlers = {
        category: () =>
          setFilters((prev) => ({
            ...prev,
            category: '',
            group: '',
            subcategory: '',
          })),
        group: () =>
          setFilters((prev) => ({
            ...prev,
            group: '',
            subcategory: '',
          })),
        subcategory: () =>
          setFilters((prev) => ({ ...prev, subcategory: '' })),
        hasMark: () =>
          setFilters((prev) => ({ ...prev, hasMark: false })),
        sortOrder: () =>
          setFilters((prev) => ({ ...prev, sortOrder: '' })),
        price: () =>
          setFilters((prev) => ({
            ...prev,
            minPrice: '',
            maxPrice: '',
          })),
        all: resetFilters,
      };
      handlers[key]?.();
    },
    [resetFilters]
  );

  return {
    filters,
    categories,
    groups,
    subcategories,
    priceBounds,
    filteredItems,
    searchQuery,
    setSearchQuery,
    handleCategoryChange,
    handleGroupChange,
    handleSubcategoryChange,
    handlePriceChange,
    handleSortChange,
    handleCheckboxChange,
    resetFilters,
    handleRemoveFilters,
  };
};

export default useFilters;
