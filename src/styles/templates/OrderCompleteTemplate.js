import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem auto;
  min-width: 700px;
`;

export const HeadContainer = styled.div`
  text-align: center;
`;

export const Head = styled.h1`
  font-size: 1.7rem;
  font-weight: 600;
`;

export const HeadText = styled.div`
  font-size: 1rem;
  margin-bottom: 3rem;
`;

export const ProductsInfo = styled.div`
  border: 2px solid #ffe6eb;
  text-align: center;
  padding: 1rem;
  min-width: 700px;
  font-weight: bold;
`;

export const Payment = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  font-weight: bold;
  .price {
    color: #288cff;
  }
  margin-top: 1rem;
  border: 2px solid #ffe6eb;
  padding: 1rem;
`;

export const Button = styled.button`
  display: inline-block;
  width: 700px;
  padding: 0.7rem;
  font-weight: bold;
  border: none;
  background-color: #fee500;
`;
