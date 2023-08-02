import ProductCard from "../molecules/ProductCard";
import "../../styles/organisms/ProductGrid.css"

const ProductGrid = ({ products, loading }) => {
  return (
    <div className="product-grid" style={{minHeight: "2000px"}}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} loading={loading} />
      ))}
    </div>
  );
};

export default ProductGrid;