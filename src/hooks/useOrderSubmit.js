// hooks/useOrderSubmit.js
import { useCallback } from 'react';

const useOrderSubmit = () => {
  const submitOrder = useCallback(async (cleanData) => {
    const adminLink = cleanData.itemId
      ? `https://vvshop/admin/items/${cleanData.itemId}/edit`
      : '';

    console.log('📦 Заявка:', {
      Имя: cleanData.name,
      Телефон: cleanData.tel,
      email: cleanData.email,
      Сообщение: cleanData.message,
      id: cleanData.itemId,
      Ссылка: adminLink,
    });

    // await fetch('/api/send-order', {
    //   method: 'POST',
    //   body: JSON.stringify(cleanData),
    // });
  }, []);

  return { submitOrder };
};

export default useOrderSubmit;
