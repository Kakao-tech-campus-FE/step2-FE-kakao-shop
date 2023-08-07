import React from "react";
import { comma } from "../../utils/convert";
import { useNavigate } from "react-router-dom";
import Button from "../atoms/Button";
import Badge from "../atoms/Badge";

const staticServerUri = process.env.REACT_APP_PATH || "";

const OrderDone = ({ orderData, totalPrice, products }) => {
  const navigate = useNavigate();

  if (!orderData) {
    // 주문 데이터가 없는 경우 로딩 상태를 처리하거나 메시지를 표시합니다.
    return <div>Loading...</div>;
  }

  return (
    <div className="p-40">
      <div className="block mx-auto max-w-[1024px] w-[100%]">
        <h1 className="p-2 flex justify-center text-2xl font-bold items-center">
          구매 완료!{" "}
        </h1>
        <h1 className="p-2 flex justify-center text-sm font-bold items-center">
          구매가 정상적으로 완료되었습니다.{" "}
        </h1>
        <div className="border p-4 ">
          <h2 className=" text-xl mb-4 flex items-center font-bold">
            주문상품 정보
          </h2>
          <hr />
          <div className=" pt-6 ">
            <Badge className=" font-bold text-yellow-500 bg-orange-100 text-m p-1.5">
              상품명
            </Badge>
            <ul className="pt-4 font-bold ">
              {products.map((product, index) => (
                <li key={product.id} className="py-2">
                  <p>{`${index + 1}. ${product.productName}`}</p>
                </li>
              ))}
            </ul>
            <div className=" pt-6 ">
              <Badge className=" font-bold  text-yellow-500 bg-orange-100 text-m p-1.5">
                주문 번호
              </Badge>
              <span className="text-m mx-6 font-bold">{orderData}</span>
            </div>

            <div className=" pt-6 ">
              <Badge className=" font-bold  text-yellow-500 bg-orange-100 text-m p-1.5">
                결제 금액
              </Badge>
              <span className="text-m mx-6 font-bold">
                {comma(totalPrice)}원
              </span>
            </div>

            <div className="pt-10 font-bold text-yellow-500  text-m p-1">
              주문 상세 정보
            </div>
            <ul>
              {products.map((product, index) => (
                <li key={product.id} className="py-2">
                  <p>{`${index + 1}. 상품명: ${product.productName}`}</p>
                  {product.items.map((item) => (
                    <div key={item.id}>
                      <p>옵션명: {item.optionName}</p>
                      <p>수량: {item.quantity}개</p>
                      {/* 숫자에 천 단위마다 쉼표를 추가하여 가격 표시 */}
                      <p>가격: {comma(item.price)}원</p>
                    </div>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* 메인으로 이동 */}
      <div className="block mx-auto max-w-[1024px] w-[100%]">
        <div className="flex mt-6 p-4 border items-center justify-between">
          <h2 className="text-xl mb-4 flex font-bold">일반 결제 금액</h2>
          <div className="text-xl mb-4 flex font-bold">
            {comma(totalPrice)}원
          </div>
        </div>
        <Button onClick={() => navigate(staticServerUri + "/")}>
          쇼핑 계속하기
        </Button>
      </div>
    </div>
  );
};

export default OrderDone;
