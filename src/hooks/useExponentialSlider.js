import { useCallback } from 'react';

const useExponentialSlider = (min, max) => {
  const power = 3;

  const priceToSlider = useCallback(
    (price) => {
      if (price <= 0) return 0;
      const minVal = min === 0 ? 1 : min;
      const t = (price - minVal) / (max - minVal);
      let result = Math.pow(t, 1 / power) * 100;
      return Math.min(Math.max(result, 0), 100);
    },
    [min, max]
  );

  const sliderToPrice = useCallback(
    (sliderValue) => {
      if (sliderValue <= 0) return min === 0 ? 0 : min;
      const minVal = min === 0 ? 1 : min;
      const t = Math.pow(sliderValue / 100, power);
      let price = minVal + t * (max - minVal);
      return Math.round(price);
    },
    [min, max]
  );

  const sliderRangeToPrices = useCallback(
    ([minIndex, maxIndex]) => {
      return [sliderToPrice(minIndex), sliderToPrice(maxIndex)];
    },
    [sliderToPrice]
  );

  const pricesToSliderRange = useCallback(
    ([minPrice, maxPrice]) => {
      return [priceToSlider(minPrice), priceToSlider(maxPrice)];
    },
    [priceToSlider]
  );

  return { sliderRangeToPrices, pricesToSliderRange };
};

export default useExponentialSlider;
