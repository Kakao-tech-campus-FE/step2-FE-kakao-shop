import { CART, PRODUCT } from "@/assets/product.ko";
import Txt from "@components/common/Txt.component";
import Button from "../common/Button.component";
import { pointByKo } from "@/functions/utils";
import { FC } from "react";
import { ProductOrder } from "@/dtos/product.dto";

const CartTotalSkeleton = () => (
  <div className="flex flex-col gap-4 p-4">
    <div className="flex justify-between items-center">
      <Txt typograph="h5">{CART.TOTAL_PREDICT_PRICE}</Txt>
      <div className="h-6 w-1/6 bg-slate-300 animate-pulse"></div>
    </div>
    <Button className="w-full p-4 rounded-lg">{CART.TO_ORDER}</Button>
  </div>
);

interface CartTotalProps {
  products: ProductOrder[];
  isLoading: boolean;
  onOrder: () => void;
}

const CartTotal: FC<CartTotalProps> = ({ products, isLoading, onOrder }) => {
  if (!products || isLoading) {
    return <CartTotalSkeleton />;
  }

  const totalPrice = products.reduce(
    (acc, cur) =>
      acc +
      cur.carts.reduce((acc, cur) => acc + cur.quantity * cur.option.price, 0),
    0
  );

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex justify-between">
        <Txt typograph="h5">{CART.TOTAL_PREDICT_PRICE}</Txt>
        <Txt typograph="h5" color="primary">
          {`${pointByKo(totalPrice)} ${PRODUCT.WON}`}
        </Txt>
      </div>
      <Button className="w-full p-4 rounded-lg" onClick={onOrder}>
        {CART.TO_ORDER}
      </Button>
    </div>
  );
};

export default CartTotal;
