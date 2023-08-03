import { useNavigate } from 'react-router-dom';
import { useGetCart, useUpdateCart } from '../../hooks/query';
import { LOCALSTORAGE_KEY_TOKEN } from '../../utils/common';
import { getItemWithExpireDate } from '../../utils/localStorage';
import CartTemplate from '../templates/cartTemplate';
import { removeEmptyCarts } from '../../utils/filterCartData';

export default function CartPage() {
  const { data } = useGetCart(getItemWithExpireDate(LOCALSTORAGE_KEY_TOKEN));
  const { mutate } = useUpdateCart();
  const navigator = useNavigate();

  const handleOption = async (
    cartId: number,
    quantity: number,
  ) => {
    const token = getItemWithExpireDate(LOCALSTORAGE_KEY_TOKEN);
    if (token === null) {
      alert('토큰이 만료되었습니다.');
      navigator(0);

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
    <CartTemplate
      cartData={removeEmptyCarts(data?.data.response)}
      handleOption={handleOption}
    />
  );
}
