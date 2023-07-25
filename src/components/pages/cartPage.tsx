import { useNavigate } from 'react-router-dom';
import { useGetCart, useUpdateCart } from '../../hooks/query';
import { LOCALSTORAGE_KEY_TOKEN } from '../../utils/common';
import { getItemWithExpireDate } from '../../utils/localStorage';
import Loader from '../atoms/loader';
import CartTemplate from '../templates/cartTemplate';

export default function CartPage() {
  const { data, isLoading } = useGetCart(getItemWithExpireDate(LOCALSTORAGE_KEY_TOKEN));
  const { mutate } = useUpdateCart();
  const navigator = useNavigate();

  const handleOption = async (
    cartId: number,
    quantity: number,
  ) => {
    const token = getItemWithExpireDate(LOCALSTORAGE_KEY_TOKEN);
    if (token === null) {
      alert('토큰이 만료되었습니다.');
      navigator('/login');

      return;
    }

    mutate({
      updatedOptions: [{
        cartId,
        quantity,
      }],
      auth: token,
    }, {
      onSuccess: () => {
        navigator(0);
      },
      onError: () => {
        alert('수량을 변경하는 중 오류가 발생했습니다.\n잠시 후 다시 시도해 주세요.');
      },
    });
  };

  return (
    <>
      {isLoading ? <Loader /> : null}
      {data ? (
        <CartTemplate
          cartData={data.data.response}
          handleOption={handleOption}
        />
      ) : null}
    </>
  );
}
