import ProductCard from "../molecules/ProductCard";
import '../../styles/organisms/ProductGrid.css'


const ProductGrid = ({ products }) => 
  <div className="flex justify-center items-center w-full">
    {
      products.map((product) => (
        <ProductCard key={product.id} product={product}/>
      ))
    }
  </div>
;

export default ProductGrid
