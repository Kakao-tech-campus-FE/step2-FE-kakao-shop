import GlobalTemplate from "@/components/templates/global-template/GlobalTemplate.jsx";
import styled from "styled-components";
import OrderDelivery from "@/components/organisms/order-delivery/OrderDelivery.jsx";
import useGetCartItemsQuery from "@/hooks/useGetCartItemsQuery.js";
import OrderProductColumn from "@/components/organisms/order-product-column/OrderProductColumn.jsx";
import OrderAgreeTerm from "@/components/organisms/order-agree-term/OrderAgreeTerm.jsx";

const Styled = {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
};
function Order() {
  const { data } = useGetCartItemsQuery();
  return (
    <GlobalTemplate
      title="장바구니"
      style={{
        backgroundColor: "#f4f4f4",
      }}
    >
      <Styled.Container>
        <OrderDelivery />
        {data?.products?.map((product) => (
          <OrderProductColumn
            key={product.id}
            id={product.id}
            productName={product.productName}
            carts={product.carts}
          />
        ))}

        <OrderAgreeTerm totalPrice={data?.totalPrice} />
      </Styled.Container>
    </GlobalTemplate>
  );
}

export default Order;
