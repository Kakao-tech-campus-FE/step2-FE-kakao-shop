import { useParams } from "react-router-dom";
import { getOrderFromId, order } from "../services/order";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";

const OrderDetailPage = () => {
  const { id } = useParams();
  const token = useSelector((state) => state.user.token);
  const { data, error, isLoading } = useQuery(`/orders/${id}`, () =>
    getOrderFromId(id, token)
  );
  const orderList = data.data.response.products;
  const totalPrice = data.data.response.totalPrice;
  return (
    <div>
      {/* object로 받아와지는 문제 해결 필요 */}
      <div>결제가 완료됐습니다!</div>
      {console.log(data)}
      {orderList.map((products) => (
        <div>{products}</div>
        // {
        //   options.map((items) => {
        //     <>
        //       <div>{items.optionName}</div>
        //       <div>{items.price}원</div>
        //     </>;
        //   });
        // }
      ))}
      <div>주문가격 : {totalPrice}</div>
    </div>
  );
};

export default OrderDetailPage;
