import ProductCard from "../molecules/ProductCard";
import "../../styles/organisms/ProductGrid.css";

const ProductGrid = ({ products }) => {
  // presentaion components(데이터를 단순히 표기만 하는 용도의 컴포넌트)로 두면
  // -> loading state, error state를 template레벨에서 관리
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
