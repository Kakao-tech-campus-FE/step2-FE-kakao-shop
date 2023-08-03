import React, { Suspense, useEffect, useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import CartList from '../components/molecules/CartList';
import { getCart } from '../services/cart';
import Loader from '../components/atoms/Loader';

// 장바구니 페이지
const CartPage = () => {
  const { data, isLoading } = useQuery(['cart'], getCart);

  // if (!isLoading) {
  //   console.log('data', data);
  // }
  return (
    <>{isLoading ? <Loader /> : <CartList data={data?.data?.response} />}</>
  );
};

export default CartPage;

// suspense : 상태 변화 감지
/**
 * data.data.response = {
    products,
    totalPrice
} */
