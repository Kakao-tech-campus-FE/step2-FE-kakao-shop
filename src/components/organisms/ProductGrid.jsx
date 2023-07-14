import ProductCard from '../molecules/ProductCard';
import '../../styles/organisms/productGrid.css';
import SkeletonProductCard from "../molecules/SkeletonProductCard";
const ProductGrid = ({ products }) => {
    // loading state
    // error state
    return (
        <div className="product-grid">
        {products.map((product) => (
            product? <ProductCard key={product.id} product={product} /> : <SkeletonProductCard />
        ))}
        </div>
    );
}

export default ProductGrid;
