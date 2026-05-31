import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import styles from './Hero.module.scss';

const HeroSlider = ({ slides }) => {
  return (
    <Swiper
      className={styles.heroSwiper}
      modules={[Autoplay, EffectFade]}
      effect='fade'
      fadeEffect={{ crossFade: true }}
      speed={2000}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop={true}
      navigation={false}
      pagination={false}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className={styles.slide}>
            <img
              className={styles.bgImage}
              src={slide.image}
              alt={slide.alt}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
