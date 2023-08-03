import { useQuery } from "@tanstack/react-query";
import { comma } from "../../utils/convert";
import { useParams } from "react-router-dom";
import { getOrderFromId } from "../../services/order";
import Container from "../atoms/Container";
import { useNavigate } from "react-router-dom";

const staticServerUri = process.env.REACT_APP_PATH || "";

const OrderSuccessTemplate = () => {
  const { id } = useParams();
  const { data } = useQuery([`orders/${id}}`], () => getOrderFromId(id), {
    suspense: true,
  });
  const navigate = useNavigate();

  const orderId = data.data.response.id;
  const orderProducts = data.data.response.products;
  const orderTotalPrice = data.data.response.totalPrice;

  const OrderItems = () => {
    let renderComponent = [];

    orderProducts.forEach((product) => {
      renderComponent.push(
        product.items.map((item) => {
          return (
            <div key={item.id} className="flex gap-4">
              <div>
                <div>상품명</div>
                <div>옵션</div>
                <div>가격</div>
              </div>
              <div>
                <div>{product.productName}</div>
                <div>
                  {item.optionName}, {item.quantity}개
                </div>
                <div>{comma(item.price)}원</div>
              </div>
            </div>
          );
        })
      );
    });
    return renderComponent;
  };

  return (
    <Container className="w-[981px]">
      <div className="wrapper flex flex-col gap-4">
        {/* 구매완료 메시지 */}
        <div className="text-center p-16">
          <h1 className="text-3xl">구매완료!</h1>
          <p>구매가 정상적으로 완료되었습니다.</p>
        </div>

        {/* 주문상품 정보 */}
        <div>
          <div className="products-info">
            <div className="bg-gray-100 p-4">
              <h2 className="text-base font-bold">주문번호: {orderId}</h2>
            </div>
            <div className="border p-4 flex flex-col gap-4">
              <OrderItems />
            </div>
            <div className="border border-t-transparent p-4 flex justify-between font-bold text-lg">
              <div>총 주문 금액</div>
              <div className="text-blue-500">{comma(orderTotalPrice)}원</div>
            </div>
          </div>
        </div>

        {/* 쇼핑 계속하기 버튼 */}
        <button
          onClick={() => {
            navigate(staticServerUri + "/");
          }}
          className={"w-full p-4 rounded-lg bg-yellow-300 font-bold"}
        >
          쇼핑 계속하기
        </button>
      </div>
    </Container>
  );
};

export default OrderSuccessTemplate;
