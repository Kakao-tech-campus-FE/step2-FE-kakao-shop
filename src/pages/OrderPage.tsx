import React, { Suspense } from 'react';
import Loader from '../components/atoms/Loader';
import OrderTemplate from '../components/templates/OrderTemplate';

const OrderPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <OrderTemplate />
    </Suspense>
  );
};

export default OrderPage;
