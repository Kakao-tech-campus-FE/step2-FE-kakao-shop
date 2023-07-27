import { getCart } from "@apis/getCart";
import InnerContainer from "@components/atoms/InnerContainer";
import Loader from "@components/atoms/Loader";
import CartForm from "@components/organisms/CartForm";
import { useQuery } from "@tanstack/react-query";
import { styled } from "styled-components";

const CartTemplate = () => {
  const { data, isLoading } = useQuery(["/carts"], getCart);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <InnerContainer>
          <Wrapper>
            <CartForm item={data?.data.response} />
          </Wrapper>
        </InnerContainer>
      )}
    </div>
  );
};

export default CartTemplate;

const Wrapper = styled.div`
  margin-top: 80px;
`;
