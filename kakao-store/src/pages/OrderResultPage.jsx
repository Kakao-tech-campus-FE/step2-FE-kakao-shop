import { useParams } from "react-router-dom";
import { getOrderFromId } from "../services/order";
import OrderList from "../components/molecules/OrderList";
import { useQuery } from "@tanstack/react-query";

const OrderResultPage = () => {
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: [`/orders/${id}`],
    queryFn: () => getOrderFromId(id),
  });
  console.log(data);
  const product = data?.data.response ?? {};

  return (
    <div className=' h-screen bg-kakao_gray'>
      <div className='mx-auto flex w-[100%] max-w-[1024px] flex-col justify-center  p-4 text-center'>
        <h1 className='p-2'>구매완료!</h1>
        <span>
          구매가 정상적으로 완료되었습니다. <br />
        </span>
      </div>

      <OrderList data={product} />
    </div>
  );
};

export default OrderResultPage;
