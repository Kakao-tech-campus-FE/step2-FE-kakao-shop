import { useQuery } from "@tanstack/react-query";
import { comma } from "../../utils/convert";
import { useParams } from "react-router-dom";
import { getOrderFromId } from "../../services/order";
import Title from "../atoms/Title";

const OrderSuccessTemplate = () => {
  const { id } = useParams();
  const { data } = useQuery([`orders/${id}}`], () => getOrderFromId(id), {
    suspense: true,
  });

  const orderId = data.data.response.id;
  const orderProducts = data.data.response.products;
  const orderTotalPrice = data.data.response.totalPrice;

  return (
    <div>
      <Title> 주문 완료 </Title>
      <div className="border">주문상품 정보</div>
      <div className="border">주문번호: {orderId}</div>
      <div>
        {data &&
          orderProducts.map((item) => {
            return (
              <div key={item.productName} className="border w-[50%]">
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
      <div className="border w-96">총 주문 금액: {comma(orderTotalPrice)}</div>
    </div>
  );
};

export default OrderSuccessTemplate;