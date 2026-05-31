import { useCallback } from 'react';
import usePhotoNavigation from '@/hooks/usePhotoNavigation';
import useSwipe from '@/hooks/useSwipe';
import Button from '../shared/Button/Button';
import styles from './Card.module.scss';

const Card = ({ item, onClick, onOrder }) => {
  const photos = item.photos || [];

  const { currentPhoto, nextPhoto, prevPhoto, goToPhoto } =
    usePhotoNavigation(photos);
  const { isSwiping, swipeHandlers, resetSwipingFlag } = useSwipe(
    nextPhoto,
    prevPhoto
  );

  const handleOrder = useCallback(
    (e) => {
      e.stopPropagation();
      onOrder({ id: item.id, title: item.title });
    },
    [item.id, item.title, onOrder]
  );

  const handleImageClick = useCallback(
    (e) => {
      if (isSwiping) {
        e.stopPropagation();
        resetSwipingFlag();
        return;
      }
      onClick(item.id);
    },
    [isSwiping, resetSwipingFlag, onClick, item.id]
  );

  const handleDotClick = (index, e) => {
    e.stopPropagation();
    goToPhoto(index);
  };

  if (photos.length === 0) return null;

  return (
    <div
      className={styles.card}
      onClick={() => onClick(item.id)}
    >
      <div
        className={styles.imageWrapper}
        {...swipeHandlers}
        onClick={handleImageClick}
      >
        <img
          src={photos[currentPhoto]}
          alt={`Фото ${item.title} ${currentPhoto + 1}`}
          loading='lazy'
        />

        {photos.length > 1 && (
          <div
            className={styles.dots}
            onClick={(e) => e.stopPropagation()}
          >
            {photos.map((_, index) => (
              <span
                key={index}
                className={
                  index === currentPhoto
                    ? styles.dotActive
                    : styles.dot
                }
                onClick={(e) => handleDotClick(index, e)}
              />
            ))}
          </div>
        )}
      </div>

      <div className={styles.info}>
        <h3 className={styles.title}>{item.title}</h3>
      </div>
      <div className={styles.order}>
        <div className={styles.price}>
          {item.price.toLocaleString()} ₽
        </div>
        <Button
          variant='card'
          onClick={handleOrder}
        >
          Забронировать
        </Button>
      </div>
    </div>
  );
};

export default Card;
