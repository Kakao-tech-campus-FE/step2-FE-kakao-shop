import { useSelector } from "react-redux";
import { getOrderById } from "../../apis/api";
import { useQuery } from "react-query";
import OrderCompleteList from "../organisms/OrderCompleteList";
import { Link } from "react-router-dom";

const staticServerUrl = process.env.REACT_APP_PATH || "";

const OrderCompleteTemplate = () => {
  const cartId = useSelector((state) => state.cart.orderId);

  const { data } = useQuery(['order', cartId], () => getOrderById(cartId), {
    suspense: true
  });

  const products = data?.data.response.products;

  return (
    <div className="w-screen flex flex-col items-center">
      <div className="w-5/6 border rounded-md mb-10">
        <OrderCompleteList products={products} />
      </div>
      <div className="flex flex-col justify-between w-5/6 font-bold border rounded-lg">
        <div className="flex justify-between px-5 py-4">
          <span>
            결제 완료 금액
          </span>
          <span className="text-blue-500">
            {data?.data.response.totalPrice}원
          </span>
        </div>
        <Link to={staticServerUrl + '/'} className="bg-yellow-300 rounded-b-md py-4 text-black text-center">쇼핑 계속하기</Link>
      </div>
    </div>
  );
}

export default OrderCompleteTemplate;