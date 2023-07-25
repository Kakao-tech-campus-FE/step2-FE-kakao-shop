import { useGetCart } from '../../hooks/query';
import { LOCALSTORAGE_KEY_TOKEN } from '../../utils/common';
import { getItemWithExpireDate } from '../../utils/localStorage';
import Loader from '../atoms/loader';
import OrderTemplate from '../templates/orderTemplate';

export default function OrderPage() {
  const { data, isLoading } = useGetCart(getItemWithExpireDate(LOCALSTORAGE_KEY_TOKEN));

  return (
    <>
      {isLoading ? <Loader /> : null}
      {data ? (
        <OrderTemplate cartData={data.data.response} />
      ) : null}
    </>
  );
}
