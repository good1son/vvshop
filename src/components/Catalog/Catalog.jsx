import useCatalog from '@/hooks/useCatalog';
import useFilters from '@/hooks/useFilters';
import useModal from '@/hooks/useModal';
import useStickyScroll from '@/hooks/useStickyScroll';
import SearchInput from '../shared/SearchInput/SearchInput';
import Filter from '../Filter/Filter';
import MobileFilter from '../Filter/MobileFilter/MobileFilter';
import ActiveFilters from '../Filter/ActiveFilters/ActiveFilters';
import Card from '../Card/Card';
import OrderModal from '../OrderModal/OrderModal';
import { items } from '@/data';
import styles from './Catalog.module.scss';
import { FilterIcon } from '@/assets/images/icons';

const Catalog = () => {
  const {
    selectedItem,
    handleOrder,
    handleCardClick,
    closeModal,
    isModalOpen,
  } = useCatalog();

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
                  onClick={handleCardClick}
                  onOrder={handleOrder}
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

      <OrderModal
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default Catalog;
