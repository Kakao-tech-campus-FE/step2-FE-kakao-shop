import { useQuery } from 'react-query';
import OrderCompletTemplate from '../components/templates/OrderCompleteTemplate';
import { useNavigate, useParams } from 'react-router-dom';
import { getOrderFromId } from '../apis/order';
import Loader from '../components/atoms/Loader';
import { Suspense } from 'react';

const OrderCompletePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isError } = useQuery(
    [`/orders/${id}`],
    () => getOrderFromId(id),
    { suspense: true }
  );

  if (isError) {
    navigate('/error');
  }

  return (
    <>
      <Suspense fallback={<Loader />}>
        <OrderCompletTemplate data={data.data} id={id} />
      </Suspense>
    </>
  );
};

export default OrderCompletePage;
