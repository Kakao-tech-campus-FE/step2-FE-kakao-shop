import React from "react";
import { comma } from "../../utils/convert";
import Button from "../atoms/Button";
import { useNavigate } from "react-router-dom";

const OrderList = ({ data }) => {
  const navigate = useNavigate();
  // Function to render individual product items
  const renderProduct = (product) => {
    let renderComponent = [];

    product.items.forEach((item) => {
      renderComponent.push(
        <div key={item.id} className="flex gap-4 p-4 font-medium">
          <div className="flex-row">
            <div>상품명</div>
            <div className="my-4">주문번호</div>
            <div>옵션</div>
          </div>

          <div>
            <div className="produce-name ">
              <span>{product.productName}</span>
            </div>
            <div className="quantity my-4">
              <span>{data.id}</span>
            </div>
            <div className="price ">
              <span>{item.optionName}</span>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="border-b border-l border-r bg-white">
        <div>{renderComponent}</div>
      </div>
    );
  };

  if (!data || !data.products || !Array.isArray(data.products)) {
    // If data or products is not available or not an array, return null or some fallback UI
    return null;
  }

  return (
    <div className="mx-auto flex w-[100%] max-w-[1024px] flex-col ">
      <div className="border bg-white">
        <div className=" p-4 text-center text-base font-extrabold">
          주문상품 정보
        </div>
        {/* <div className=" p-4">상품명 </div>
        <div className=" p-4">주문 번호 {data.id}</div>
        <div className=" p-4">일반 결제 금액 {comma(data.totalPrice)}원</div> */}
      </div>

      {data.products.map((product) => renderProduct(product))}
      <div className="mt-4 border bg-white p-5 text-xl font-bold">
        <span>일반 결제 금액 </span>
        <span className="float-right text-kakao_blue">
          {comma(data.totalPrice)}원{" "}
        </span>
      </div>
      <Button
        className="w-full rounded bg-kakao_yellow p-4 font-bold text-black"
        children="쇼핑 계속하기"
        onClick={() => {
          navigate("/");
        }}
      />
    </div>
  );
};

export default OrderList;
