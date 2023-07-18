import { PRODUCT } from "@/assets/product.ko";
import { ProductOptionWithCount } from "@/dtos/product.dto";
import { FC } from "react";
import Txt from "../common/Txt.component";
import { useAppDispatch } from "@/hooks/useRedux";
import { removeProductOrder, updateProductOrder } from "@/store/productSlice";
import Button from "../common/Button.component";

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
        <Button
          color="light"
          className="h-8 w-8 rounded-lg"
          onClick={countDown}
        >
          -
        </Button>
        <Txt>{item.count}</Txt>
        <Button color="light" className="h-8 w-8 rounded-lg" onClick={countUp}>
          +
        </Button>
      </div>
    </div>
  );
};

export default ProductOptionOrderItem;
