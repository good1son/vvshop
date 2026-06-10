import { logo } from '@/assets/images';
import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.spinner}>
        <img
          src={logo}
          alt='Загрузка'
          className={styles.logo}
        />
      </div>
    </div>
  );
};

export default Loader;
