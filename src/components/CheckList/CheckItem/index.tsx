import React from "react";
import { styled } from "styled-components";

interface Props {
  data: {
    id: string;
    value: string;
    text: string;
  };
  color: string;
}

const CheckItem = ({ data, color }: Props) => {
  const { id, value, text } = data;

  return (
    <Label htmlFor={id}>
      <CheckButton id={id} value={value} color={color} type="checkbox" />
      <span>{text}</span>
    </Label>
  );
};

export default CheckItem;

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

const CheckButton = styled.input<{ color: string }>`
  appearance: none;
  margin: 0 11px 0 0;
  width: 18px;
  height: 18px;
  border: 2px solid ${({ color }) => color};
  border-radius: 25%;
  cursor: pointer;
  position: relative;
  background-color: #fff;

  &::before {
    content: "✔";
    color: white;
    position: absolute;
    left: 10%;
    bottom: 60%;
    width: 8px;
    height: 8px;
    visibility: hidden;
  }

  &:checked {
    background-color: ${({ color }) => color};
  }

  &:checked::before {
    visibility: visible;
  }
`;
