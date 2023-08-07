import styled from 'styled-components';

export const ProductInfoContainer = styled.div`
  display: flex;
  margin-top: 3rem;
  margin-left: 4.5rem;
  margin-right: 2rem;
  border-right: 1px solid #d8d8d8;
  padding-right: 1rem;
`;

export const ProductTitle = styled.div`
  font-size: 1.3rem;
  flex-direction: column;
`;

export const ProductPrice = styled.span`
  font-size: 0.8rem;
  display: inline-block;
  margin: 1rem 0;
  padding: 0.7rem 1.3rem;
  color: #505050;
  background-color: #fee500;
  font-weight: bold;
  border-radius: 50px;
`;

export const TextContainer = styled.div`
  margin: 0 1rem;
  width: 35rem;
`;
