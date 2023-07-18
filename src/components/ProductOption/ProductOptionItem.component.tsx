import { ProductOption } from "@/dtos/product.dto";
import { FC, MouseEvent } from "react";
import Txt from "../common/Txt.component";
import { PRODUCT } from "@/assets/product.ko";
import { pointByThree } from "@/functions/utils";

interface ProductOptionItemProps {
  option: ProductOption;
  index: number;
  onClick: () => void;
}

const ProductOptionItem: FC<ProductOptionItemProps> = ({
  option,
  index,
  onClick,
}) => {
  const onClickPreventDefault = (e: MouseEvent) => {
    e.preventDefault();
    onClick();
  };
  return (
    <button className="flex gap-2 p-3 w-full" onClick={onClickPreventDefault}>
      <Txt typograph="h6">{index}.</Txt>
      <div className="flex flex-col items-start">
        <Txt typograph="h6">{option.optionName}</Txt>
        <Txt typograph="p">
          {pointByThree(option.price)}
          &nbsp;{PRODUCT.WON}
        </Txt>
      </div>
    </button>
  );
};

export default ProductOptionItem;
