import React, { Suspense } from 'react';
import { useQuery } from 'react-query';
import Loader from '../components/atoms/Loader';

const CartPage = () => {
  const {data} = useQuery("cart", getCart);
  return (
    // data라는 데이터가 존재할 때 Suspense가 풀리고 (Loader가 지워지고) 데이터가 보임
    <Suspense fallback={<Loader />}>
      {/* 렌더링이 되기 전에 fallback에 해당하는 부분이 표기 */}
      <CartList data={data} />
    </Suspense>
  );
};


export default CartPage;