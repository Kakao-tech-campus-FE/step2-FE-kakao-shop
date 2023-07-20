import ProductCard from "../molecules/ProductCard";
import "../../styles/organisms/ProductGrid.css";
import Skeleton from "../atoms/Skeleton";

const ProductGrid = ({ products, isLoading }) => {
  return (
    <>
      <div className="product-grid">
        {isLoading &&
          products.map(() => {
            return <Skeleton />;
          })}
        {!isLoading &&
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </>
  );
};

export default ProductGrid;
