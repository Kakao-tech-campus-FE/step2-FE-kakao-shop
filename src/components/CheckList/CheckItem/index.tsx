import React from "react";
import { styled } from "styled-components";

interface Props {
  data: {
    id: string;
    name: string;
    value: string;
    text: string;
  };
  color: string;
}

const CheckItem = ({ data, color }: Props) => {
  const { id, name, value, text } = data;

  return (
    <Label htmlFor={id}>
      <CheckButton
        id={id}
        name={name}
        value={value}
        color={color}
        type="checkbox"
      />
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

const CheckButton = styled.input<Pick<Props, "color">>`
  appearance: none;
  position: relative;
  width: 18px;
  height: 18px;
  margin: 0 11px 0 0;
  border: 2px solid ${({ color }) => color};
  border-radius: 25%;
  background-color: #fff;
  cursor: pointer;

  &::before {
    content: "✔";
    position: absolute;
    left: 10%;
    bottom: 5%;
    color: white;
    visibility: hidden;
  }

  &:checked {
    background-color: ${({ color }) => color};
  }

  &:checked::before {
    visibility: visible;
  }
`;
