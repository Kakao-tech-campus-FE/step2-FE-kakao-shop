import styled from "styled-components";
import OrderProductOption from "@/components/molecules/order-product-option/OrderProductOption.jsx";

const Styled = {
  Container: styled.section`
    margin-top: ${({ $isOrderResult }) => $isOrderResult || "0.5rem"};
    padding: 0 1rem;
    width: 100%;

    background-color: white;
    border-top: ${({ theme }) => theme.border.default};
    border-bottom: ${({ theme }) => theme.border.default};
  `,
};

function OrderProductColumn({ id, productName, carts, isOrderResult }) {
  return (
    <Styled.Container $isOrderResult={isOrderResult}>
      {carts.map((item) => (
        <OrderProductOption
          key={item.id}
          productName={productName}
          productId={id}
          optionName={
            isOrderResult ? item?.optionName : item?.option?.optionName
          }
          quantity={item?.quantity}
          price={item?.price}
          isOrderResult={isOrderResult}
        />
      ))}
    </Styled.Container>
  );
}

export default OrderProductColumn;
