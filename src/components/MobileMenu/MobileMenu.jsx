import clsx from 'clsx';
import { useScrollToSection } from '@/hooks/useScrollToSection';
import Navigation from '../shared/Navigation/Navigation';
import Button from '../shared/Button/Button';
import Socials from '../shared/Socials/Socials';
import { logo } from '@/assets/images';
import styles from './MobileMenu.module.scss';

const MobileMenu = ({ isOpen, closeMenu }) => {
  const scrollToSection = useScrollToSection();
  const handleContactClick = () => {
    scrollToSection('contact');
    closeMenu();
  };

  return (
    <div className={clsx(styles.mobileMenu, isOpen && styles.open)}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img
            src={logo}
            alt=''
            width='100'
            height='100'
          />
        </div>
        <Navigation
          variant={'mobile'}
          onLinkClick={closeMenu}
        />
        <div className={styles.contacts}>
          <Button
            variant={'mobile'}
            onClick={handleContactClick}
          >
            Связаться с нами
          </Button>
          <Socials variant={'mobile'} />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
