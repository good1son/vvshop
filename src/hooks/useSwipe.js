import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

const useSwipe = (onSwipedLeft, onSwipedRight) => {
  const [isSwiping, setIsSwiping] = useState(false);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: (eventData) => {
      eventData.event.stopPropagation();
      setIsSwiping(true);
      onSwipedLeft?.();
    },
    onSwipedRight: (eventData) => {
      eventData.event.stopPropagation();
      setIsSwiping(true);
      onSwipedRight?.();
    },
    trackMouse: true,
    preventScrollOnSwipe: true,
    delta: 25,
  });

  const resetSwipingFlag = () => setIsSwiping(false);

  return { isSwiping, swipeHandlers, resetSwipingFlag };
};

export default useSwipe;
