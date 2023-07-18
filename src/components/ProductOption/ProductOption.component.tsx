import ProductOptionSelector from "@components/ProductOption/ProductOptionSelector.component";
import ProductOptionOrderResult from "@components/ProductOption/ProductOptionOrderResult.component";

const ProductOption = () => {
  return (
    <>
      <ProductOptionSelector />
      <ProductOptionOrderResult />
      <div className="flex">
        <button>장바구니 담기</button>
        <button>톡딜가로 구매하기</button>
      </div>
    </>
  );
};

export default ProductOption;
