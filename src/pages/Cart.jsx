import { Suspense, useEffect, useState } from "react";
import styled from "styled-components";
import routes from "@/constants/routes.js";
import { useNavigate } from "react-router-dom";

import GlobalTemplate from "@/components/templates/global-template/GlobalTemplate.jsx";
import Loader from "@/components/atoms/loader/Loader.jsx";
import useGetCartItemsQuery from "@/hooks/useGetCartItemsQuery.js";
import CartProductColumn from "@/components/organisms/cart-product-column/CartProductColumn.jsx";
import useUpdateCartItemsMutation from "@/hooks/useUpdateCartItemsMutation.js";
import Button from "@/components/atoms/button/Button.jsx";

const Styled = {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  PriceBox: styled.section`
    width: 100%;
  `,
  PriceInfo: styled.div`
    padding: 1.5rem;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 1rem;
    font-weight: 600;
    color: black;

    background-color: white;
    border-top: ${({ theme }) => theme.border.default};
    border-bottom: ${({ theme }) => theme.border.default};

    strong {
      color: ${({ theme }) => theme.color.highlight};
    }
  `,
};

function Cart() {
  const { data } = useGetCartItemsQuery();
  const [cartOptions, setCartOptions] = useState([]);
  const { mutate } = useUpdateCartItemsMutation();
  const navigate = useNavigate();

  const totalPrice = data?.products
    ?.map((product) =>
      product?.carts.reduce((sum, option) => sum + option.price, 0)
    )
    .reduce((sum, productPrice) => sum + productPrice, 0);

  const handleOrderButtonClick = () => {
    navigate(routes.order);
  };

  useEffect(() => {
    const cart = data?.products
      ?.map((product) =>
        product?.carts?.map((cart) => {
          return { cartId: cart.id, quantity: cart.quantity };
        })
      )
      .flat();

    setCartOptions([...cart]);
  }, [data]);

  useEffect(() => {
    const updateCartItems = () => {
      mutate({ items: cartOptions });
    };

    updateCartItems();
  }, [cartOptions, mutate]);

  return (
    <GlobalTemplate
      title="장바구니"
      style={{
        backgroundColor: "#f4f4f4",
      }}
    >
      <Suspense fallback={<Loader />}>
        <Styled.Container>
          <div style={{ maxWidth: "870px", width: "100%" }}>
            {data?.products?.map((item) => (
              <CartProductColumn
                key={item.id}
                productId={item.id}
                productName={item.productName}
                carts={item.carts}
                setCartOptions={setCartOptions}
              />
            ))}
            <Styled.PriceBox>
              <Styled.PriceInfo>
                <div>주문 예상금액</div>
                <div>
                  <strong>{totalPrice.toLocaleString()}원</strong>
                </div>
              </Styled.PriceInfo>
              <Button
                backgroundColor={"#feeb00"}
                style={{
                  color: "#333333",
                  width: "100%",
                  padding: "1rem",
                  fontWeight: 600,
                }}
                disabled={data?.products?.length === 0}
                onClick={handleOrderButtonClick}
              >
                {data?.products?.length}건 주문하기
              </Button>
            </Styled.PriceBox>
          </div>
        </Styled.Container>
      </Suspense>
    </GlobalTemplate>
  );
}

export default Cart;
