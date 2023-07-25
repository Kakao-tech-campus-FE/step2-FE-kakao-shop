import styled from "styled-components";
import { useState } from "react";
import OrderRequest from "@/components/molecules/order-request/OrderRequest.jsx";

const Styled = {
  Container: styled.section`
    width: 100%;
    background-color: white;
    color: #333333;
    border-top: ${({ theme }) => theme.border.default};
    border-bottom: ${({ theme }) => theme.border.default};
  `,
  Title: styled.div`
    padding: 1rem;
    font-size: 0.9rem;
    font-weight: 600;
    text-align: center;
    border-bottom: ${({ theme }) => theme.border.default};
  `,
  OpenButton: styled.button`
    width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    color: #333333;
    background-color: white;
    font-size: 1rem;
    font-weight: 600;
  `,
  Info: styled.article`
    padding: 0 1rem 1rem 1rem;
  `,
  DeliveryInfo: styled.div`
    .txt-name {
      font-size: 1rem;
      font-weight: 600;
    }

    .txt-num,
    .txt-address {
      padding-top: 0.5rem;
      font-size: 0.9rem;
    }

    .txt-address {
      font-weight: 400;
    }
  `,
  RequestInfo: styled.div`
    padding-top: 0.75rem;
  `,
};

function OrderDelivery() {
  const [isAddressOpen, setIsAddressOpen] = useState(true);
  return (
    <Styled.Container>
      <Styled.Title>주문하기</Styled.Title>
      <article>
        <Styled.OpenButton onClick={() => setIsAddressOpen((prev) => !prev)}>
          <span>배송지 정보</span>
        </Styled.OpenButton>
        {isAddressOpen && (
          <Styled.Info>
            <Styled.DeliveryInfo>
              <div className="txt-name">임시 이름</div>
              <div className="txt-num">010-1234-5678</div>
              <div className="txt-address">서울시 종로구</div>
            </Styled.DeliveryInfo>
            <OrderRequest />
          </Styled.Info>
        )}
      </article>
    </Styled.Container>
  );
}

export default OrderDelivery;
