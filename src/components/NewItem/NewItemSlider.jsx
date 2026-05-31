import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';
import CardPreview from '@/components/CardPreview/CardPreview';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './NewItem.module.scss';

const NewItemSlider = ({ products }) => {
  return (
    <div className={styles.sliderWrapper}>
      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={24}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 16 },
          560: { slidesPerView: 2, spaceBetween: 20 },
          900: { slidesPerView: 3, spaceBetween: 24 },
          1200: { slidesPerView: 4, spaceBetween: 30 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <CardPreview
              photo={product.photo}
              country={product.country}
              year={product.year}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewItemSlider;
