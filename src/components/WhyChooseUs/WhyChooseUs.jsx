import styles from './WhyChooseUs.module.scss';
import { clockDecor, experienceIcon, priceIcon } from '@/assets/images';

const WhyChooseUs = () => {
  return (
    <section className={`${styles.whyChooseUs} container`}>
      <h2 className={`${styles.title} title`}>
        Почему наши
        <br />
        клиенты выбирают нас?
      </h2>
      <div className={styles.top}>
        <div className={styles.img}>
          <img
            src={clockDecor}
            alt='Изображение карманных антикварных часов'
          />
        </div>
        <div className={styles.info}>
          <p className={`${styles.description} description`}>
            Мы ценим доверие и предлагаем не только высококачественные услуги,
            но и индивидуальный подход к каждому клиенту. Многолетний опыт,
            профессионализм наших экспертов а также искренняя любовь к
            антикварному искусству — вот залог нашего успеха и причины, по
            которым нас рекомендуют друзьям!
          </p>
          <div className={styles.content}>
            <div className={styles.card}>
              <div className={styles.icon}>
                <img
                  src={experienceIcon}
                  alt='Иконка оценщика'
                />
              </div>
              <h3 className={`${styles.cardTitle} title`}>Экспертиза и опыт</h3>
              <p className={`${styles.cardDescription} description`}>
                Более 8 лет мы помогаем ценителям прекрасного находить,
                восстанавливать и сохранять антикварные предметы.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>
                <img
                  src={priceIcon}
                  alt='Иконка кошелька'
                />
              </div>
              <h3 className={`${styles.cardTitle} title`}>
                Прозрачная ценовая политика
              </h3>
              <p className={`${styles.cardDescription} description`}>
                Мы предлагаем справедливые цены, основанные на рыночной
                стоимости и экспертной оценке антикварных предметов.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
