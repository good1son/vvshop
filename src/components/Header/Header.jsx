import { useMobileMenu } from '@/hooks/useMobileMenu';
import { useScrollToSection } from '@/hooks/useScrollToSection';
import Navigation from '../shared/Navigation/Navigation';
import Button from '../shared/Button/Button';
import Burger from '../Burger/Burger';
import MobileMenu from '../MobileMenu/MobileMenu';
import styles from './Header.module.scss';
import { logo } from '@/assets/images';

const Header = () => {
  const { isOpen, toggle, close } = useMobileMenu();
  const scrollToSection = useScrollToSection();

  return (
    <header className={`${styles.header}`}>
      <div className={styles.content}>
        <div className={styles.company}>
          <div className={styles.stripeTop}></div>
          <div className={styles.stripeBottom}></div>
          <img
            className={styles.logo}
            src={logo}
            alt='Логотип компании'
          />
          <h2 className={styles.title}>
            <div className={styles.stripeTop}></div>
            <div className={styles.stripeBottom}></div>«Вне Времени»
          </h2>
        </div>
        <Navigation variant='header' />
        <Button
          variant={'header'}
          onClick={() => scrollToSection('contact')}
        >
          Связаться с нами
        </Button>
        <Burger
          isOpen={isOpen}
          onClick={toggle}
        ></Burger>
        <MobileMenu
          isOpen={isOpen}
          closeMenu={close}
        />
      </div>
    </header>
  );
};

export default Header;
