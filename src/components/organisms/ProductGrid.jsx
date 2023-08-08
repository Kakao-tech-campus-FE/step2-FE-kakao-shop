/*eslint-disable react/prop-types */

import ProductCard from "../molecules/ProductCard";
import "../../styles/organisms/ProductGrid.css";

const ProductGrid = ({ products, isLoading }) => {
  // main page product grid
  return (
    <div className="product-grid">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} isLoading={isLoading} />
      ))}
    </div>
  );
};

export default ProductGrid;
