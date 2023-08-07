import styled from 'styled-components';

export const Msg = styled.div`
  font-size: 0.5rem;
  color: red;
  margin-bottom: ${(props) => (props.children ? '1rem' : '0')};
  @media only screen and (max-width: 700px) {
    margin-left: 10vw;
    margin-right: 10vw;
  }
`;
