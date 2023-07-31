import { CartData, CartItem } from '../types/product';

export function removeEmptyCarts(cartData: CartData) {
  const removedEmptyOption: CartItem[] = cartData.products.map((product) => ({
    ...product,
    carts: product.carts.filter((cart) => cart.quantity > 0),
  }));

  const removedEmptyCart: CartData = {
    ...cartData,
    products: removedEmptyOption.filter((product) => product.carts.length > 0),
  };

  return removedEmptyCart;
}
