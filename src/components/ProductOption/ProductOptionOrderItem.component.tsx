import { ProductOptionWithCount } from "@/dtos/product.dto";
import { FC } from "react";

interface ProductOptionOrderItemProps {
  item: ProductOptionWithCount;
}

const ProductOptionOrderItem: FC<ProductOptionOrderItemProps> = ({ item }) => {
  return (
    <>
      <div>{item.optionName}</div>
    </>
  );
};

export default ProductOptionOrderItem;
