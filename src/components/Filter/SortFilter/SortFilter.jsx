import { GraphDecrease } from '@/assets/images/icons';
import { GraphIncrease } from '@/assets/images/icons';
import styles from './SortFilter.module.scss';

const SortFilter = ({ sortOrder, onChange }) => {
  return (
    <div className={styles.sortFilter}>
      <div className={styles.radioGroup}>
        <button
          type='button'
          className={`${styles.sortButton} ${
            sortOrder === 'price_desc' ? styles.active : ''
          }`}
          onClick={() => onChange('price_desc')}
        >
          <GraphDecrease />
          <span>по убыванию цены</span>
        </button>
        <button
          type='button'
          className={`${styles.sortButton} ${
            sortOrder === 'price_asc' ? styles.active : ''
          }`}
          onClick={() => onChange('price_asc')}
        >
          <GraphIncrease />
          <span>по возрастанию цены</span>
        </button>
      </div>
    </div>
  );
};

export default SortFilter;
