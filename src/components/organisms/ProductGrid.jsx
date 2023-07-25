import ProductCard from "../molecules/ProductCard";

const ProductGrid = ({ products, loading }) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} loading={loading} />
      ))}
    </div>
  );
};

export default ProductGrid;
