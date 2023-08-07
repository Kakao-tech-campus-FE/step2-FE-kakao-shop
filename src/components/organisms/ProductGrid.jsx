import ProductCard from "../molecules/ProductCard";
import SkeletonProductCard from "../molecules/SkeletonProductCard";

const ProductGrid = ({ products, isLoading }) => {
  return (
    <div className="product-grid grid w-[100%] max-w-[1024px] grid-cols-2 gap-4 p-4 md:grid-cols-4">
      {products.map((product) =>
        product ? (
          <ProductCard key={product.id} product={product} />
        ) : (
          <SkeletonProductCard />
        ),
      )}
      {isLoading && <SkeletonProductCard cards={9} />}
    </div>
  );
};

export default ProductGrid;
