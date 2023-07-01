import styled from "styled-components";

export const RadioLabel = styled.label`
  font-size: 17px;
  font-weight: 700;
  margin-right: 20px;
`;

export const RadioButton = styled.input`
  appearance: none;
  width: 17px;
  height: 17px;
  border: 1.5px solid gray;
  border-radius: 20px;
  position: relative;
  top: 2px;
  margin-right: 5px;

  &:checked {
    border: 5px solid #ffeb00;
  }
`;

export const Policy = styled.p`
  font-size: 12px;
  font-weight: 700;
  color: gray;
  margin: 10px 0;
`;
