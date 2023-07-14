import ProductCard from "../molecules/ProductCard";

const ProductGrid = ({ products }) => {
  return (
    <div className="product-grid grid grid-cols-4 gap-[20px] my-4 w-full">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
