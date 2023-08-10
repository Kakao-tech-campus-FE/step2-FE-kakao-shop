import ProductCard from "../molecules/ProductCard";

/** 상품 그리드
 *
 * @param {object} product - 상품 정보
 * @param {boolean} loading - 로딩 상태
 * @return {JSX.Element}
 */
const ProductGrid = ({ products, loading }) => {
  return (
    <div className="product-grid grid grid-cols-3 gap-[20px] my-[30px] w-full">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} loading={loading} />
      ))}
    </div>
  );
};

export default ProductGrid;
