import ProductCard from "../molecules/ProductCard";
import '../../styles/organisms/ProductGrid.css'
import Skeleton from "../atoms/Skeleton";


const ProductGrid = ({ products, loading }) => (
  <div className="product-grid">
    {loading
      ? [...Array(products.length)].map((_, index) => <Skeleton key={index} />)
      : products.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
  </div>
);

export default ProductGrid