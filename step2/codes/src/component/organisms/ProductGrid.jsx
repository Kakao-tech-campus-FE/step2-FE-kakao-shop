import ProductCard from "../molecules/ProductCard"
import "../../styles/organisms/ProductGrid.css"
import Container from "../atoms/Container";
import SkeletonCard from "../molecules/SkeletonCard";

// presentation component : 단순히 데이터를 표기하는 용도의 컴포넌트. 즉, 에러, 로딩 처리는 다른 곳에서
const ProductGrid = ({isLoading, products}) => {

    return (
        <Container>
        {isLoading? (
            <>
            <div className="product-grid">
                {products.map((product) =>(
                <SkeletonCard key={product.id} product={product}/>
            ))}
        </div>
        </>
            
        ) : (
            <>
            <div className="product-grid">
            {products.map((product) =>(
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
        </>
        )}
        </Container>



    )
    
}

export default ProductGrid;