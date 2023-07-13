import ProductCard from "../molecules/ProductCard";
import "../../styles/organisms/ProductGrid";

const ProductGrid = ({ products }) => {
  // loading state

  //error state

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
