import { styled } from "styled-components";

export const CheckBoxLabel = styled.label`
  display: block;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
  input {
    position: relative;
    top: 7px;
    width: 20px;
    height: 20px;
    margin-right: 7px;
    border: 1.5px solid lightgray;
    appearance: none;
    cursor: pointer;

    &:checked {
      border: 0;
      background-color: #ffeb00;
      background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    }
  }
`;

export const CheckAllBoxLabel = styled(CheckBoxLabel)`
  padding: 10px 10px 16px 10px;
  border-bottom: 1px solid lightgray;
  font-size: 18px;
  font-weight: 700;
`;
