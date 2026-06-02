import { useParams } from 'react-router-dom';
const CardDetail = () => {
  const { id } = useParams();
  return (
    <div style={{ textAlign: 'center' }}>
      {id && `карточка товара с ID: ${id} СТРАНИЦА В РАЗРАБОТКЕ`}
    </div>
  );
};

export default CardDetail;
