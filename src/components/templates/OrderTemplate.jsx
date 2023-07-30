import Card from "../atoms/Card";
import OrderItem from "../molecules/OrderItem";
import TotalPrice from "../atoms/TotalPrice";
import SubmitButton from "../atoms/SubmitButton";
import styled from "styled-components";
import { useState, useRef } from "react";

const OrderTemplate = ({ data }) => {
  const { products, totalPrice } = data?.data?.response;
  const totalProducts = [];
  products.map((item) => {
    totalProducts.push(item);
  });

  const [agreePayment, setAgreePayment] = useState(false);
  const [agreePolicy, setAgreePolicy] = useState(false);

  const allAgreeRef = useRef(null);

  const handleAllAgree = (e) => {
    const value = e.target.checked;

    setAgreePayment(value);
    setAgreePolicy(value);
  };

  const handleAgreement = (e) => {
    const { name, checked } = e.target;
    if (name === "payment-agree") {
      setAgreePayment(checked);
    } else if (name === "policy-agree") {
      setAgreePolicy(checked);
    }
  };

  const checkOrder = (e) => {
    if (allAgreeRef.current.checked) {
      alert("결제되었습니다.");
    }
  };
  return (
    <>
      <h3>주문상품 정보</h3>
      <Card>
        {Array.isArray(products) &&
          products.map((item) => {
            return <OrderItem key={item.id} item={item} />;
          })}
      </Card>
      <Card className="total-price">
        <TotalPrice item={totalProducts} />
      </Card>
      <div>
        <div>
          <input
            type="checkbox"
            id="all-agree"
            checked={agreePayment && agreePolicy}
            onChange={handleAllAgree}
          />
          <label htmlFor="all-agree">전체 동의</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="agree"
            checked={agreePayment}
            name="payment-agree"
            onChange={handleAgreement}
          />
          <label htmlFor="agree">구매조건 확인 및 결제 진행 동의</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="policy-agree"
            id="policy"
            checked={agreePolicy}
            onChange={handleAgreement}
          />
          <label htmlFor="policy">개인정보 제 3자 제공동의</label>
        </div>
      </div>
      <SubmitButton onClick={checkOrder}>결제하기</SubmitButton>
    </>
  );
};

export default OrderTemplate;
