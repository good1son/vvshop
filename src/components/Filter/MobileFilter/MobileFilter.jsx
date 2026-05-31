import Filter from '../Filter';
import styles from './MobileFilter.module.scss';

const MobileFilter = ({ isOpen, onClose, ...props }) => {
  if (!isOpen) return null;

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
    >
      <div
        className={styles.container}
        onClick={(e) => e.stopPropagation()}
      >
        <Filter {...props} />
      </div>
    </div>
  );
};

export default MobileFilter;
