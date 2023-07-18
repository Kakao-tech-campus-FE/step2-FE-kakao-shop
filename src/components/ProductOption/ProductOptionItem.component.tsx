import { ProductOption } from "@/dtos/product.dto";
import { FC } from "react";
import Txt from "@components/common/Txt.component";
import { PRODUCT } from "@/assets/product.ko";
import { pointByThree } from "@/functions/utils";
import Button from "@components/common/Button.component";

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
  return (
    <Button color="none" className="flex gap-2 p-3 w-full" onClick={onClick}>
      <Txt typograph="h6">{index}.</Txt>
      <div className="flex flex-col items-start">
        <Txt typograph="h6">{option.optionName}</Txt>
        <Txt typograph="p">
          {pointByThree(option.price)}
          &nbsp;{PRODUCT.WON}
        </Txt>
      </div>
    </Button>
  );
};

export default ProductOptionItem;
