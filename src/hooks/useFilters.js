import { useMemo, useCallback } from 'react';
import useSearch from './useSearch';
import useQueryParams from './useQueryParams';

const useFilters = (items) => {
  const { params, setParams, clearParams } = useQueryParams();
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
              !params.category || item.category === params.category
          )
          .map((item) => item.group)
          .filter(Boolean)
      ),
    ],
    [items, params.category]
  );

  const subcategories = useMemo(
    () => [
      ...new Set(
        items
          .filter(
            (item) =>
              (!params.category ||
                item.category === params.category) &&
              (!params.group || item.group === params.group)
          )
          .map((item) => item.subcategory)
          .filter(Boolean)
      ),
    ],
    [items, params.category, params.group]
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
        if (params.category && item.category !== params.category)
          return false;
        if (params.group && item.group !== params.group) return false;
        if (
          params.subcategory &&
          item.subcategory !== params.subcategory
        )
          return false;
        if (params.hasMark && !item.mark) return false;
        return true;
      }),
    [
      items,
      params.category,
      params.group,
      params.subcategory,
      params.hasMark,
    ]
  );

  const filteredByPrice = useMemo(() => {
    const min = params.minPrice
      ? Number(params.minPrice)
      : priceBounds.minPrice;
    const max = params.maxPrice
      ? Number(params.maxPrice)
      : priceBounds.maxPrice;
    return filteredByCategory.filter((item) => {
      const price = Number(item.price);
      if (isNaN(price)) return false;
      return price >= min && price <= max;
    });
  }, [
    filteredByCategory,
    params.minPrice,
    params.maxPrice,
    priceBounds,
  ]);

  const sortedItems = useMemo(() => {
    if (!params.sortOrder || params.sortOrder === '') {
      return filteredByPrice;
    }
    const result = [...filteredByPrice];
    if (params.sortOrder === 'price_asc') {
      return result.sort((a, b) => Number(a.price) - Number(b.price));
    }
    if (params.sortOrder === 'price_desc') {
      return result.sort((a, b) => Number(b.price) - Number(a.price));
    }
    return result;
  }, [filteredByPrice, params.sortOrder]);

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

  const handleCategoryChange = useCallback(
    (category) => {
      const newCategory =
        params.category === category ? '' : category;
      setParams({
        category: newCategory,
        group: '',
        subcategory: '',
      });
    },
    [params.category, setParams]
  );

  const handleGroupChange = useCallback(
    (group) => {
      const newGroup = params.group === group ? '' : group;
      setParams({
        group: newGroup,
        subcategory: '',
      });
    },
    [params.group, setParams]
  );

  const handleSubcategoryChange = useCallback(
    (subcategory) => {
      const newSubCategory =
        params.subcategory === subcategory ? '' : subcategory;
      setParams({
        subcategory: newSubCategory,
      });
    },
    [params.subcategory, setParams]
  );

  const handlePriceChange = useCallback(
    (priceRange) => {
      setParams({
        minPrice: priceRange.minPrice,
        maxPrice: priceRange.maxPrice,
      });
    },
    [setParams]
  );

  const handleSortChange = useCallback(
    (sortOrder) => {
      setParams({
        sortOrder,
      });
    },
    [setParams]
  );

  const handleCheckboxChange = useCallback(
    (key, e) => {
      if (key === 'hasMark') {
        setParams({ hasMark: e.target.checked });
      }
    },
    [setParams]
  );

  const resetFilters = useCallback(() => {
    clearParams();
  }, [clearParams]);

  const handleRemoveFilters = useCallback(
    (key) => {
      const handlers = {
        category: () =>
          setParams({
            category: '',
            group: '',
            subcategory: '',
          }),
        group: () =>
          setParams({
            group: '',
            subcategory: '',
          }),
        subcategory: () => setParams({ subcategory: '' }),
        hasMark: () => setParams({ hasMark: false }),
        sortOrder: () => setParams({ sortOrder: '' }),
        price: () =>
          setParams({
            minPrice: '',
            maxPrice: '',
          }),
        all: resetFilters,
      };
      handlers[key]?.();
    },
    [setParams, resetFilters]
  );

  return {
    filters: {
      category: params.category,
      group: params.group,
      subcategory: params.subcategory,
      hasMark: params.hasMark || false,
      minPrice: params.minPrice,
      maxPrice: params.maxPrice,
      sortOrder: params.sortOrder,
    },
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
