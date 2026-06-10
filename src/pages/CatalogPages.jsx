import { Routes, Route } from 'react-router-dom';
import { useOrderModal } from '@/hooks/useOrderModal';
import Catalog from './Catalog/Catalog';
import CardDetail from './CardDetail/CardDetail';
import OrderModal from '@/components/OrderModal/OrderModal';

const CatalogPages = () => {
  const { selectedItem, isModalOpen, closeModal } = useOrderModal();

  return (
    <>
      <Routes>
        <Route
          index
          element={<Catalog />}
        />
        <Route
          path=':id'
          element={<CardDetail />}
        />
      </Routes>
      <OrderModal
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default CatalogPages;
