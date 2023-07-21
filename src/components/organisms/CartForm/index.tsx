import CartContainer from "@components/atoms/CartContainer";
import CartList from "@components/molecules/CartList";
import EmptyCart from "@components/molecules/EmptyCart";
import { Option } from "../ProductForm";

export interface Cart {
  id: number;
  option: Option;
  price: number;
  quantity: number;
}

export interface Product {
  carts: Cart[];
  id: number;
  productName: string;
}

export interface Item {
  products: Product[];
  totalPrice: number;
}

interface Props {
  item: Item;
}

const CartForm = ({ item }: Props) => {
  return (
    <CartContainer>
      {item.products.length ? <CartList item={item} /> : <EmptyCart />}
    </CartContainer>
  );
};

export default CartForm;
