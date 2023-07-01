import { styled } from "styled-components";

export const ToggleButton = styled.input`
  appearance: none;
  width: 17px;
  height: 17px;
  border: 1.5px solid gray;
  border-radius: 10px;
  margin: 0 8px 0 10px;
  cursor: pointer;

  &:checked {
    background-color: #ffeb00;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='black' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    border: 0;
  }
`;

export const ToggleLabel = styled.label`
  font-size: 15px;
  color: #292929;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const ToggleMessage = styled.p`
  margin: 15px 0 0 10px;
`;
