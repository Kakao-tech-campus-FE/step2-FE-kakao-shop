import styled from 'styled-components';

export const Input = styled.input`
  border-radius: 4px;
  border-width: 1px;
  border: 1px solid #d8d8d8;
  width: 25rem;
  height: 2rem;
  font-size: 1rem;
  box-sizing: content-box;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding-left: 7px;
  @media only screen and (max-width: 700px) {
    width: 80vw;
    margin-left: 10vw;
    margin-right: 10vw;
  }
`;

export const Label = styled.label`
  font-size: 1rem;
  display: block;
  @media only screen and (max-width: 700px) {
    margin-left: 10vw;
  }
`;
