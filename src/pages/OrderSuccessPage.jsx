import { useQuery } from "@tanstack/react-query";
import { comma } from "../../utils/convert";
import { useParams } from "react-router-dom";
import { getOrderFromId } from "../../services/order";

const OrderSuccessTemplate = () => {
  const { id } = useParams();
  const { data } = useQuery([`orders/${id}}`,id], () => getOrderFromId(id), {
    suspense: true,
  });

  const orderId = data.data.response.id;
  const orderProducts = data.data.response.products;
  const orderTotalPrice = data.data.response.totalPrice;

  return (
    <div>
      <h1>주문완료!</h1>
      <p>주문이 정상적으로 완료되었습니다.</p>
      <div className="border w-96">주문상품 정보</div>
      <div className="border w-96">주문번호: {orderId}</div>
      <div>
        {data &&
          orderProducts.map((item) => {
            return (
              <div key={item.productName} className="border w-96">
                <div>{item.productName}</div>
                <div>
                  {item.items.map((option) => {
                    return (
                      <div key={option.id} className="flex justify-between">
                        <div>{option.id}</div>
                        <div>{option.optionName}</div>
                        <div>{option.quantity}</div>
                        <div>{comma(option.price)}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
      </div>
      <div className="border w-96">최종 가격: {comma(orderTotalPrice)}</div>
    </div>
  );
};

export default OrderSuccessTemplate;