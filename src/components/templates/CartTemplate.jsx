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
  const {
    data: cart,
    isLoading,
    refetch,
  } = useQuery(["cart"], showCart, {
    // 사용자에게 alert로 문제를 알리고, refetch를 통해 계속 페칭
    onError: () => {
      alert("네트워크 연결이 원활하지 않습니다. 네트워크 상태를 확인해주세요.");
      refetch();
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
