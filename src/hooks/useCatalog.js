import { useState } from 'react';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const useCatalog = () => {
  const [selectedItem, setselectedItem] = useState(null);
  const navigate = useNavigate();

  const handleOrder = useCallback((data) => {
    setselectedItem({ id: String(data.id), title: data.title });
  }, []);

  const handleCardClick = useCallback((id) => {
    navigate(`/catalog/${id}`);
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
