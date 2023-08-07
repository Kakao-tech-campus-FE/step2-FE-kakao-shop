import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  font-weight: 500;
  .title {
    font-weight: bold;
  }
`;

export const Option = styled.div`
  .title {
    margin-right: 3.5rem;
  }
`;

export const Quantity = styled.div`
  padding-top: 0.8rem;
  .title {
    margin-right: 1.3rem;
  }
`;

export const Price = styled.div`
  padding-top: 0.8rem;
  .title {
    margin-right: 3.5rem;
  }
`;
