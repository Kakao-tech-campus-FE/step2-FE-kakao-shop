import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  @media only screen and (max-width: 700px) {
    overflow: hidden;
  }
`;

export const Title = styled.div`
  font-size: 2rem;
  margin-bottom: 0.8rem;
`;

export const Box = styled.div`
  border: 1px solid #d8d8d8;
  padding: 2rem;
  margin-bottom: 1rem;
  @media only screen and (max-width: 700px) {
    border-width: 0;
    padding-right: 0;
    padding-left: 0;
  }
`;

export const Button = styled.button`
  background-color: #fee500;
  border-width: 0;
  border-radius: 5px;
  width: 25.5rem;
  height: 2.7rem;
  margin-top: 1.5rem;
  font-size: 1rem;
  &:hover {
    background-color: #fed800;
    cursor: pointer;
  }
  @media only screen and (max-width: 700px) {
    width: 81.5vw;
    margin-left: 10vw;
    margin-right: 10vw;
  }
  pointer-events: ${(props) => (props.disabled ? 'none' : null)};
`;
