import ProductCard from "../molecules/ProductCard";

const ProductGrid = ({ products }) => {
  // loading state
  // error state
  // presentation components
  return (
    <div className="grid grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
