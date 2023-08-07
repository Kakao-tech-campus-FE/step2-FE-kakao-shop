import { useQuery } from 'react-query';
import { getCart } from '../apis/cart';
import Loader from '../components/atoms/Loader';
import CartList from '../components/molecules/CartList';
import { useNavigate } from 'react-router-dom';
import { Suspense } from 'react';

// 장바구니 페이지
const CartPage = () => {
  const { data, isError, error } = useQuery('cart', getCart, {
    suspense: true,
  });

  const navigate = useNavigate();
  if (isError) {
    alert(`${error.status} error`);
    navigate('/error');
  }

  return (
    <>
      <Suspense fallback={<Loader />}>
        <CartList data={data} />
      </Suspense>
    </>
  );
};

export default CartPage;
