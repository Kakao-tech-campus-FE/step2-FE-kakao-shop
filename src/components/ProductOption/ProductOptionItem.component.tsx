import { ProductOption } from "@/dtos/product.dto";
import { FC } from "react";
import Txt from "../common/Txt.component";
import { PRODUCT } from "@/assets/product.ko";
import { pointByThree } from "@/functions/utils";

interface ProductOptionItemProps {
  option: ProductOption;
  index: number;
}

const ProductOptionItem: FC<ProductOptionItemProps> = ({ option, index }) => {
  return (
    <div className="flex gap-2 p-2">
      <Txt typograph="h6">{index}.</Txt>
      <div className="flex flex-col">
        <Txt typograph="h6">{option.optionName}</Txt>
        <Txt typograph="p">
          {pointByThree(option.price)}
          &nbsp;{PRODUCT.WON}
        </Txt>
      </div>
    </div>
  );
};

export default ProductOptionItem;
