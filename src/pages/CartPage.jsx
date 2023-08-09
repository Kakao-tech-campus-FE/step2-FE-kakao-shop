import React, { Suspense, useEffect, useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import CartList from '../components/molecules/CartList';
import { getCart } from '../services/cart';
import Loader from '../components/atoms/Loader';

// 장바구니 페이지
const CartPage = () => {
  const { data, isLoading } = useQuery(['cart'], getCart);
  return (
    <Suspense fallback={<Loader />}>
      <CartList data={data?.data?.response} />
    </Suspense>
  );
};

export default CartPage;
