import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import routes from "@/constants/routes.js";

const Styled = {
  OptionContainer: styled.div`
    padding: 1rem 0;
    color: #333333;
    border-bottom: ${({ theme }) => theme.border.default};

    &:last-child {
      border: none;
    }
  `,
  ProductName: styled.div`
    font-weight: 600;
    font-size: 1rem;
    cursor: ${({ $isOrderResult }) => ($isOrderResult ? "default" : "pointer")};
  `,
  Option: styled.div`
    margin: 0.5rem 0;
    color: #555555;
    font-size: 0.8rem;
    font-weight: 400;
  `,
  Price: styled.div`
    font-size: 0.9rem;
  `,
};

function OrderProductOption({
  productId,
  productName,
  optionName,
  quantity,
  price,
  isOrderResult,
}) {
  const navigate = useNavigate();
  return (
    <Styled.OptionContainer>
      <Styled.ProductName
        $isOrderResult={isOrderResult}
        onClick={() =>
          isOrderResult || navigate(`${routes.product}/${productId}`)
        }
      >
        {productName}
      </Styled.ProductName>
      <Styled.Option>
        [옵션] 옵션명: {optionName}, {quantity}개
      </Styled.Option>
      <Styled.Price>{price.toLocaleString()}원</Styled.Price>
    </Styled.OptionContainer>
  );
}

export default React.memo(OrderProductOption);
