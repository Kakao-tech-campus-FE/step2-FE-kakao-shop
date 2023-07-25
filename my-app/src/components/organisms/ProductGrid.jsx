import ProductCard from "../molecules/ProductCard";
import "../../styles/organisms/ProductGrid.css";
import Skeleton from "../atoms/Skeleton";

const ProductGrid = ({ products, isLoading }) => {
  return (
    <>
      <div className="product-grid">
        {isLoading &&
          products.map((product) => {
            return <Skeleton key={product.id} />;
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
