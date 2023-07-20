import CartContainer from "@components/atoms/CartContainer";
import EmptyCart from "@components/molecules/EmptyCart";

const CartForm = () => {
  return (
    <CartContainer>
      <EmptyCart />
    </CartContainer>
  );
};

export default CartForm;
