import clsx from 'clsx';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.scss';

const Navigation = ({ variant, onLinkClick }) => {
  const navItems = [
    { href: '/', label: 'Главная' },
    { href: '/catalog', label: 'Каталог' },
    { href: '/about', label: 'О компании' },
    { href: '/collector', label: 'Справочник коллекционера' },
  ];
  const classes = clsx(styles.navigation, variant && styles[variant]);
  return (
    <nav className={classes}>
      <div className={styles.stripeTop}></div>
      <div className={styles.stripeBottom}></div>
      <ul className={styles.navList}>
        {navItems.map((item) => (
          <li
            key={item.href}
            className={styles.navItem}
          >
            <Link
              to={item.href}
              className={clsx(styles.navLink, 'link')}
              onClick={onLinkClick}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
