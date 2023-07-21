import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import QuantityButton from "@/components/atoms/quantity-button/QuantityButton.jsx";
import Close from "@/assets/Close.jsx";

const Styled = {
  Container: styled.div`
    position: relative;
    width: 100%;
    margin-top: 0.75rem;
    padding: 1.25rem;

    background-color: #fafafa;
  `,
  Name: styled.div`
    font-size: 0.9rem;
    padding-right: 2rem;
  `,
  Column: styled.div`
    padding-top: 0.75rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  Price: styled.div`
    font-size: 0.9rem;
  `,
  Delete: styled.div`
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    padding: 0.25rem;
    cursor: pointer;
  `,
};

function SelectedProductOption({
  optionId,
  optionName,
  quantity,
  price,
  setCart,
}) {
  const handleMinusClick = () => {
    if (quantity === 1) return;

    setCart((prev) => [
      ...prev.map((item) =>
        item.optionId !== optionId
          ? item
          : {
              optionId,
              optionName,
              quantity: quantity - 1,
              price,
            }
      ),
    ]);
  };

  const handlePlusClick = () => {
    setCart((prev) => [
      ...prev.map((item) =>
        item.optionId !== optionId
          ? item
          : {
              optionId,
              optionName,
              quantity: quantity + 1,
              price,
            }
      ),
    ]);
  };

  const handleQuantityChange = (event) => {
    setCart((prev) => [
      ...prev.map((item) =>
        item.optionId !== optionId
          ? item
          : {
              optionId,
              optionName,
              quantity: +event.target.value,
              price,
            }
      ),
    ]);
  };

  const handleBlur = (event) => {
    const num = /^[1-9][0-9]*$/;
    if (num.test(event.target.value)) return;

    setCart((prev) => [
      ...prev.map((item) =>
        item.optionId !== optionId
          ? item
          : {
              optionId,
              optionName,
              quantity: 1,
              price,
            }
      ),
    ]);
  };

  const handleDeleteItem = () => {
    setCart((prev) => [...prev.filter((item) => item.optionId !== optionId)]);
  };

  return (
    <Styled.Container>
      <Styled.Name>{optionName}</Styled.Name>
      <Styled.Column>
        <QuantityButton
          value={quantity}
          handleMinusClick={handleMinusClick}
          handlePlusClick={handlePlusClick}
          handleInputChange={handleQuantityChange}
          handleBlur={handleBlur}
        />
        <Styled.Price>{(price * quantity).toLocaleString()}원</Styled.Price>
      </Styled.Column>
      <Styled.Delete onClick={handleDeleteItem}>
        <Close />
      </Styled.Delete>
    </Styled.Container>
  );
}

SelectedProductOption.propTypes = {
  optionId: PropTypes.number.isRequired,
  optionName: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  setCart: PropTypes.any,
};

export default React.memo(SelectedProductOption);
