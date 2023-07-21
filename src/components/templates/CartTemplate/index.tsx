import { getCart } from "@apis/getCart";
import InnerContainer from "@components/atoms/InnerContainer";
import CartForm from "@components/organisms/CartForm";
import { useQuery } from "@tanstack/react-query";
import { styled } from "styled-components";

const CartTemplate = () => {
  const { data } = useQuery(["/carts"], getCart);

  return (
    <div>
      <InnerContainer>
        <Wrapper>
          <CartForm item={data?.data.response} />
        </Wrapper>
      </InnerContainer>
    </div>
  );
};

export default CartTemplate;

const Wrapper = styled.div`
  margin-top: 80px;
`;
