import ProductDetailDescription from "./ProductDetailDescription.component";
import ProductOption from "../ProductOption/ProductOption.component";

const ProductDetail = () => {
  return (
    <div className="flex">
      <div className="flex flex-[2_0_0]">
        <ProductDetailDescription />
      </div>
      <div className="flex flex-col gap-4 flex-1 p-2">
        <ProductOption />
      </div>
    </div>
  );
};

export default ProductDetail;
