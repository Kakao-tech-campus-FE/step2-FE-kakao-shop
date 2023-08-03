import { ProductDetail, SelectedOption } from '../../types/product';
import { OptionReducerAction } from '../../types/reducerAction';
import ProductDetailColumn from '../organisms/productDetailColumn';
import ProductOptionColumn from '../organisms/productOptionColumn';

interface ProductDetailTemplateProps {
  data: ProductDetail;
  selectedOptions: SelectedOption[];
  dispatch: React.Dispatch<OptionReducerAction>;
}

export default function ProductDetailTemplate({
  data,
  selectedOptions,
  dispatch,
}: ProductDetailTemplateProps) {
  return (
    <div className="flex flex-row">
      <div className="w-[60rem] pr-4">
        <ProductDetailColumn
          productName={data.productName}
          description={data.description}
          image={data.image}
          price={data.price}
          starCount={data.starCount}
        />
      </div>
      <div className="w-[20rem]">
        <ProductOptionColumn
          options={data.options}
          selectedOptions={selectedOptions}
          dispatch={dispatch}
        />
      </div>
    </div>
  );
}
