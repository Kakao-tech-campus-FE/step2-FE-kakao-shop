import styled from 'styled-components';

export const LoginError = styled.div`
  background-color: #f6f6f6;
  border: 1px solid #f6f6f6;
  color: gray;
  .login-error {
    font-size: 0.8rem;
    color: red;
    padding: 1.5rem;
  }
  @media only screen and (max-width: 700px) {
    margin-left: 10vw;
    margin-right: 10vw;
  }
`;
