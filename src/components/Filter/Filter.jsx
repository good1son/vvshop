import React from 'react';
import { getCategoryImages } from '@/utils/categoryImages';
import PriceFilter from './PriceFilter/PriceFilter';
import SortFilter from './SortFilter/SortFilter';
import CheckboxFilter from './CheckboxFilter/CheckboxFilter';
import styles from './Filter.module.scss';

const Filter = (props) => {
  const {
    filters,
    categories = [],
    priceBounds,
    onCategoryChange,
    onPriceChange,
    onSortChange,
    onCheckboxChange,
    onReset,
  } = props;

  return (
    <div className={styles.filterPanel}>
      <div className={styles.filterSection}>
        <h3 className={styles.sectionTitle}>Категории</h3>
        <div className={styles.categoryList}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.categoryTile} ${
                filters.category === category ? styles.active : ''
              }`}
              onClick={() => onCategoryChange(category)}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={getCategoryImages(category)}
                  alt={category}
                />
              </div>
              <span className={styles.categoryName}>{category}</span>
            </button>
          ))}
        </div>
      </div>

      <div className={styles.filterSection}>
        <h3 className={styles.sectionTitle}>Цена</h3>
        <PriceFilter
          min={priceBounds.minPrice}
          max={priceBounds.maxPrice}
          value={{
            minPrice: filters.minPrice,
            maxPrice: filters.maxPrice,
          }}
          onChange={onPriceChange}
        />
      </div>

      <div className={styles.filterSection}>
        <h3 className={styles.sectionTitle}>Сортировка</h3>
        <SortFilter
          sortOrder={filters.sortOrder}
          onChange={onSortChange}
        />
      </div>

      <div className={styles.filterSection}>
        <CheckboxFilter
          label='с маркой / номером'
          checked={filters.hasMark}
          onChange={(e) => onCheckboxChange('hasMark', e)}
        />
      </div>

      <button
        className={styles.resetButton}
        onClick={onReset}
      >
        Сбросить все фильтры
      </button>
    </div>
  );
};

export default Filter;
