import Card from "../atoms/Card";
import OrderItem from "../molecules/OrderItem";
import CheckList from "../molecules/CheckList";
import TotalPrice from "../atoms/TotalPrice";
import SubmitButton from "../atoms/SubmitButton";
import styled from "styled-components";
import { useState, useRef } from "react";
import { useMutation } from "@tanstack/react-query";
import { ordersSave } from "../../services/order";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LabelTitle = styled.label`
  font-size: 1.2rem;
  font-weight: bold;
`;

const OrderTemplate = ({ data }) => {
  const navigate = useNavigate();
  const { products } = data?.data?.response;
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

  const { mutate } = useMutation(ordersSave);

  const beforeOrderFailure = () => {
    if (allAgreeRef.current.checked === false) alert("약관 동의가 필요합니다.");
    else if (totalProducts.length === 0) alert("주문할 상품이 없습니다.");
    else {
      afterOrder();
    }
  };

  const afterOrder = () => {
    mutate(null, {
      onError: (error) => {
        alert("주문에 실패했습니다.");
        if (error.response.status === 401) {
          alert("로그인이 필요합니다.");
        }
      },
      onSuccess: (res) => {
        const id = res.data.response.id;
        alert("주문이 완료되었습니다.");
        navigate(`/orders/${id}`);
      },
    });
  };

  return (
    <>
      <Container>
        <h3 className="mb-6">주문상품 정보</h3>
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
            <CheckList
              htmlFor="all-agree"
              id="all-agree"
              checked={agreePayment && agreePolicy}
              ref={allAgreeRef}
              onChange={handleAllAgree}
            >
              전체 동의
            </CheckList>
          </div>
          <div>
            <CheckList
              htmlFor="agree"
              id="agree"
              checked={agreePayment}
              name="payment-agree"
              onChange={handleAgreement}
            >
              확인 및 결제 진행 동의
            </CheckList>
          </div>
          <div>
            <CheckList
              htmlFor="policy"
              name="policy-agree"
              id="policy"
              checked={agreePolicy}
              onChange={handleAgreement}
            >
              개인정보 제 3자 제공동의
            </CheckList>
          </div>
        </div>
        <SubmitButton onClick={beforeOrderFailure}>결제하기</SubmitButton>
      </Container>
    </>
  );
};

export default OrderTemplate;
