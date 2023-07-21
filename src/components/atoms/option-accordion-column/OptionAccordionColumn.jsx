import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Styled = {
  Li: styled.li`
    z-index: 1;
    height: 4rem;
    padding: 1rem;
    font-size: 0.9rem;

    display: block;

    border: solid rgba(0, 0, 0, 0.04);
    border-width: 1px 0 0;
    cursor: pointer;
  `,
  Input: styled.input`
    display: none;
  `,
  OptionName: styled.span`
    text-wrap: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
  Price: styled.div`
    padding-top: 0.25rem;
  `,
};

function OptionAccordionColumn({
  id,
  name,
  price,
  cart,
  setCart,
  setIsOptionOpen,
}) {
  const handleListClick = () => {
    if (cart.filter((item) => item.optionId === id).length > 0) {
      return setIsOptionOpen(false);
    }

    setCart((prev) => [
      ...prev,
      {
        optionId: id,
        optionName: name,
        quantity: 1,
        price: price,
      },
    ]);
    setIsOptionOpen(false);
  };

  return (
    <Styled.Li onClick={handleListClick}>
      <Styled.OptionName>{name}</Styled.OptionName>
      <Styled.Price>{price.toLocaleString()}원</Styled.Price>
    </Styled.Li>
  );
}

OptionAccordionColumn.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  cart: PropTypes.array,
  setCart: PropTypes.func,
  setIsOptionOpen: PropTypes.func,
};

OptionAccordionColumn.defaultProps = {
  id: 1,
  name: "상품",
  price: 10000,
  cart: [],
  setCart: () => {},
  setIsOptionOpen: () => {},
};

export default React.memo(OptionAccordionColumn);
