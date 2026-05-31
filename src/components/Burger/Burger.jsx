import clsx from 'clsx';
import styles from './Burger.module.scss';

const Burger = ({ isOpen, onClick }) => {
  const classes = clsx(styles.burger, isOpen && styles.isActive);
  return (
    <button
      className={classes}
      onClick={onClick}
      aria-label='Мобильное меню'
      aria-expanded={isOpen}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default Burger;
