import React from 'react';
import { CloseIcon } from '@/assets/images/icons';
import styles from './SearchInput.module.scss';

const SearchInput = ({ value, onChange }) => {
  const handleClear = () => {
    onChange('');
  };

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        type='text'
        placeholder='поиск предметов...'
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {value && (
        <button
          className={styles.clearButton}
          onClick={handleClear}
          aria-label='Очистить поле'
        >
          <CloseIcon />
        </button>
      )}
    </div>
  );
};

export default SearchInput;
