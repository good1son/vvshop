import { useContext } from 'react';
import { OrderModalContext } from '@/contexts/OrderModalContext';

export const useOrderModal = () => useContext(OrderModalContext);

export default useOrderModal;
