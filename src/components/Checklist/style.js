import { styled } from "styled-components";

export const CheckBoxLabel = styled.label`
  cursor: pointer;
  display: block;
  font-size: 14px;
  padding: 5px 10px;
  input {
    cursor: pointer;
    appearance: none;
    border: 1.5px solid lightgray;
    width: 20px;
    height: 20px;
    position: relative;
    top: 7px;
    margin-right: 7px;

    &:checked {
      background-color: #ffeb00;

      background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
      border: 0;
    }
  }
`;

export const CheckAllBoxLabel = styled(CheckBoxLabel)`
  font-size: 18px;
  font-weight: 700;
  border-bottom: 1px solid lightgray;
  padding: 10px 10px 16px 10px;
`;
