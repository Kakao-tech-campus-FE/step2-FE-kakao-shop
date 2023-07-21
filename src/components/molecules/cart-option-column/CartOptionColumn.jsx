import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import QuantityButton from "@/components/atoms/quantity-button/QuantityButton.jsx";

const Styled = {
  Container: styled.article`
    margin-top: 0.5rem;
    padding: 1rem;
    border: ${({ theme }) => theme.border.default};
    border-radius: 0.2rem;
  `,
  Name: styled.div`
    font-size: 0.9rem;
    color: #555555;
  `,
  Amount: styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  ButtonBox: styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `,
  DeleteButton: styled.button`
    padding: 0 0.5rem;
    margin-right: 0.5rem;
    height: 1.75rem;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 0.75rem;
    color: #555555;

    background-color: white;
    border: ${({ theme }) => theme.border.default};
    border-radius: 0.2rem;
  `,
  Price: styled.div`
    font-size: 0.9rem;
    color: #333333;
    strong {
      font-weight: 600;
    }
  `,
};

function CartOptionColumn({ cartId, option, quantity, price, setCartOptions }) {
  const addOptionQuantity = () => {
    setCartOptions((prev) =>
      prev.map((item) =>
        item.cartId === cartId ? { cartId, quantity: item.quantity + 1 } : item
      )
    );
  };

  const minusOptionQuantity = () => {
    setCartOptions((prev) =>
      prev.map((item) =>
        item.cartId === cartId ? { cartId, quantity: item.quantity - 1 } : item
      )
    );
  };

  const changeOptionQuantity = (event) => {
    if (+event.target.value < 1) {
      setCartOptions((prev) =>
        prev.map((item) =>
          item.cartId === cartId ? { cartId, quantity: 1 } : item
        )
      );
    }

    setCartOptions((prev) =>
      prev.map((item) =>
        item.cartId === cartId
          ? { cartId, quantity: +event.target.value }
          : item
      )
    );
  };

  const deleteOptionQuantity = () => {
    // api에서 delete 기능이 구현되지 않은 관계로 cart option의 수량을 0으로 바꾸는 것으로 대신한다
    setCartOptions((prev) =>
      prev.map((item) =>
        item.cartId === cartId ? { cartId, quantity: 0 } : item
      )
    );
  };
  return (
    <Styled.Container>
      <Styled.Name>{option.optionName}</Styled.Name>
      <Styled.Amount>
        <Styled.ButtonBox>
          <Styled.DeleteButton onClick={deleteOptionQuantity}>
            삭제
          </Styled.DeleteButton>
          <QuantityButton
            value={quantity}
            handlePlusClick={addOptionQuantity}
            handleMinusClick={minusOptionQuantity}
            handleInputChange={changeOptionQuantity}
          />
        </Styled.ButtonBox>

        <Styled.Price>
          <strong>{price.toLocaleString()}</strong>원
        </Styled.Price>
      </Styled.Amount>
    </Styled.Container>
  );
}

CartOptionColumn.propTypes = {
  cartId: PropTypes.number,
  option: PropTypes.object,
  quantity: PropTypes.number,
  price: PropTypes.number,
  setCartOptions: PropTypes.func,
};

export default React.memo(CartOptionColumn);
