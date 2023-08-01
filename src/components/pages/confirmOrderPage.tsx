import { useParams } from 'react-router-dom';
import { AxiosError } from 'axios';
import ConfirmOrderTemplate from '../templates/confirmOrderTemplate';
import ErrorTemplate from '../templates/errorTemplate';
import { useConfirmOrder } from '../../hooks/query';
import { LOCALSTORAGE_KEY_TOKEN } from '../../utils/common';
import { getItemWithExpireDate } from '../../utils/localStorage';

export default function ConfirmOrderPage() {
  const { orderId } = useParams();

  // 주문 번호 parameter가 유효하지 않을 경우
  if (orderId === undefined || Number.isNaN(+orderId)) {
    return <ErrorTemplate errorMessage="잘못된 상품 번호입니다." />;
  }

  const { data, error } = useConfirmOrder(+orderId, getItemWithExpireDate(LOCALSTORAGE_KEY_TOKEN));

  // 주문결과 확인 API 요청 중 error가 발생한 경우
  if (error !== null && error instanceof AxiosError) {
    return <ErrorTemplate errorMessage={error.response?.data.error.message} />;
  }

  return (
    <ConfirmOrderTemplate orderData={data?.data.response} />
  );
}
