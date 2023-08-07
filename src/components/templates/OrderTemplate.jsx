import { useQuery } from "react-query";
import { getCart } from "../../apis/api";
import OrderList from "../organisms/OrderList";
import OrderCheckGroup from "../molecules/OrderCheckGroup";
const OrderTemplate = () => {
  const { data } = useQuery(['order'], getCart, {
    suspense: true
  });


  const products = data?.data.response.products;

  
  return (
    <div className="w-5/6">
      <div className="border rounded-t-md p-3 mt-5">주문상품 정보</div>
      <OrderList products={products} />
      <OrderCheckGroup totalPrice={data?.data.response.totalPrice}/>
    </div>
  )
}
export default OrderTemplate;