import clsx from 'clsx';
import styles from './ActiveFilters.module.scss';

const ActiveFilters = ({ filters, onRemove }) => {
  const chips = [];
  if (filters.category) {
    chips.push({
      key: 'category',
      label: `${filters.category}`,
    });
  }
  if (filters.group) {
    chips.push({
      key: 'group',
      label: `${filters.group}`,
    });
  }
  if (filters.subcategory) {
    chips.push({
      key: 'subcategory',
      label: `${filters.subcategory}`,
    });
  }
  if (filters.hasMark) {
    chips.push({
      key: 'hasMark',
      label: 'с маркой / номером',
    });
  }
  if (filters.sortOrder === 'price_asc') {
    chips.push({
      key: 'sortOrder',
      label: 'по возрастанию цены',
    });
  }
  if (filters.sortOrder === 'price_desc') {
    chips.push({
      key: 'sortOrder',
      label: 'по убыванию цены',
    });
  }
  if (filters.minPrice || filters.maxPrice) {
    chips.push({
      key: 'price',
      label: `От: ${filters.minPrice || 0}₽ — ${filters.maxPrice}₽`,
    });
  }
  const hasChips = chips.length > 0;

  return (
    <div className={clsx(styles.wrapper, hasChips && styles.show)}>
      <div className={styles.chips}>
        {chips.map((chip) => (
          <div
            key={chip.key}
            className={styles.chip}
          >
            <span>{chip.label}</span>
            <button
              className={styles.removeButton}
              onClick={() => onRemove(chip.key)}
            >
              X
            </button>
          </div>
        ))}

        <button
          className={styles.clearAllButton}
          onClick={() => onRemove('all')}
        >
          Сбросить всё
        </button>
      </div>
    </div>
  );
};

export default ActiveFilters;
