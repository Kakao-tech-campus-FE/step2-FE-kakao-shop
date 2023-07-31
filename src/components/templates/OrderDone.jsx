import React from "react";
import { comma } from "../../utils/convert";

const OrderDone = ({ orderData, totalPrice, products }) => {
  if (!orderData) {
    // 주문 데이터가 없는 경우 로딩 상태를 처리하거나 메시지를 표시합니다.
    return <div>Loading...</div>;
  }

  return (
    <div className="p-20 pb-4">
      <div className="block mx-auto max-w-[1024px] w-[100%]">
        <h1 className="p-2 flex justify-center text-xl font-bold items-center">
          결제가 정상적으로 완료되었습니다!{" "}
        </h1>
        <div className="border p-4 ">
          <h2 className="text-2xl mb-4 flex items-center font-bold">
            주문 정보
          </h2>
          <hr />
          <div className=" pt-6 ">
            <span className="font-bold text-yellow-500 bg-orange-100 rounded-2xl text-m p-1">
              주문 번호
            </span>
            <span className="text-m mx-6 font-bold">{orderData}</span>
          </div>
          <div className=" pt-6 ">
            <span className="font-bold text-yellow-500 bg-orange-100 rounded-2xl text-m p-1">
              결제 금액
            </span>
            <span className="text-m mx-6 font-bold">{comma(totalPrice)}원</span>
          </div>
          <div className=" pt-6 ">
            <span className="font-bold text-yellow-500 bg-orange-100 rounded-2xl text-m p-1">
              주문 상품
            </span>
            <ul className="pt-2">
              {products.map((product) => (
                <li key={product.id}>
                  <p>{product.productName}</p>
                </li>
              ))}
            </ul>
            <div className="pt-10 font-bold text-yellow-500  text-m p-1">
              주문 상세 정보
            </div>
            <ul>
              {products.map((product) => (
                <li key={product.id}>
                  <p>상품명: {product.productName}</p>
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
    </div>
  );
};

export default OrderDone;
