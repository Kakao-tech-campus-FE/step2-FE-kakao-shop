import InnerContainer from "@components/atoms/InnerContainer";
import CartForm from "@components/organisms/CartForm";
import { styled } from "styled-components";

const CartTemplate = () => {
  return (
    <div>
      <InnerContainer>
        <Wrapper>
          <CartForm />
        </Wrapper>
      </InnerContainer>
    </div>
  );
};

export default CartTemplate;

const Wrapper = styled.div`
  margin-top: 80px;
`;
