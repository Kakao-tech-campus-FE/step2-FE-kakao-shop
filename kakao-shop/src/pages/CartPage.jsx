import CartList from '../components/molecules/CartList';
import { Suspense } from 'react';
import { getCart } from '../apis/cart';
import { useQuery } from '@tanstack/react-query';
import Loader from '../components/atoms/Loader';
import Error from '../components/atoms/Error';

const CartPage = () => {
  const { data, status } = useQuery(['cart'], getCart);

  if (status === 'loading') {
    return <Loader />;
  }

  if (status === 'error') {
    return <Error message="장바구니를 불러오는 중 에러가 발생했습니다." />;
  }

  return (
    <div className="bg-gray-50 pb-6">
      <Suspense fallback={<Loader />}>
        <CartList data={data} />
      </Suspense>
    </div>
  );
};

export default CartPage;
