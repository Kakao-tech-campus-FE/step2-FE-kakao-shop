import React from 'react';
import { styled } from 'styled-components';

interface IRadioInput {
  color: string;
  bgcolor: string;
  width: number;
  height: number;
  name: string;
  value: string;
}
function RadioInput({ color, bgcolor, width, height, name, value }: IRadioInput) {
  return (
    <Label>
      {value}
      <Radio type="radio" value={value} name={name} color={color} bgcolor={bgcolor} width={width} height={height} />
    </Label>
  );
}

export default RadioInput;

const Label = styled.label`
  display: flex;
  align-items: center;
`;
const Radio = styled.input<IRadioInput>`
  appearance: none;
  background-color: white;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border: 1px solid black;
  border-radius: 100%;
  position: relative;
  &:checked {
    border: none;
    background-color: ${(props) => props.bgcolor};
  }
  &:checked::before {
    content: '';
    position: absolute;
    display: inline-block;
    width: ${(props) => props.width / 2}px;
    height: ${(props) => props.height / 2}px;
    top: ${(props) => props.height / 4}px;
    left: ${(props) => props.width / 4}px;
    border-radius: 100%;
    background-color: ${(props) => props.color};
  }
  &:hover {
    opacity: 0.5;
  }
`;
