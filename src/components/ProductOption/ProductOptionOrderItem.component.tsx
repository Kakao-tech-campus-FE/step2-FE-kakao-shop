import { PRODUCT } from "@/assets/product.ko";
import { ProductOptionWithCount } from "@/dtos/product.dto";
import { FC } from "react";
import Txt from "../common/Txt.component";
import { useAppDispatch } from "@/hooks/useRedux";
import { removeProductOrder, updateProductOrder } from "@/store/productSlice";

const { CHOICE_PRODUCT } = PRODUCT;

interface ProductOptionOrderItemProps {
  item: ProductOptionWithCount;
}

const ProductOptionOrderItem: FC<ProductOptionOrderItemProps> = ({ item }) => {
  const dispatch = useAppDispatch();

  const countUp = () => {
    dispatch(updateProductOrder({ id: item.id, count: item.count + 1 }));
  };
  const countDown = () => {
    if (item.count === 1) {
      dispatch(removeProductOrder(item.id));
    }
    dispatch(updateProductOrder({ id: item.id, count: item.count - 1 }));
  };

  return (
    <div className="p-2">
      <Txt>{CHOICE_PRODUCT}: </Txt>
      <Txt>{item.optionName}</Txt>
      <div className="flex gap-2">
        <button
          className="h-8 w-8 bg-slate-100 rounded-lg hover:bg-slate-200"
          onClick={countDown}
        >
          -
        </button>
        <Txt>{item.count}</Txt>
        <button
          className="h-8 w-8 bg-slate-100 rounded-lg hover:bg-slate-200"
          onClick={countUp}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ProductOptionOrderItem;
