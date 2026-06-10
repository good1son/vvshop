import useCatalog from '@/hooks/useCatalog';
import useFilters from '@/hooks/useFilters';
import useModal from '@/hooks/useModal';
import useStickyScroll from '@/hooks/useStickyScroll';
import useOrderModal from '@/hooks/useOrderModal';
import SearchInput from '@/components/shared/SearchInput/SearchInput';
import Filter from '@/components/Filter/Filter';
import MobileFilter from '@/components/Filter/MobileFilter/MobileFilter';
import ActiveFilters from '@/components/Filter/ActiveFilters/ActiveFilters';
import Card from '@/components/Card/Card';
import OrderModal from '@/components/OrderModal/OrderModal';
import Loader from '@/components/shared/Loader/Loader';
import { FilterIcon } from '@/assets/images/icons';
import styles from './Catalog.module.scss';

const Catalog = () => {
  const { items, loading, error, handleCardClick } = useCatalog();
  const { openModal } = useOrderModal();

  const {
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
  } = useFilters(items);

  const {
    isOpen: isFilterOpen,
    open: openFilter,
    close: closeFilter,
  } = useModal();

  const filterRef = useStickyScroll(filteredItems);

  const filterProps = {
    filters,
    categories,
    groups,
    subcategories,
    priceBounds,
    onCategoryChange: handleCategoryChange,
    onGroupChange: handleGroupChange,
    onSubcategoryChange: handleSubcategoryChange,
    onPriceChange: handlePriceChange,
    onSortChange: handleSortChange,
    onCheckboxChange: handleCheckboxChange,
    onReset: resetFilters,
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  if (items.length === 0) {
    return <div>Товаров пока нет...</div>;
  }

  return (
    <>
      <section className={styles.catalog}>
        <div
          ref={filterRef}
          className={styles.filter}
        >
          <Filter {...filterProps} />
        </div>

        <div className={styles.content}>
          <div className={styles.topBar}>
            <button
              className={styles.filterButton}
              onClick={openFilter}
              aria-label='Открыть фильтры'
            >
              <FilterIcon />
            </button>
            <SearchInput
              value={searchQuery}
              onChange={setSearchQuery}
            />
          </div>
          <ActiveFilters
            filters={filters}
            onRemove={handleRemoveFilters}
          />
          <div className={styles.cards}>
            {filteredItems.length === 0 ? (
              <p className={styles.noResults}>Ничего не найдено</p>
            ) : (
              filteredItems.map((item) => (
                <Card
                  key={item.id}
                  item={item}
                  onClick={() => handleCardClick(item)}
                  onOrder={openModal}
                />
              ))
            )}
          </div>
        </div>
      </section>

      <MobileFilter
        isOpen={isFilterOpen}
        onClose={closeFilter}
        {...filterProps}
      />
    </>
  );
};

export default Catalog;
