import { useNavigate } from 'react-router-dom';
import { useGetCart, useOrder } from '../../hooks/query';
import { LOCALSTORAGE_KEY_TOKEN } from '../../utils/common';
import { getItemWithExpireDate } from '../../utils/localStorage';
import Loader from '../atoms/loader';
import OrderTemplate from '../templates/orderTemplate';

export default function OrderPage() {
  const { data: cartData, isLoading } = useGetCart(getItemWithExpireDate(LOCALSTORAGE_KEY_TOKEN));
  const navigator = useNavigate();

  const { mutate: orderMutate, isLoading: isOrderLoading } = useOrder();

  const handleOrder = async () => {
    const token = getItemWithExpireDate(LOCALSTORAGE_KEY_TOKEN);
    if (token === null) {
      alert('토큰이 만료되었습니다.');
      navigator('/login');

      return;
    }

    orderMutate({
      auth: token,
    }, {
      onSuccess: (data) => {
        navigator(`/confirmOrder/${data.data.response.id}`);
      },
      onError: () => {
        alert('주문 중 오류가 발생했습니다.\n잠시 후 다시 시도해 주세요.');
      },
    });
  };

  return (
    <>
      {isLoading ? <Loader /> : null}
      {cartData ? (
        <OrderTemplate
          cartData={cartData.data.response}
          isOrderLoading={isOrderLoading}
          handleOrder={handleOrder}
        />
      ) : null}
    </>
  );
}
