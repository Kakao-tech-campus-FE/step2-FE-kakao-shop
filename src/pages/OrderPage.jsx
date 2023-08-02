import { Suspense } from 'react';
import OrderTemplate from '../components/templates/OrderTemplate';
import Loader from '../components/atoms/Loader';
import { useQuery } from 'react-query';
import { getCart } from '../apis/cart';
import { useNavigate } from 'react-router-dom';

const OrderPage = () => {
  const navigate = useNavigate();
  const { data: cart, isLoading, isError } = useQuery(['cart'], getCart);

  return (
    <>
      {isError ? navigate('/error') : null}
      {isLoading ? <Loader /> : <OrderTemplate data={cart} />}
    </>
  );
};

export default OrderPage;
