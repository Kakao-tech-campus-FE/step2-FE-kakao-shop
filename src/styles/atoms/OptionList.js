import styled from 'styled-components';

export const OptionItemId = styled.span`
  font-weight: 400;
`;

export const OptionItem = styled.div`
  border: 1px solid #d8d8d8;
  padding: 0.5rem;
  font-size: 0.9rem;
  font-weight: bold;
  cursor: pointer;
`;

export const OptionPrice = styled.div`
  padding-left: 1.3rem;
  font-weight: 400;
`;

export const Container = styled.div`
  padding: 0.5rem 0;
  > * {
    &:first-child {
      border-top-right-radius: 8px;
      border-top-left-radius: 8px;
    }

    &:last-child {
      border-bottom-right-radius: 8px;
      border-bottom-left-radius: 8px;
    }
  }
`;
