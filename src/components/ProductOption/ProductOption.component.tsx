import { PRODUCT } from "@/assets/product.ko";
import { useAppSelector } from "@/hooks/useRedux";
import ProductOptionSelector from "./ProductOptionSelector.component";

const ProductOption = () => {
  const { data } = useAppSelector((state) => state.productSlice);

  if (!data) return <div>로딩중...</div>;

  return (
    <div className="flex flex-col gap-2">
      <div>{PRODUCT.OPTION_SELECT}</div>
      <div className="divide-y border-[1px] rounded-md">
        <ProductOptionSelector />
      </div>
    </div>
  );
};

export default ProductOption;
