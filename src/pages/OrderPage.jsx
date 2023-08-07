import OrderTemplate from '../components/templates/OrderTemplate';
import Loader from '../components/atoms/Loader';
import { useQuery } from 'react-query';
import { getCart } from '../apis/cart';
import { useNavigate } from 'react-router-dom';
import { Suspense } from 'react';

const OrderPage = () => {
  const navigate = useNavigate();
  const { data: cart, isError } = useQuery(['cart'], getCart, {
    suspense: true,
  });

  if (isError) {
    navigate('/error');
  }

  return (
    <>
      <Suspense fallback={<Loader />}>
        <OrderTemplate data={cart} />
      </Suspense>
    </>
  );
};

export default OrderPage;
