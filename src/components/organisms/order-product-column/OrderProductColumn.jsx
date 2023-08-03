import styled from "styled-components";
import OrderProductOption from "@/components/molecules/order-product-option/OrderProductOption.jsx";
import PropTypes from "prop-types";

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

function OrderProductColumn({
  id,
  productName,
  carts,
  isOrderResult,
  optionName,
}) {
  return (
    <Styled.Container $isOrderResult={isOrderResult}>
      {carts.map((item) => (
        <OrderProductOption
          key={item.id}
          productName={productName}
          productId={id}
          optionName={optionName}
          quantity={item?.quantity}
          price={item?.price}
          isOrderResult={isOrderResult}
        />
      ))}
    </Styled.Container>
  );
}

OrderProductColumn.propTypes = {
  carts: PropTypes.array.isRequired,
  productName: PropTypes.string,
  id: PropTypes.string,
  isOrderResult: PropTypes.bool,
  optionName: PropTypes.string,
};

export default OrderProductColumn;
