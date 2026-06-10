import styles from './CardPreview.module.scss';

const CardPreview = ({ item, onClick }) => {
  return (
    <div
      className={styles.card}
      onClick={onClick}
    >
      <div className={styles.imageWrapper}>
        <img
          src={item.photo}
          alt={item.title}
        />
      </div>
    </div>
  );
};

export default CardPreview;
