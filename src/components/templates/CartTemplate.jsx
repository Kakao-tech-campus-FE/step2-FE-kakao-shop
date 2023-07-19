import { styled } from "styled-components";
import GlobalNavBar from "../organisms/GlobalNavBar";
import ProductsLoader from "../atoms/ProductsLoader";
import { useQuery } from "react-query";
import { showCart } from "../../services/apis";
import CartList from "../organisms/CartList";

const Container = styled.div`
  position: relative;
  top: 60px;
  width: 1200px;
  height: calc(100vh - 80px);
  margin: 0 auto;
`;

const CartTemplate = () => {
  const { data: cart, isLoading } = useQuery(["cart"], showCart, {
    onError: (err) => {
      console.log(err);
    },
  });

  return (
    <>
      <GlobalNavBar height="60px" />
      <Container>
        {isLoading ? <ProductsLoader /> : <CartList cart={cart} />}
      </Container>
    </>
  );
};

export default CartTemplate;
