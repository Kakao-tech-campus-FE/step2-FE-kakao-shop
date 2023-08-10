import ProductCard from "../molecules/ProductCard";
import ProductCardSkeleton from "../molecules/ProductCardSkeleton";
import "../../style/organisms/ProductGrid.css";

const ProductGrid = ({ products, loading }) => {
  return (
    <div className="product_grid">
         {loading
        ? Array.from({ length: 9 }, (_, index) => <ProductCardSkeleton key={index} />)
        : products.map((product) => <ProductCard key={product.id} product={product} />)}
       
      {/* {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))} */}
    </div>
  );
};

export default ProductGrid;
