import { useState } from 'react';
import useScrollLock from './useScrollLock';
import useHandleResize from './useHandleResize';
export const useMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);

  useScrollLock(isOpen);
  useHandleResize(isOpen, () => setIsOpen(false), 1100);

  return { isOpen, toggle, close };
};
