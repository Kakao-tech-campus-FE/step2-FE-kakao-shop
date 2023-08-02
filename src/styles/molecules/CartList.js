import styled from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`;

export const ListBox = styled.div`
  width: 60rem;
  margin-left: 8rem;
  margin-right: 8rem;
  @media only screen and (max-width: 800px) {
    margin-left: 7vw;
    margin-right: 7vw;
  }
`;

export const Title = styled.div`
  border: 2px solid #ffe6eb;
  font-size: 1.1rem;
  font-weight: bold;
  text-align: center;
  padding: 1rem;
  border-bottom: 2px solid #ffe6eb;
`;
export const OptionContainer = styled.div`
  border: 2px solid #ffe6eb;
  border-top: none;
`;

export const TotalPrice = styled.div`
  margin-top: 1rem;
  padding: 1rem 1rem;
  display: flex;
  border-top: 2px solid #ffe6eb;
  border-left: 2px solid #ffe6eb;
  border-right: 2px solid #ffe6eb;
  justify-content: space-between;
  font-size: 1.1rem;
  font-weight: bold;
`;

export const OrderButton = styled.button`
  background-color: #fee500;
  border: none;
  width: 100%;
  height: 3rem;
  font-size: 1.1rem;
  font-weight: bold;
`;
