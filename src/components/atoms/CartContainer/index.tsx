import React from "react";
import { styled } from "styled-components";

interface Props {
  children?: React.ReactNode;
}

const CartContainer = ({ children }: Props) => {
  return (
    <Container>
      <Header>
        <p>장바구니</p>
      </Header>
      {children}
    </Container>
  );
};

export default CartContainer;

const Container = styled.div`
  margin: 0 auto;
  width: 870px;
  background-color: #fff;
`;

const Header = styled.div`
  height: 44px;
  border-top: 1px solid #ebebeb;
  text-align: center;

  & > p {
    margin-top: 11px;
    font-weight: 700;
    font-size: 15px;
    line-height: 21px;
  }
`;
