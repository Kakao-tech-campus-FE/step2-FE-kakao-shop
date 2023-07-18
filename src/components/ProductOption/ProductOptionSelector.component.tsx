import { useAppSelector } from "@/hooks/useRedux";
import ProductOptionItem from "./ProductOptionItem.component";

const ProductOptionSelector = () => {
  const { data } = useAppSelector((state) => state.productSlice);

  if (!data) return <div>로딩중...</div>;
  const { options } = data;

  return (
    <>
      {options.map((option, index) => (
        <ProductOptionItem key={option.id} index={index + 1} option={option} />
      ))}
    </>
  );
};

export default ProductOptionSelector;
