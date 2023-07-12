import ProductCard from "../molecules/ProductCard"
import "../../styles/organisms/ProductGrid.css"

// presentation component : 단순히 데이터를 표기하는 용도의 컴포넌트. 즉, 에러, 로딩 처리는 다른 곳에서
const ProductGrid = ({products}) => {

    return (
        <div className="product-grid">
            {products.map((product) =>(
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
    )
}

export default ProductGrid;