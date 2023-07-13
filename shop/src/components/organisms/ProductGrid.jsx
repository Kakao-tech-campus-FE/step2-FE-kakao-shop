import ProductCard from "../molecules/ProductCard";
import '../../styles/organisms/ProductGrid.css'
import Skeleton from "../atoms/Skeleton";
import Loader from "../atoms/Loader";


const ProductGrid = ({ products, loading }) => 
  <div className="product-grid">
    {
      products?.data.response.map((product) => (
        <ProductCard key={product.id} product={product}/>
      ))
    }
  </div>
;

export default ProductGrid