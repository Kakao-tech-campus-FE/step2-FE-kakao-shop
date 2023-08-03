import ProductCard from "../molecules/ProductCard";
import "../../styles/ProductGrid.css"

const ProductGrid = ({products, loading}) => {
    // 각 프로덕트들에 대한 로딩 및 에러 상태는 어떻게 관리하는 것이 좋은가?
    // 여기서는 ProductGrid -> 데이터를 단순히 표기만 하는 용도의 컴포넌트로 사용
    // state 관리는 해당 컴포넌트보다 윗단에서 처리해 주었음
    return (
        <div className="product-grid">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} loading={loading} />
        ))}
        </div>
    );
};

export default ProductGrid;