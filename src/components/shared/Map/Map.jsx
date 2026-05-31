import styles from './Map.module.scss';

const Map = () => {
  return (
    <div className={styles.map}>
      <iframe
        src='https://yandex.ru/map-widget/v1/?ll=37.653012,55.766645&z=15.5&pt=37.653269,55.766488,pmrdl~63'
        className={styles.iframe}
        allowFullScreen
        title='Магазин на карте'
      ></iframe>
    </div>
  );
};

export default Map;
