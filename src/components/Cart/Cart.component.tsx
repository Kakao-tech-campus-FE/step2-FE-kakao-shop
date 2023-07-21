import { CART } from "@/assets/product.ko";
import CartItem from "./CartItem.component";
import Txt from "@components/common/Txt.component";
import CartTotal from "./CartTotal.component";
import GlobalLoading from "../common/GlobalLoading.component";
import useCart from "@/hooks/useCart";

const Cart = () => {
  const { isLoading, onOrder, products, removeOrder, updateOrder } = useCart();

  if (!products || isLoading) {
    return <GlobalLoading isLoading={isLoading} />;
  }

  return (
    <>
      <div className="border-2 rounded-md divide-y-2 bg-white mb-4">
        <h3 className="w-full text-center p-4">
          <Txt typograph="h5">{CART.CART}</Txt>
        </h3>
        <div className="w-full p-4 flex flex-col gap-4">
          <CartItem
            products={products}
            isLoading={isLoading}
            removeOrder={removeOrder}
            updateOrder={updateOrder}
          />
        </div>
      </div>
      <div className="border-2 rounded-md bg-white">
        <CartTotal
          isLoading={isLoading}
          products={products}
          onOrder={onOrder}
        />
      </div>
    </>
  );
};

export default Cart;
