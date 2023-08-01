import ProductCard from "../molecules/ProductCard";
import ProductCardSkeleton from "../molecules/ProductCardSkeleton";

/**
 * 상품 목록을 그리드 형태로 보여주는 컴포넌트
 * @param {Array} products
 * @param {boolean} isLoading
 */
const ProductGrid = ({ products, isLoading }) => {
  return (
    <div className="product-grid grid gap-8 grid-cols-4 ">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      {isLoading &&
        Array.from({ length: 9 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
    </div>
  );
};

export default ProductGrid;
