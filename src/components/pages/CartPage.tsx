import { queryCart } from '@api/cartApi';
import CartList from '@components/organisms/CartList/CartList';
import CartListSkeleton from '@components/organisms/CartList/CartListSkeleton';
import React from 'react';
import { useQuery } from 'react-query';

const CartPage = () => {
  const { data, isLoading } = useQuery('cart', queryCart);
  const response = data?.data;

  return isLoading ? <CartListSkeleton /> : <CartList data={response} />;
};

export default CartPage;
