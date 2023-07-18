import { useAppSelector } from "@/hooks/useRedux";
import ProductOptionItem from "@components/ProductOption/ProductOptionItem.component";
import Txt from "@components/common/Txt.component";
import { PRODUCT } from "@/assets/product.ko";

const { OPTION_SELECT } = PRODUCT;

const ProductOptionSelector = () => {
  const { data } = useAppSelector((state) => state.productSlice);

  if (!data) return <div>로딩중...</div>;
  const { options } = data;

  return (
    <div className="flex flex-col gap-2">
      <Txt>{OPTION_SELECT}</Txt>
      <div className="divide-y border-[1px] rounded-md">
        {options.map((option, index) => (
          <ProductOptionItem
            key={option.id}
            index={index + 1}
            option={option}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductOptionSelector;
