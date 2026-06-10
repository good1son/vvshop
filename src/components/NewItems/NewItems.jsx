import clsx from 'clsx';
import useNewItems from '@/hooks/useNewItems';
import ItemSlider from '@/components/shared/ItemSlider/ItemSlider';
import { camera } from '@/assets/images';
import styles from './NewItem.module.scss';

const NewItems = () => {
  const newItems = useNewItems();

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
            Встречайте последние сокровища, занявшие своё место в нашей
            коллекции! Уникальные предметы старины, каждый со своей историей,
            ждут своих ценителей.
          </p>
          <div className={styles.decor}>
            <img
              src={camera}
              alt='Декоративная картинка'
            />
          </div>
        </div>
        <ItemSlider items={newItems} />
      </div>
    </section>
  );
};

export default NewItems;
