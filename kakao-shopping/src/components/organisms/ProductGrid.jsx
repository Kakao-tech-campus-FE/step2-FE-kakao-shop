import ProductCard from "../molecules/ProductCard";

const ProductGrid = ({
    products, // product array
    id = "", // id
    className = "", // class
    style = {}, // style
}) => {
    return (
        <div className={`product-grid ${className}`} id={id} style={style}>
            {products.map((product) => (
                <ProductCard key={product?.id} product={product} />
            ))}
        </div>
    );
};

export default ProductGrid;
