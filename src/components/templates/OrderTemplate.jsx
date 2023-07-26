import { styled } from "styled-components";
import GlobalNavBar from "../organisms/GlobalNavBar";
import ProductsLoader from "../atoms/ProductsLoader";
import { useQuery } from "react-query";
import { showCart } from "../../services/apis";
import OrderList from "../organisms/OrderList";

const Container = styled.div`
  position: relative;
  top: 60px;
  width: 1200px;
  height: calc(100vh - 80px);
  margin: 0 auto;
`;

const OrderTemplate = () => {
  const { data: cart, isLoading } = useQuery(["cart"], showCart, {
    onError: (err) => {
      console.log(err);
    },
  });

  return (
    <>
      <GlobalNavBar height="60px" />
      <Container>
        {isLoading ? <ProductsLoader /> : <OrderList cart={cart} />}
      </Container>
    </>
  );
};

export default OrderTemplate;
