import ProductCard from "../molecules/ProductCard";
import "../../styles/organisms/ProductGrid.css";
import Skeleton from "../atoms/Skeleton";

const ProductGrid = ({ products, isLoading }) => {
  const RenderProducts = ({ isLoading, products }) => {
    if (isLoading) {
      for (let index = 0; index < 15; index++) {
        return <Skeleton key={index} />;
      }
    }
    return products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ));
  };

  return (
    <div className="product-grid">
      <RenderProducts isLoading={isLoading} products={products} />
    </div>
  );
};

export default ProductGrid;
