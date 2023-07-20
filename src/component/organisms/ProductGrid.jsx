import ProductCard from "../molecules/ProductCard"
import '../../styles/ProductGrid.css';
const ProductGrid = ({products})=>{
// loaing state

// error state

//presentation components: 데이어를 단순이 표기만 하는 용도
    return(
        <div className="product-grid">
            {products.map((product)=>(
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}
export default ProductGrid;