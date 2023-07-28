import styled from "styled-components";
import CheckBox from "@/components/atoms/check-box/CheckBox.jsx";
import { useState } from "react";
import OrderTermItem from "@/components/molecules/order-term-item/OrderTermItem.jsx";
import Button from "@/components/atoms/button/Button.jsx";
import usePostOrderMutation from "@/hooks/usePostOrderMutation.js";

const Styled = {
  Container: styled.section`
    margin-top: 1rem;
    width: 100%;
    background-color: white;
    color: #333333;
    border-top: ${({ theme }) => theme.border.default};
    border-bottom: ${({ theme }) => theme.border.default};
  `,
  Title: styled.div`
    padding: 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    color: #333333;
    background-color: white;
    font-size: 1rem;
    font-weight: 600;
    border-bottom: ${({ theme }) => theme.border.default};

    .text {
      margin-left: 0.5rem;
      cursor: pointer;
    }
  `,
  TermGroup: styled.div`
    padding: 1rem;
  `,
};

const AGREE_TERM = [
  {
    id: "checkOrder",
    text: "구매조건 확인 및 결제 진행 동의",
  },
  {
    id: "personalInfo",
    text: "개인정보 제3자 제공 동의",
  },
];

function OrderAgreeTerm({ totalPrice }) {
  const [isTermChecked, setIsTermChecked] = useState([false, false]);

  const postOrderMutation = usePostOrderMutation();

  return (
    <Styled.Container>
      <Styled.Title>
        <CheckBox
          id="all"
          isChecked={isTermChecked[0] && isTermChecked[1]}
          handleCheck={() => {
            if (isTermChecked[0] && isTermChecked[1]) {
              return setIsTermChecked([false, false]);
            }
            setIsTermChecked([true, true]);
          }}
        />
        <div
          className="text"
          onClick={() => {
            if (isTermChecked[0] && isTermChecked[1]) {
              return setIsTermChecked([false, false]);
            }
            setIsTermChecked([true, true]);
          }}
        >
          전체 동의하기
        </div>
      </Styled.Title>
      <Styled.TermGroup>
        {AGREE_TERM.map((item, index) => (
          <OrderTermItem
            key={item.id}
            id={item.id}
            isChecked={isTermChecked[index]}
            handleCheck={() => {
              setIsTermChecked((prev) =>
                prev.map((x, i) => (i === index ? !prev[i] : prev[i]))
              );
            }}
          >
            {item.text}
          </OrderTermItem>
        ))}
      </Styled.TermGroup>
      <Button
        disabled={!isTermChecked[0] || !isTermChecked[1]}
        onClick={() => {
          if (!isTermChecked[0] || !isTermChecked[1]) return;
          postOrderMutation.mutate();
        }}
        backgroundColor={"#feeb00"}
        style={{
          color: "#333333",
          width: "100%",
          padding: "1rem",
          fontWeight: 600,
        }}
      >
        총 {totalPrice.toLocaleString()}원 결제하기
      </Button>
    </Styled.Container>
  );
}

export default OrderAgreeTerm;
