import ProductOptionSelector from "@/components/ProductOption/ProductOptionSelector/ProductOptionSelector.component";
import ProductOptionOrderResult from "@/components/ProductOption/ProductOptionOrderResult/ProductOptionOrderResult.component";
import { Link } from "react-router-dom";

const ProductOption = () => {
  return (
    <>
      <ProductOptionSelector />
      <ProductOptionOrderResult />
      <div className="flex gap-2">
        <Link
          to={"#"}
          className="text-center bg-black hover:bg-gray-900 text-white rounded-lg flex-1 py-4"
        >
          장바구니 담기
        </Link>
        <Link
          to={"#"}
          className="text-center bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex-[2_0_0] py-4"
        >
          톡딜가로 구매하기
        </Link>
      </div>
    </>
  );
};

export default ProductOption;
