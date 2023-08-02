import GlobalTemplate from "@/components/templates/global-template/GlobalTemplate.jsx";
import useGetOrderResult from "@/hooks/useGetOrderResult.js";
import styled from "styled-components";
import OrderProductColumn from "@/components/organisms/order-product-column/OrderProductColumn.jsx";

const Styled = {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  Title: styled.div`
    width: 100%;
    padding: 1rem;
    font-size: 0.9rem;
    font-weight: 600;
    text-align: center;
    background-color: white;
    border-bottom: ${({ theme }) => theme.border.default};
  `,
  Description: styled.div`
    width: 100%;
    padding: 1.5rem 0;
    font-size: 1.2rem;
    font-weight: 600;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #fffef0;
  `,
};
function OrderResult() {
  const { data } = useGetOrderResult();
  return (
    <GlobalTemplate
      title="주문 결과"
      style={{
        backgroundColor: "#f4f4f4",
      }}
    >
      <Styled.Container>
        <Styled.Title>주문 결과</Styled.Title>
        <Styled.Description>주문이 완료되었습니다 🎉</Styled.Description>
        {data?.products?.map((product) => (
          <OrderProductColumn
            key={product.productName}
            id={product.productName}
            productName={product.productName}
            carts={product.items}
            isOrderResult={true}
          />
        ))}
      </Styled.Container>
    </GlobalTemplate>
  );
}

export default OrderResult;
