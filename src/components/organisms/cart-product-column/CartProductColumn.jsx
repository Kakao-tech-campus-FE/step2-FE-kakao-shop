import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import routes from "@/constants/routes.js";
import CartOptionColumn from "@/components/molecules/cart-option-column/CartOptionColumn.jsx";
import PropTypes from "prop-types";

const Styled = {
  Container: styled.section`
    margin-bottom: 0.5rem;
    padding: 1.5rem;
    width: 100%;

    background-color: white;
    border-top: ${({ theme }) => theme.border.default};
    border-bottom: ${({ theme }) => theme.border.default};
  `,
  Name: styled.div`
    margin-bottom: 1rem;
    color: #333333;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
  `,
};

function CartProductColumn({ productId, productName, carts, setCartOptions }) {
  const navigate = useNavigate();

  const handleCartItemClick = () => {
    navigate(`${routes.product}/${productId}`);
  };
  return (
    <Styled.Container>
      <Styled.Name onClick={handleCartItemClick}>{productName}</Styled.Name>
      {carts.map(
        (cartItem) =>
          cartItem.quantity !== 0 && (
            <CartOptionColumn
              key={cartItem.id}
              cartId={cartItem.id}
              option={cartItem.option}
              quantity={cartItem.quantity}
              price={cartItem.price}
              setCartOptions={setCartOptions}
            />
          )
      )}
    </Styled.Container>
  );
}

CartProductColumn.propTypes = {
  productId: PropTypes.number,
  productName: PropTypes.string,
  carts: PropTypes.array,
  setCartOptions: PropTypes.func,
};

export default CartProductColumn;
