import { useParams } from 'react-router-dom';
import ConfirmOrderTemplate from '../templates/confirmOrderTemplate';
import { useConfirmOrder } from '../../hooks/query';
import { LOCALSTORAGE_KEY_TOKEN } from '../../utils/common';
import { getItemWithExpireDate } from '../../utils/localStorage';

export default function ConfirmOrderPage() {
  const { orderId } = useParams();

  const { data } = useConfirmOrder(Number(orderId), getItemWithExpireDate(LOCALSTORAGE_KEY_TOKEN));

  return (
    <ConfirmOrderTemplate orderData={data?.data.response} />
  );
}
