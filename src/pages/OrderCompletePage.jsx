import { useQuery } from 'react-query';
import OrderCompletTemplate from '../components/templates/OrderCompleteTemplate';
import { useNavigate, useParams } from 'react-router-dom';
import { getOrderFromId } from '../apis/order';
import Loader from '../components/atoms/Loader';

const OrderCompletePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery([`/orders/${id}`], () =>
    getOrderFromId(id)
  );

  return (
    <>
      {isError ? navigate('/error') : null}
      {isLoading ? (
        <Loader />
      ) : (
        <OrderCompletTemplate data={data.data} id={id} />
      )}
    </>
  );
};

export default OrderCompletePage;
