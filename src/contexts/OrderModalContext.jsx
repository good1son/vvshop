import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from 'react';

const OrderModalContext = createContext(null);

export const OrderModalProvider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = useCallback((item) => {
    setSelectedItem({ id: String(item.id), title: item.title });
  }, []);

  const closeModal = useCallback(() => {
    setSelectedItem(null);
  }, []);

  const value = useMemo(
    () => ({
      selectedItem,
      openModal,
      closeModal,
      isModalOpen: !!selectedItem,
    }),
    [selectedItem, openModal, closeModal]
  );

  return (
    <OrderModalContext.Provider value={value}>
      {children}
    </OrderModalContext.Provider>
  );
};

export { OrderModalContext };
