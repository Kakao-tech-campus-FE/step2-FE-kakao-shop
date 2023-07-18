import { useAppSelector } from "@/hooks/useRedux";
import Txt from "@components/common/Txt.component";
import { PRODUCT } from "@/assets/product.ko";
import ProductOptionOrderItem from "./ProductOptionOrderItem.component";
import { pointByThree } from "@/functions/utils";
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

const ProductOptionOrderResult = () => {
  const { order } = useAppSelector((state) => state.productSlice);

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
          <ProductOptionOrderItem key={item.id} item={item} />
        ))}
      </div>
      <div className="flex justify-between">
        <Txt>
          {TOTAL_AMOUNT}:{" "}
          {pointByThree(order.reduce((acc, cur) => acc + cur.count, 0))}
          {PEICE}
        </Txt>
        <Txt>
          {TOTAL_PRICE}:{" "}
          {pointByThree(
            order.reduce((acc, cur) => acc + cur.price * cur.count, 0)
          )}
          {WON}
        </Txt>
      </div>
    </div>
  );
};

export default ProductOptionOrderResult;
