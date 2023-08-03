import { useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import OptionAccordionColumn from "@/components/atoms/option-accordion-column/OptionAccordionColumn.jsx";
import CollapseArrow from "@/assets/CollapseArrow.jsx";
import ExpandArrow from "@/assets/ExpandArrow.jsx";

const Styled = {
  WrapOptionList: styled.div`
    width: 100%;
    ${({ $isOptionOpen, theme }) =>
      $isOptionOpen &&
      css`
        border: ${theme.border.focus};
      `}
    border-radius: 0.2rem;
  `,
  OptionButton: styled.button`
    width: 100%;
    padding: 0.75rem 1rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 0.9rem;
    text-align: start;
    background-color: ${({ theme }) => theme.color.inputBg};
    ${({ $isOptionOpen, theme }) =>
      !$isOptionOpen &&
      css`
        border: ${theme.border.default};
      `}
    border-radius: 0.2rem;
  `,
  Icon: styled.img``,
  Ul: styled.ul``,
};

function ProductOptionAccordion({ options, cart, setCart, ...props }) {
  const [isOptionOpen, setIsOptionOpen] = useState(false);

  const handleOpenButtonClick = () => {
    setIsOptionOpen((prev) => !prev);
  };

  return (
    <Styled.WrapOptionList $isOptionOpen={isOptionOpen} {...props}>
      <Styled.OptionButton
        onClick={handleOpenButtonClick}
        $isOptionOpen={isOptionOpen}
        type="button"
      >
        <span>구성</span>
        {isOptionOpen ? <CollapseArrow /> : <ExpandArrow />}
      </Styled.OptionButton>

      {isOptionOpen && (
        <Styled.Ul>
          {options.map((item) => (
            <OptionAccordionColumn
              key={item.id}
              id={item.id}
              name={item.optionName}
              price={item.price}
              cart={cart}
              setCart={setCart}
              setIsOptionOpen={setIsOptionOpen}
            />
          ))}
        </Styled.Ul>
      )}
    </Styled.WrapOptionList>
  );
}

ProductOptionAccordion.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      price: PropTypes.number,
    })
  ),
  cart: PropTypes.array,
  setCart: PropTypes.func,
};

export default ProductOptionAccordion;
