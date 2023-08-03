import ProductCard from "../molecules/ProductCard";
// import "../../styles/organisms/ProductGrid.css"

const ProductGrid = ({ products, loading }) => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4 max-w-screen-lg">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} loading={loading} />
      ))}
    </div>
  );
};

export default ProductGrid;