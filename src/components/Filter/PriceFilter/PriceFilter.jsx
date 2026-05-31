import { Slider } from 'react-slider-range';
import usePriceFilter from '@/hooks/usePriceFilter';
import useExponentialSlider from '@/hooks/useExponentialSlider';
import 'react-slider-range/dist/slider.css';
import styles from './PriceFilter.module.scss';

const PriceFilter = ({ min, max, value, onChange }) => {
  const {
    currentMin,
    currentMax,
    localMin,
    localMax,
    handleSliderChange,
    handleMinChange,
    handleMaxChange,
    handleMinBlur,
    handleMaxBlur,
  } = usePriceFilter({ min, max, value, onChange });

  const { sliderRangeToPrices, pricesToSliderRange } =
    useExponentialSlider(min, max);

  if (min === max) return null;

  const handleExponentialChange = (newSliderValues) => {
    const [realMinPrice, realMaxPrice] =
      sliderRangeToPrices(newSliderValues);
    handleSliderChange(realMinPrice, realMaxPrice);
  };

  const [sliderMinValue, sliderMaxValue] = pricesToSliderRange([
    currentMin,
    currentMax,
  ]);

  return (
    <div className={styles.priceFilter}>
      <div className={styles.inputs}>
        <input
          type='text'
          value={localMin}
          onChange={handleMinChange}
          onBlur={handleMinBlur}
        />
        <span>—</span>
        <input
          type='text'
          value={localMax}
          onChange={handleMaxChange}
          onBlur={handleMaxBlur}
        />
      </div>
      <div className={styles.labels}>
        <span>{currentMin.toLocaleString()} ₽</span>
        <span>{currentMax.toLocaleString()} ₽</span>
      </div>
      <Slider
        min={0}
        max={100}
        value={[sliderMinValue, sliderMaxValue]}
        onChange={handleExponentialChange}
        trackClassName={styles.track}
        rangeClassName={styles.range}
        thumbClassName={styles.thumb}
      />
    </div>
  );
};

export default PriceFilter;
