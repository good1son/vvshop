import styles from './CardPreview.module.scss';

const CardPreview = ({ photo, country, year }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={photo}
          alt={`${country} ${year}`}
        />
      </div>
      <div className={styles.info}>
        <span className={styles.country}>{country}</span>
        <span className={styles.year}>{year}</span>
      </div>
    </div>
  );
};

export default CardPreview;
