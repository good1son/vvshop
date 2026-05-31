import useScrollTop from '@/hooks/useScrollTop';
import Map from '../shared/Map/Map';
import Navigation from '../shared/Navigation/Navigation';
import Contacts from '../Contacts/Contacts';
import styles from './Footer.module.scss';

const Footer = () => {
  const scrollTop = useScrollTop();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.stripeTop}></div>
        <div className={styles.stripeBottom}></div>
        <Map />
        <Navigation variant='footer' />
        <Contacts />
      </div>
      <button
        className={styles.scrollTop}
        onClick={scrollTop}
      ></button>
    </footer>
  );
};

export default Footer;
