import styled from 'styled-components';

export const ItemTitle = styled.div`
  padding: 1rem;
  font-weight: bold;
`;

export const ItemOption = styled.div`
  padding: 0.5rem 0.5rem;
  border: 1px solid #ffd0cd;
  margin: 0.7rem 2.5rem;
  font-size: 0.9rem;
`;

export const ItemCountPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
`;

export const ItemOptionTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ItemOptionDelete = styled.span`
  color: red;
  font-size: 1rem;
  font-weight: bold;
  margin-right: 0.3rem;
  cursor: pointer;
`;
