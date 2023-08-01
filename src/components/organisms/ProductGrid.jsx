import ProductCard from "../molecules/ProductCard";
import "../../styles/organisms/productGrid.css";
import SkeletonProductCard from "../molecules/SkeletonProductCard";

const ProductGrid = ({ products, isLoading }) => {
  return (
    <div className="product-grid">
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
