import ProductCard from "../molecules/ProductCard"

const ProductGrid = ({ products }) => {
    return (
        <div className="grid w-full grid-cols-4 gap-4 px-10 my-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default ProductGrid;