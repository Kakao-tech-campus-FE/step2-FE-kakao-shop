import ProductCard from "../molecules/ProductCard";

const ProductGrid = ({
    products, // product array
    className = "", // class
    ...props
}) => {
    return (
        <div className={`product-grid ${className}`} {...props}>
            {products.map((product) => (
                <ProductCard key={product?.id} product={product} />
            ))}
        </div>
    );
};

export default ProductGrid;
