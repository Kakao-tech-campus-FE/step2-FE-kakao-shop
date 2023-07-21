import { requestUpdateCart } from '../../apis/cart';
import { useCart } from '../../hooks/query';
import { LOCALSTORAGE_KEY_TOKEN } from '../../utils/common';
import { getItemWithExpireDate } from '../../utils/localStorage';
import Loader from '../atoms/loader';
import CartTemplate from '../templates/cartTemplate';

export default function CartPage() {
  const { data, isLoading } = useCart(getItemWithExpireDate(LOCALSTORAGE_KEY_TOKEN));

  const handleOption = async (
    cartId: number,
    quantity: number,
  ) => {
    const token = getItemWithExpireDate(LOCALSTORAGE_KEY_TOKEN);
    if (token === null) {
      return;
    }

    const response = await requestUpdateCart(cartId, quantity, token);
    if (response.data.success === true) {
      window.location.reload();
    }
  };

  return (
    <>
      {isLoading ? <Loader /> : null}
      {data ? (
        <CartTemplate
          cartData={data}
          handleOption={handleOption}
        />
      ) : null}
    </>
  );
}
