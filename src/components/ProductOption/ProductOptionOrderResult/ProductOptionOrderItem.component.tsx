import { PRODUCT } from "@/assets/product.ko";
import { FC } from "react";
import Txt from "@components/common/Txt.component";
import Button from "@components/common/Button.component";
import { pointByThree } from "@/functions/utils";
import { Order } from "@/hooks/useOrder";

const { CHOICE_PRODUCT } = PRODUCT;

interface ProductOptionOrderItemProps {
  item: {
    id: number;
    optionName: string;
    quantity: number;
    price: number;
  };
  removeOrder: (optionId: number) => void;
  updateOrder: (order: Order) => void;
}

const ProductOptionOrderItem: FC<ProductOptionOrderItemProps> = ({
  item,
  removeOrder,
  updateOrder,
}) => {
  if (!item) return <></>;

  const countUp = () => {
    updateOrder({
      ...item,
      quantity: item.quantity + 1,
    });
  };

  const countDown = () => {
    if (item.quantity <= 0) {
      return;
    }

    if (item.quantity === 1) {
      removeOrder(item.id);
      return;
    }

    updateOrder({
      ...item,
      quantity: item.quantity - 1,
    });
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
