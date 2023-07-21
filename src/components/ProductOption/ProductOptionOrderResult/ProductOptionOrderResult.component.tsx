import Txt from "@components/common/Txt.component";
import { PRODUCT } from "@/assets/product.ko";
import ProductOptionOrderItem from "./ProductOptionOrderItem.component";
import { pointByKo } from "@/functions/utils";
import { FC } from "react";
import { Order } from "@/hooks/useOrder";
const {
  SHIPPING_METHOD,
  DELIVERY_SHIP,
  SHIPPING_FEE,
  SHIPPING_FREE,
  SHIPPING_DESC,
  TOTAL_AMOUNT,
  PEICE,
  TOTAL_PRICE,
  WON,
} = PRODUCT;

interface ProductOptionOrderResultProps {
  order: Order[];
  removeOrder: (optionId: number) => void;
  updateOrder: (order: Order) => void;
}

const ProductOptionOrderResult: FC<ProductOptionOrderResultProps> = ({
  order,
  removeOrder,
  updateOrder,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <Txt typograph="h6" className="mr-2">
          {SHIPPING_METHOD}
        </Txt>
        <Txt>{DELIVERY_SHIP}</Txt>
      </div>
      <Txt typograph="h6">{SHIPPING_FEE}</Txt>
      <Txt typograph="sm" color="info" className="bg-slate-200 p-2 rounded-md">
        {SHIPPING_FREE}
      </Txt>
      <Txt>{SHIPPING_DESC}</Txt>
      <div className="divide-y border-[1px] rounded-md">
        {order.map((item) => (
          <ProductOptionOrderItem
            key={item.id}
            item={item}
            removeOrder={removeOrder}
            updateOrder={updateOrder}
          />
        ))}
      </div>
      <div className="flex justify-between">
        <Txt>
          {TOTAL_AMOUNT}:{" "}
          {pointByKo(order.reduce((acc, cur) => acc + cur.quantity, 0))}
          {PEICE}
        </Txt>
        <Txt>
          {TOTAL_PRICE}:{" "}
          {pointByKo(
            order.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
          )}
          {WON}
        </Txt>
      </div>
    </div>
  );
};

export default ProductOptionOrderResult;
