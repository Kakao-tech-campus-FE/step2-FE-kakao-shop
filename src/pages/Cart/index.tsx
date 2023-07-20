import CartTemplate from "@components/templates/CartTemplate";
import { styled } from "styled-components";

const Cart = () => {
  return (
    <Background>
      <CartTemplate />
    </Background>
  );
};

export default Cart;

const Background = styled.div`
  min-height: calc(100vh - 60px);
  min-width: 1280px;
  background-color: #f4f4f4;
`;
