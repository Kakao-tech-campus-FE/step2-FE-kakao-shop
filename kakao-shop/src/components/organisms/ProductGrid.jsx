import ProductCard from "../molecules/ProductCard";
import ProductCardSkeleton from "../molecules/ProductCardSkeleton";

const ProductGrid = ({ products, isLoading }) => {
  return (
    <div className="product-grid grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      {isLoading &&
        Array.from({ length: 9 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
    </div>
  );
};

export default ProductGrid;
