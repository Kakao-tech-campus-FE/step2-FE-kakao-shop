import styled from "styled-components";

export const RadioLabel = styled.label`
  margin-right: 20px;
  font-size: 17px;
  font-weight: 700;
`;

export const RadioButton = styled.input`
  position: relative;
  top: 2px;
  width: 17px;
  height: 17px;
  margin-right: 5px;
  border: 1.5px solid gray;
  border-radius: 20px;
  appearance: none;
  &:checked {
    border: 5px solid #ffeb00;
  }
`;

export const Policy = styled.p`
  margin: 10px 0;
  font-size: 12px;
  font-weight: 700;
  color: gray;
`;
