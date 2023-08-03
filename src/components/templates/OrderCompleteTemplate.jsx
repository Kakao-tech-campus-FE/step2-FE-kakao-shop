import SubmitButton from "../atoms/SubmitButton";
import OrderList from "../molecules/OrderList";
import { comma } from "../../utils/convert";
import { useNavigate } from "react-router-dom";
import routes from "../../routes.js";

const OrderCompleteTemplate = ({ data }) => {
  const orderData = data?.data.response;
  const navigate = useNavigate();

  const continueShopping = () => {
    navigate(routes.home);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-xl">구매 완료!</h2>
      <h5 className="text-sm mb-12">구매가 정상적으로 완료되었습니다.</h5>

      <div className="border w-[50rem] text-center">
        <div className="text-sm font-bold mb-9">주문상품 정보</div>
      </div>
      {orderData?.products.map((items) => {
        return <OrderList key={items.id} items={items} />;
      })}
      <div className="flex mt-5">
        <div className="w-[28rem] font-bold">일반 결제 금액</div>
        <div className="text-sky-400 font-bold">
          {comma(orderData?.totalPrice)}원
        </div>
      </div>
      <SubmitButton type="click" onClick={continueShopping}>
        쇼핑 계속하기
      </SubmitButton>
    </div>
  );
};

export default OrderCompleteTemplate;
