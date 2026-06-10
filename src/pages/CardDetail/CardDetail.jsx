import useCardDetail from '@/hooks/useCardDetail';
import useOrderModal from '@/hooks/useOrderModal';
import usePreviewCard from '@/hooks/usePreviewCard';
import ItemSlider from '@/components/shared/ItemSlider/ItemSlider';
import clsx from 'clsx';
import Loader from '@/components/shared/Loader/Loader';
import styles from './CardDetail.module.scss';

const CardDetail = () => {
  const {
    item,
    similarItems,
    authorItems,
    loading,
    error,
    properties,
    currentPhoto,
    nextPhoto,
    prevPhoto,
    goToPhoto,
    goBack,
  } = useCardDetail();

  const { openModal } = useOrderModal();

  const similarItemsPreview = usePreviewCard(similarItems);
  const authorItemsPreview = usePreviewCard(authorItems);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  return (
    <div className={styles.content}>
      <div className={styles.main}>
        <div className={styles.stripeBottom}></div>
        <div className={styles.gallery}>
          <div className={styles.polaroid}>
            <img
              src={item.photos?.[currentPhoto]}
              alt={item.title}
            />
          </div>
          <div className={styles.navArea}>
            <button
              className={styles.button}
              onClick={prevPhoto}
            >
              &lt;
            </button>
            <div className={styles.thumbnails}>
              {item.photos?.map((photo, idx) => (
                <div
                  key={idx}
                  className={clsx(
                    styles.thumbnail,
                    currentPhoto === idx && styles.activePhoto
                  )}
                  onClick={() => goToPhoto(idx)}
                >
                  <img
                    src={photo}
                    alt={`Фото ${idx + 1}`}
                  />
                </div>
              ))}
            </div>
            <button
              className={styles.button}
              onClick={nextPhoto}
            >
              &gt;
            </button>
          </div>
        </div>

        <div className={styles.info}>
          <h3 className={styles.title}>{item.title}</h3>
          <ul className={styles.description}>
            {properties.map(
              (prop) =>
                prop.value && (
                  <li key={prop.label}>
                    <span className={styles.label}>{prop.label}</span>
                    <span className={styles.value}>{prop.value}</span>
                  </li>
                )
            )}
          </ul>

          <div className={styles.booking}>
            <div className={styles.price}>
              {item.price} <span>₽</span>
            </div>
            <button
              className={styles.bookButton}
              onClick={() => openModal({ id: item.id, title: item.title })}
            >
              Забронировать
            </button>
          </div>
        </div>
      </div>

      <div className={styles.extra}>
        {similarItemsPreview.length > 0 && (
          <>
            <h3 className={styles.titleExtra}>Похожие товары</h3>
            <ItemSlider
              key={similarItemsPreview.map((i) => i.id).join(',')}
              items={similarItemsPreview}
            />
          </>
        )}
        {authorItemsPreview.length > 0 && (
          <>
            <h3 className={styles.titleExtra}>Другие работы автора</h3>
            <ItemSlider
              key={authorItemsPreview.map((i) => i.id).join(',')}
              items={authorItemsPreview}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default CardDetail;
