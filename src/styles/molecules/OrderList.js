import styled from 'styled-components';

export const Container = styled.div`
  padding: 0.7rem;
  border: 2px solid #ffe6eb;
  border-top: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const OneProductContainer = styled.div`
  padding-bottom: 1rem;
  border-bottom: 2px solid #ffe6eb;
`;

export const ProductName = styled.div`
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

export const OptionContainer = styled.div`
  padding-left: 1rem;
  font-size: 0.9rem;
`;
export const Option = styled.div`
  margin-bottom: 1rem;
`;

export const OptionQuantityPrice = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
`;
