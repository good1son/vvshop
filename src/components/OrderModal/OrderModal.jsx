import ContactForm from '../ContactUs/ContactForm';
import styles from './OrderModal.module.scss';

const OrderModal = ({ item, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
    >
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={styles.close}
          onClick={onClose}
        >
          ×
        </button>
        <ContactForm
          item={item}
          variant='order'
        />
      </div>
    </div>
  );
};

export default OrderModal;
//  useEffect(() => {
//     const orderMesage = sessionStorage.getItem('orderMessage');
//     if (orderMesage) {
//       const item = JSON.parse(orderMesage);
//       console.log(item);

//       const message = `Здравствуйте! Заинтересовался позицией: ${item.title}, стоимостью ${item.price.toLocaleString()} р`;
//       console.log(message);

//       setValue('message', message);
//       sessionStorage.removeItem('orderMessage');
//     }
//   }, [setValue]);
