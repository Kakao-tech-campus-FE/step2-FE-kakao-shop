import React from "react";
import styled from "styled-components";
import Plus from "@/assets/Plus.jsx";
import Minus from "@/assets/Minus.jsx";
import PropTypes from "prop-types";

const Styled = {
  Container: styled.div`
    width: fit-content;
    height: 1.75rem;
    border: ${({ theme }) => theme.border.default};
    border-radius: 0.2rem;
  `,
  Button: styled.button`
    width: 2rem;
    height: 100%;
    background-color: white;

    &.minus {
      border-right: ${({ theme }) => theme.border.default};
      border-radius: 0.2rem 0 0 0.2rem;
      &:disabled {
        cursor: not-allowed;
      }
      &:disabled > img {
        filter: invert(100%) sepia(2%) saturate(217%) hue-rotate(152deg)
          brightness(116%) contrast(80%);
      }
    }

    &.plus {
      border-radius: 0 0.2rem 0.2rem 0;
      border-left: ${({ theme }) => theme.border.default};
    }
  `,
  Count: styled.input`
    width: 4rem;

    text-align: center;
    font-size: 1rem;
    border: none;
    outline: none;

    /* Works for Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Works for Firefox */
    &[type="number"] {
      -moz-appearance: textfield;
    }
  `,
};

function QuantityButton({
  value,
  handleMinusClick,
  handlePlusClick,
  handleInputChange,
  handleBlur,
}) {
  return (
    <Styled.Container>
      <Styled.Button
        className="minus"
        disabled={value === 1}
        onClick={handleMinusClick}
      >
        <Plus />
      </Styled.Button>
      <Styled.Count
        min="0"
        type="number"
        value={value}
        onChange={handleInputChange}
        onBlur={handleBlur}
      />
      <Styled.Button className="plus" onClick={handlePlusClick}>
        <Minus />
      </Styled.Button>
    </Styled.Container>
  );
}

QuantityButton.propTypes = {
  value: PropTypes.number || PropTypes.string,
  handleMinusClick: PropTypes.func,
  handlePlusClick: PropTypes.func,
  handleInputChange: PropTypes.func,
  handleBlur: PropTypes.func,
};

QuantityButton.defaultProps = {
  value: 1,
};

export default React.memo(QuantityButton);
