import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

import CardPreview from '@/components/CardPreview/CardPreview';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './ItemSlider.module.scss';

const ItemSlider = ({ items }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.sliderWrapper}>
      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={0}
        slidesPerView={'auto'}
        watchSlidesProgress={true}
        pagination={{ clickable: true }}
      >
        {items.map((item) => (
          <SwiperSlide
            key={item.id}
            className={styles.swiperSlideCustom}
          >
            <CardPreview
              item={item}
              onClick={() => navigate(`/catalog/${item.id}`)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ItemSlider;
