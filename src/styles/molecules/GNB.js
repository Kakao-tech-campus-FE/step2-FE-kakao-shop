import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  overflow: hidden;
  align-items: center;
  padding: 1.4rem 2rem;
`;

export const Header = styled.header`
  width: 100%;
  border-bottom: 1px solid #d8d8d8;
`;

export const MenuUtil = styled.span`
  display: flex;
  min-width: 1200px;
  align-items: center;
  margin-left: auto;
  .header-login {
    font-size: 0.9rem;
    padding-left: 1.5rem;
    border-left: 1px solid #d8d8d8;
  }
  .header-cart {
    padding-right: 1.5rem;
  }
`;
