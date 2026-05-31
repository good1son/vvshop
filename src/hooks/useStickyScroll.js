import { useRef, useEffect, useCallback } from 'react';

const useStickyScroll = (trigger, enabled = true) => {
  const ref = useRef(null);
  const prevLengthRef = useRef(0);

  const scrollToSticky = useCallback(() => {
    if (!ref.current || !enabled) return;

    const element = ref.current;
    const stickyTop = 20;
    const rect = element.getBoundingClientRect();
    const scrollToY = window.scrollY + rect.top - stickyTop;

    window.scrollTo({
      top: scrollToY,
      behavior: 'instant',
    });
  }, [enabled]);

  useEffect(() => {
    const currentLength = trigger?.length ?? 0;
    const prevLength = prevLengthRef.current;
    const hasChanged = currentLength !== prevLength;

    if (hasChanged && enabled && trigger && currentLength > 0) {
      requestAnimationFrame(() => {
        scrollToSticky();
      });
    }

    prevLengthRef.current = currentLength;
  }, [trigger, enabled, scrollToSticky]);

  return ref;
};

export default useStickyScroll;
