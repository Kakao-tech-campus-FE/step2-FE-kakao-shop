import React, { Suspense } from 'react';
import CartTemplate from '../components/templates/CartTemplate';
import Loader from '../components/atoms/Loader';

const CartPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <CartTemplate />
    </Suspense>
  );
};

export default CartPage;
