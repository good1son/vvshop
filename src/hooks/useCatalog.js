import { useState } from 'react';
import { useCallback } from 'react';

const useCatalog = () => {
  const [selectedItem, setselectedItem] = useState(null);

  const handleOrder = useCallback((data) => {
    setselectedItem({ id: String(data.id), title: data.title });
  }, []);

  const handleCardClick = useCallback((id) => {
    //navigate )'/item/${id}'
    console.log('Click on item id: ', id);
  }, []);

  const closeModal = useCallback(() => {
    setselectedItem(null);
  }, []);

  return {
    selectedItem,
    handleOrder,
    handleCardClick,
    closeModal,
    isModalOpen: !!selectedItem,
  };
};

export default useCatalog;
