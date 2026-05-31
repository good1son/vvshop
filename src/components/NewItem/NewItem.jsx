import clsx from 'clsx';
import NewItemSlider from './NewItemSlider';
import { camera } from '@/assets/images';
import styles from './NewItem.module.scss';
import { itemsPreview } from '@/data';

const NewItem = () => {
  return (
    <section className={styles.newItem}>
      <div className={clsx(styles.container, 'container')}>
        <div className={styles.itemTop}>
          <h2 className={clsx(styles.title, 'title')}>
            Новые
            <br />
            поступления
          </h2>
          <p className={clsx(styles.itemDescription, 'description')}>
            Встречайте последние сокровища, занявшие своё место в
            нашей коллекции! Уникальные предметы старины, каждый со
            своей историей, ждут своих ценителей.
          </p>
          <div className={styles.decor}>
            <img
              src={camera}
              alt='Декоративная картинка'
            />
          </div>
        </div>
        <NewItemSlider products={itemsPreview} />
      </div>
    </section>
  );
};

export default NewItem;
