import { useState, useCallback } from 'react';

const usePriceFilter = ({ min, max, value, onChange }) => {
  const currentMin =
    value.minPrice !== '' ? Number(value.minPrice) : min;
  const currentMax =
    value.maxPrice !== '' ? Number(value.maxPrice) : max;

  const [prevValue, setPrevValue] = useState(value);
  const [localMin, setLocalMin] = useState(String(currentMin));
  const [localMax, setLocalMax] = useState(String(currentMax));

  if (value !== prevValue) {
    setPrevValue(value);
    setLocalMin(String(currentMin));
    setLocalMax(String(currentMax));
  }

  const handleSliderChange = useCallback(
    (newMin, newMax) => {
      onChange({ minPrice: newMin, maxPrice: newMax });
    },
    [onChange]
  );

  const handleMinChange = useCallback((e) => {
    setLocalMin(e.target.value);
  }, []);

  const handleMaxChange = useCallback((e) => {
    setLocalMax(e.target.value);
  }, []);

  const handleMinBlur = useCallback(() => {
    let val = parseInt(localMin, 10);
    if (isNaN(val)) val = currentMin;
    val = Math.min(val, currentMax - 1);
    val = Math.max(val, min);

    if (val !== currentMin) {
      handleSliderChange(val, currentMax);
    } else {
      setLocalMin(String(currentMin));
    }
  }, [localMin, currentMin, currentMax, min, handleSliderChange]);

  const handleMaxBlur = useCallback(() => {
    let val = parseInt(localMax, 10);
    if (isNaN(val)) val = currentMax;
    val = Math.max(val, currentMin + 1);
    val = Math.min(val, max);

    if (val !== currentMax) {
      handleSliderChange(currentMin, val);
    } else {
      setLocalMax(String(currentMax));
    }
  }, [localMax, currentMax, currentMin, max, handleSliderChange]);

  return {
    currentMin,
    currentMax,
    localMin,
    localMax,
    handleSliderChange,
    handleMinChange,
    handleMaxChange,
    handleMinBlur,
    handleMaxBlur,
  };
};

export default usePriceFilter;
