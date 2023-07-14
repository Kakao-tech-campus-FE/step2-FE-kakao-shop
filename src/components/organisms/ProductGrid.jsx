import ProductCard from "../molecules/ProductCard";

const ProductGrid = ({ products, loading }) => {
  return (
    <div className="product-grid grid grid-cols-4 gap-[20px] my-4 w-full">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} loading={loading} />
      ))}
    </div>
  );
};

export default ProductGrid;
