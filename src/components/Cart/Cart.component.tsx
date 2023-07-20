import { CART } from "@/assets/product.ko";
import CartItem from "./CartItem.component";
import Txt from "../common/Txt.component";

const Cart = () => {
  return (
    <div className="border-2 rounded-md divide-y-2 m-12">
      <h3 className="w-full text-center p-4">
        <Txt typograph="h5">{CART.CART}</Txt>
      </h3>
      <CartItem />
    </div>
  );
};

export default Cart;
