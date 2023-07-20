import { PRODUCT } from "@/assets/product.ko";
import { ProductOptionWithQuantity } from "@/dtos/product.dto";
import { FC } from "react";
import Txt from "@components/common/Txt.component";
import { useAppDispatch } from "@/hooks/useRedux";
import { removeProductOrder, updateProductOrder } from "@/store/productSlice";
import Button from "@components/common/Button.component";
import { pointByThree } from "@/functions/utils";

const { CHOICE_PRODUCT } = PRODUCT;

interface ProductOptionOrderItemProps {
  item: ProductOptionWithQuantity | undefined;
  countUpCallback?: () => void;
  countDownCallback?: () => void;
  removeCallback?: () => void;
}

const ProductOptionOrderItem: FC<ProductOptionOrderItemProps> = ({
  item,
  countDownCallback,
  countUpCallback,
  removeCallback,
}) => {
  const dispatch = useAppDispatch();

  if (!item) return <></>;

  const countUp = () => {
    dispatch(
      updateProductOrder({
        optionId: item.optionId,
        quantity: item.quantity + 1,
      })
    );

    if (countUpCallback) {
      countUpCallback();
    }
  };

  const countDown = () => {
    if (item.quantity === 1) {
      dispatch(removeProductOrder(item.optionId));
      if (removeCallback) {
        removeCallback();
      }
    }
    dispatch(
      updateProductOrder({
        optionId: item.optionId,
        quantity: item.quantity - 1,
      })
    );
    if (countDownCallback) {
      countDownCallback();
    }
  };

  return (
    <div className="p-2">
      <Txt>{CHOICE_PRODUCT}: </Txt>
      <Txt>{item.optionName}</Txt>
      <div className="w-full flex justify-between">
        <div className="flex gap-2 items-center border-[1px] rounded-lg w-fit ">
          <Button
            color="light"
            className="h-8 w-8 rounded-lg"
            onClick={countDown}
          >
            -
          </Button>
          <Txt>{item.quantity}</Txt>
          <Button
            color="light"
            className="h-8 w-8 rounded-lg"
            onClick={countUp}
          >
            +
          </Button>
        </div>
        <Txt typograph="h6">
          {pointByThree(item.price * item.quantity)}
          {PRODUCT.WON}
        </Txt>
      </div>
    </div>
  );
};

export default ProductOptionOrderItem;
