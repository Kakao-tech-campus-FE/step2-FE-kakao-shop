import ProductCard from "../molecules/ProductCard";
import ProductCardSkeleton from "../molecules/ProductCardSkeleton";

const ProductGrid = ({ products, isLoading }) => {
  // presentational component: 데이터를 단순히 표기만 하는 용도
  if (isLoading) {
    return (
      <div className="product-grid grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 9 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="product-grid grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
