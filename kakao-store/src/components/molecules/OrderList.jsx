import React from "react";
import { comma } from "../../utils/convert";
import Button from "../atoms/Button";
import { useNavigate } from "react-router-dom";

const OrderList = ({ data }) => {
  const navigate = useNavigate();
  // Function to render individual product items
  const renderProduct = (product) => {
    console.log(product.items[0].optionName);

    let renderComponent = [];

    product.items.forEach((item) => {
      renderComponent.push(
        <div key={item.id} className="border-t p-4">
          <div className="produce-name font-bold">
            <span>{`${product.productName} - ${item.optionName}`}</span>
          </div>
          <div className="quantity">
            <span>{comma(item.quantity)}개</span>
          </div>

          <div className="price font-bold">
            <span>{comma(item.price * item.quantity)}원</span>
          </div>
        </div>
      );
    });

    return (
      <div className="border p-4">
        <h1>{product.productName}</h1>
        <h2>{renderComponent}</h2>
      </div>
    );
  };

  if (!data || !data.products || !Array.isArray(data.products)) {
    // If data or products is not available or not an array, return null or some fallback UI
    return null;
  }

  return (
    <div className="mx-auto flex w-[100%] max-w-[1024px] flex-col gap-4">
      <h2 className="border p-4">Order ID: {data.id}</h2>
      <h3 className="border p-4">Total Price: {comma(data.totalPrice)}원</h3>
      {data.products.map((product) => renderProduct(product))}

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
