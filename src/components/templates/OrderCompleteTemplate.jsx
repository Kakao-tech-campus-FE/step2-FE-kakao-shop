import SubmitButton from "../atoms/SubmitButton";
import OrderList from "../molecules/OrderList";
import { comma } from "../../utils/convert";
import { useNavigate } from "react-router-dom";
import routes from "../../routes.js";

const staticServerUri = process.env.REACT_APP_PATH || "";

const OrderCompleteTemplate = ({ data }) => {
  const orderData = data?.data.response;
  const navigate = useNavigate();

  const continueShopping = () => {
    navigate(staticServerUri + routes.home);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col w-[50rem]">
        <h2 className="text-xl text-center">구매 완료!</h2>
        <h5 className="text-sm mb-12 text-center">
          구매가 정상적으로 완료되었습니다.
        </h5>

        <div className="border">
          <div className="text-sm font-bold m-6 text-center">주문상품 정보</div>
        </div>
        {orderData?.products.map((items) => {
          return <OrderList key={items.id} items={items} />;
        })}
        <div className="flex mt-5 justify-between">
          <div className="font-bold text-lg">일반 결제 금액</div>
          <div className="text-[#0044ff] font-bold text-lg">
            {comma(orderData?.totalPrice)}원
          </div>
        </div>
        <SubmitButton type="click" onClick={continueShopping}>
          쇼핑 계속하기
        </SubmitButton>
      </div>
    </div>
  );
};

export default OrderCompleteTemplate;
