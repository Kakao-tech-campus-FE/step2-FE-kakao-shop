import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import ProductOptionItem from "@components/ProductOption/ProductOptionSelector/ProductOptionItem.component";
import Txt from "@components/common/Txt.component";
import { PRODUCT } from "@/assets/product.ko";
import { addProductOrder } from "@/store/productSlice";
import { ProductOption } from "@/dtos/product.dto";
import range from "lodash/range";

const { OPTION_SELECT } = PRODUCT;

const ProductOptionSelectorSkeleton = () => (
  <div className="flex flex-col gap-2">
    <Txt>{OPTION_SELECT}</Txt>
    <div className="divide-y border-[1px] rounded-md">
      {range(3).map((index) => (
        <div key={index} className="flex flex-col gap-4 p-3 animate-pulse">
          <div className="h-4 w-96 bg-slate-200 rounded-md"></div>
          <div className="h-4 w-32 bg-slate-200 rounded-md"></div>
        </div>
      ))}
    </div>
  </div>
);

const ProductOptionSelector = () => {
  const { data } = useAppSelector((state) => state.productSlice);
  const dispatch = useAppDispatch();

  const addOrder = (order: ProductOption) => {
    dispatch(addProductOrder(order));
  };

  if (!data) return <ProductOptionSelectorSkeleton />;
  const { options } = data;

  return (
    <div className="flex flex-col gap-2">
      <Txt>{OPTION_SELECT}</Txt>
      <div className="divide-y border-[1px] rounded-md">
        {options.map((option, index) => (
          <ProductOptionItem
            onClick={() => addOrder(option)}
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
