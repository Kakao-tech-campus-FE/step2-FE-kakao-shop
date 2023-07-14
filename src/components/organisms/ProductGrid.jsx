import ProductCard from "../molecules/ProductCard";
import ProductCardSkeleton from "../atoms/ProductCardSkeleton";
import "../../styles/organisms/ProductGrid.css";

const ProductGrid = ({ products, isLoading = false }) => {
  /* 
  loading, error state를 어디서 관리하는게 좋을까?
  Product Grid는 presentational component(데이터를 단순히 표기만 하는 용도의 컴포넌트)로 두고 
  윗단에서 로딩 상태를 관리하는게 좋을 것 같다
  MainProductTemplate.jsx를 두어 관리
  */
  return (
    <div className="product-grid">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
      {isLoading &&
        Array.from({ length: 12 }, (_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
    </div>
  );
};
export default ProductGrid;
