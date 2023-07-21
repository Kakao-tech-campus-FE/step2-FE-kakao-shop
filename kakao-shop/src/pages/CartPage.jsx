import CartList from '../components/molecules/CartList';
import { Suspense } from 'react';
import { getCart } from '../apis/cart';
import { useQuery } from '@tanstack/react-query';
import Loader from '../components/atoms/Loader';
import Error from '../components/atoms/Error';
import { defaultToast } from '../utils/swal';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { data, status, error } = useQuery(['cart'], getCart, { retry: false });
  const navigate = useNavigate();

  if (status === 'loading') {
    return <Loader />;
  }

  if (status === 'error') {
    if (error?.response?.status === 401) {
      // 로그인 안 한 사용자가 장바구니 조회 시
      defaultToast('로그인이 필요한 기능입니다');
      navigate('/login');
    }
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
