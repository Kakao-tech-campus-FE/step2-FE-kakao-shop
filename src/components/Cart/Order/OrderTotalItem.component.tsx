import { CART, PRODUCT } from "@/assets/product.ko";
import Txt from "@/components/common/Txt.component";
import { ProductOrder } from "@/dtos/product.dto";
import { pointByKo } from "@/functions/utils";
import { FC, Fragment } from "react";

interface OrderTotalItemProps {
  products: ProductOrder[] | undefined;
  isLoading: boolean;
}

const CartTotalSkeleton = () => (
  <>
    <div className="flex flex-col gap-4 p-4">
      <Txt typograph="h5">{CART.TOTAL_PREDICT_PRICE}</Txt>
    </div>

    <div className="flex flex-col gap-2 p-4 rounded-md">
      <div className="h-6 w-64 bg-slate-300 animate-pulse rounded"></div>
      <div className="h-4 w-24 bg-slate-300 animate-pulse rounded"></div>
      <div className="h-4 w-52 bg-slate-300 animate-pulse rounded"></div>
    </div>
    <div className="flex flex-col gap-2 p-4 rounded-md">
      <div className="h-6 w-64 bg-slate-300 animate-pulse rounded"></div>
      <div className="h-4 w-24 bg-slate-300 animate-pulse rounded"></div>
      <div className="h-4 w-52 bg-slate-300 animate-pulse rounded"></div>
    </div>
    <div className="p-4 flex justify-between">
      <div className="h-6 w-64 bg-slate-300 animate-pulse rounded"></div>
      <div className="h-6 w-32 bg-slate-300 animate-pulse rounded"></div>
    </div>
  </>
);

const OrderTotalItem: FC<OrderTotalItemProps> = ({ products, isLoading }) => {
  if (!products || isLoading) {
    return <CartTotalSkeleton />;
  }

  const totalPrice = products.reduce(
    (acc, cur) => acc + cur.carts.reduce((acc, cur) => acc + cur.price, 0),
    0
  );

  return (
    <>
      {products.map((product) => (
        <Fragment key={product.id}>
          <Txt typograph="h5" className="p-4 block">
            {CART.ORDER_DESC}
          </Txt>
          <div className="rounded-md divide-y">
            {product.carts.map((cart) => (
              <Fragment key={cart.id}>
                <div className="flex flex-col p-4">
                  <Txt typograph="h6">{cart.option.optionName}</Txt>
                  <Txt typograph="h6">
                    {cart.quantity} {PRODUCT.PEICE}
                  </Txt>
                  <Txt typograph="h6">
                    {pointByKo(cart.option.price)} {PRODUCT.WON}
                  </Txt>
                </div>
              </Fragment>
            ))}
          </div>
        </Fragment>
      ))}
      <div className="flex justify-between items-center p-4">
        <Txt typograph="h5">{CART.TOTAL_PREDICT_PRICE}</Txt>
        <Txt typograph="h5" color="primary">
          {`${pointByKo(totalPrice)} ${PRODUCT.WON}`}
        </Txt>
      </div>
    </>
  );
};

export default OrderTotalItem;
