import ProductCard from "../molecules/ProductCard";
import styles from "./ProductGrid.module.css";

const ProductGrid = ({ products }) => {
    return (
        <div className={styles.product_grid}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductGrid;