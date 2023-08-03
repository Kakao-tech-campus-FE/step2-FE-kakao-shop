import { getCart } from "@apis/getCart";
import InnerContainer from "@components/atoms/InnerContainer";
import Loader from "@components/atoms/Loader";
import OrderForm from "@components/organisms/OrderForm";
import { useQuery } from "@tanstack/react-query";
import { styled } from "styled-components";

const OrderTemplate = () => {
  const { data, isLoading } = useQuery(["/carts"], getCart);
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <InnerContainer>
          <Wrapper>
            <OrderForm item={data?.data.response} />
          </Wrapper>
        </InnerContainer>
      )}
    </div>
  );
};

export default OrderTemplate;

const Wrapper = styled.div`
  margin-top: 80px;
`;
