import { CART, PRODUCT } from "@/assets/product.ko";
import Txt from "@components/common/Txt.component";
import Button from "../common/Button.component";
import { useQuery } from "@tanstack/react-query";
import { getCart } from "@/remotes/product";
import { pointByKo } from "@/functions/utils";

const CartTotalSkeleton = () => (
  <div className="flex flex-col gap-4 p-4">
    <div className="flex justify-between items-center">
      <Txt typograph="h5">{CART.TOTAL_PREDICT_PRICE}</Txt>
      <div className="h-6 w-1/6 bg-slate-300 animate-pulse"></div>
    </div>
    <Button className="w-full p-4 rounded-lg">{CART.TO_ORDER}</Button>
  </div>
);

const CartTotal = () => {
  const { data, isLoading } = useQuery(["cart"], getCart);
  if (!data || isLoading) {
    return <CartTotalSkeleton />;
  }
  const { products } = data.data.response;

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex justify-between">
        <Txt typograph="h5">{CART.TOTAL_PREDICT_PRICE}</Txt>
        <Txt typograph="h5" color="primary">
          {pointByKo(
            products.reduce(
              (acc, cur) =>
                acc + cur.carts.reduce((acc, cur) => acc + cur.price, 0),
              0
            )
          )}
          {PRODUCT.WON}
        </Txt>
      </div>
      <Button className="w-full p-4 rounded-lg">{CART.TO_ORDER}</Button>
    </div>
  );
};

export default CartTotal;
