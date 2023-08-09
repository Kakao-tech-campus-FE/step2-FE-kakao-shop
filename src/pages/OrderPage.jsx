import React, { Suspense } from 'react';
import { useQuery } from '@tanstack/react-query';
import OrderTemplate from '../components/templates/OrderTemplate';
import { getCart } from '../services/cart';
import Loader from '../components/atoms/Loader';

const OrderPage = () => {
  const { data, error, isLoading } = useQuery(['cart'], getCart);
  return (
    <Suspense fallback={<Loader />}>
      <OrderTemplate data={data} />
    </Suspense>
  );
};

export default OrderPage;
