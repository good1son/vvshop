import { useHeroSlides } from '@/hooks/useHeroSlides';
import { heroDecor } from '@/assets/images';
import HeroSlider from './HeroSlider';
import styles from './Hero.module.scss';

const Hero = () => {
  const slides = useHeroSlides();
  return (
    <section className={styles.hero}>
      <HeroSlider slides={slides} />
      <div className={styles.overlay}></div>
      <div className={`${styles.heroContent} container`}>
        <h2 className={`${styles.heroTitile} title`}>
          Вдохните новую жизнь в <br />
          фамильные ценности!
        </h2>
        <img
          className={styles.heroDecor}
          src={heroDecor}
          alt='Декоративное изображение'
        />
        <p
          className={`${styles.heroDescription} ${styles.desktop} description`}
        >
          Продажа, покупка, реставрация и оценка антиквариата – все виды услуг
          на
          <br />
          профессиональном уровне. Работаем с предметами любой сложности и
          возраста.
        </p>
        <p className={`${styles.heroDescription} ${styles.mobile} description`}>
          Продажа, покупка, реставрация и оценка антиквариата – все виды услуг
          на профессиональном уровне.
        </p>
      </div>
    </section>
  );
};

export default Hero;
