import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getOrderFromId } from "../apis/order";
import OrderList from "../components/moleclules/OrderList";
import Container from "../components/atoms/Container";
import { comma } from "../utils/convert";
import { staticServerUri } from "../constants/serverUri";

const OrderCompletePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data } = useQuery([`orders/${id}`], () => getOrderFromId(id), {
    suspense: true,
  });

  const { id: orderId, products, totalPrice } = data.data.response;

  return (
    <Container className="mt-10 max-w-[870px] px-4 pb-5">
      <div className="flex flex-col items-center gap-2">
        {" "}
        <h1 className="text-2xl font-semibold">구매완료!</h1>
        <p>구매가 정상적으로 완료되었습니다.</p>
      </div>
      <div className="mt-10 border border-gray-300">
        <div className="border-b border-gray-300 p-5 text-center ">
          <p className="font-semibold">주문상품 정보</p>
          <p className="mt-1 text-sm">
            (주문번호: <span className="font-semibold">{orderId}</span>)
          </p>
        </div>
        <div></div>
        <div>
          {" "}
          {products.map((item) => (
            <OrderList
              item={item}
              key={item.productName}
              options={item.items}
            />
          ))}
        </div>
      </div>

      <div className="mt-4 flex justify-between border border-gray-300 p-5">
        <span className="text-xl font-bold">일반 결제 금액</span>
        <span className="text-lg font-bold text-blue-600">
          {comma(totalPrice)}원
        </span>
      </div>
      <button
        className="w-full bg-kakao p-5 font-extrabold"
        onClick={(e) => {
          e.preventDefault();
          navigate(staticServerUri + "/");
        }}
      >
        쇼핑 계속하기
      </button>
    </Container>
  );
};

export default OrderCompletePage;
