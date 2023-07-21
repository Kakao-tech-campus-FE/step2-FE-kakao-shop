import { queryCart } from '@api/cartApi';
import Loader from '@components/atoms/Loader';
import CartList from '@components/organisms/CartList';
import React, { Suspense } from 'react';
import { useQuery } from 'react-query';

const CartPage = () => {
  const { data } = useQuery('cart', queryCart);
  const response = data?.data;

  return (
    <Suspense fallback={<Loader />}>
      <CartList data={response} />
    </Suspense>
  );
};

export default CartPage;
