import { useQuery } from "@tanstack/react-query";
import { comma } from "../../utils/convert";
import { useNavigate, useParams } from "react-router-dom";
import { getOrderFromId } from "../../services/order";
import Title from "../atoms/Title";
import Box from "../atoms/Box";
import Button from "../atoms/Button";

const staticServerUri = process.env.REACT_APP_PATH || "";

const OrderSuccessTemplate = () => {
  const { id } = useParams();
  const { data } = useQuery([`orders/${id}}`], () => getOrderFromId(id), {
    suspense: true,
  });

  const orderId = data.data.response.id;
  const orderProducts = data.data.response.products;
  const orderTotalPrice = data.data.response.totalPrice;

  const navigate = useNavigate();

  return (
    <div>
      <Title> 주문 완료 </Title>
      <Box className="border w-100 p-4">
      <div className="border font-bold ">주문상품 정보</div>
      <div className="border">주문번호: {orderId}</div>
      <div>
        {data &&
          orderProducts.map((item) => {
            return (
              <div key={item.productName} className="border p-4 my-4">
                <div className="font-bold"> 상품명 {item.productName}</div>
                <div className="grid grid-rows-1 md:grid-rows-2 gap-4">
                  {item.items.map((option) => {
                    return (
                      <div key={option.id} className=" p-2 mb-2 ">
                        <div> 옵션명 {option.optionName}</div>
                        <div> 수량 {option.quantity}</div>
                        <div> 가격 {comma(option.price)}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
      </div>
      <div className="row flex justify=between border p-4">총 주문 금액 
        <div className="ml-[15px] mr-[15px] font-bold text-blue-600">{comma(orderTotalPrice)} 원</div>
        </div>
        </Box>
        <Button
          className="p-2 font-bold text-center bg-yellow-300 rounded-md mt-10 ml-[3%] w-[95%]"
          onClick={() => {
          navigate(staticServerUri + "/");
        }}
      >
        <span>쇼핑 계속하기</span>
      </Button>
    </div>
    
  );
};

export default OrderSuccessTemplate;