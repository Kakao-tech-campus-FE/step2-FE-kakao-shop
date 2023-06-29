import React from "react";
import { styled } from "styled-components";

interface Props {
  data: {
    id: string;
    value: string;
    name: string;
    text: string;
  };
  color: string;
}

const Radio = ({ data, color }: Props) => {
  const { id, value, name, text } = data;

  return (
    <Label htmlFor={id}>
      <RadioButton
        id={id}
        name={name}
        value={value}
        type="radio"
        color={color}
      />
      <span>{text}</span>
    </Label>
  );
};

export default Radio;

const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;

  span {
    min-width: fit-content;
    padding: 0;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
  }
`;

const RadioButton = styled.input<{ color: string }>`
  appearance: none;
  margin: 0 11px 0 0;
  width: 18px;
  height: 18px;
  border: 2px solid ${({ color }) => color};
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  background-color: #fff;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #fff;
  }

  &:checked::before {
    background-color: ${({ color }) => color};
  }
`;
