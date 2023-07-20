import CartList from '../components/molecules/CartList';
import { Suspense, useEffect, useState } from 'react';
import { getCart } from '../apis/cart';
import { useQuery } from '@tanstack/react-query';
import Loader from '../components/atoms/Loader';
const CartPage = () => {
  const { data } = useQuery(['cart'], getCart);
  return (
    <div className="bg-gray-50 pb-6">
      <Suspense fallback={<Loader />}>
        <CartList data={data} />
      </Suspense>
    </div>
  );
};

export default CartPage;
