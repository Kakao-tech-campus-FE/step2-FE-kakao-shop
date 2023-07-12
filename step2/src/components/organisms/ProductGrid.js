import ProductCard from "../molecules/ProductCard";
import "../../style/organisms/ProductGrid.css";

const ProductGrid = ({ products }) => {
  return (
    <div className="product_grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
