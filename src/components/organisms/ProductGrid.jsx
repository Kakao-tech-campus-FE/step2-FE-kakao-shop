import ProductCard from "../moleclules/ProductCard";

const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {products?.map((product, idx) => {
        if (product === "skeleton") {
          return (
            <ProductCard
              key={`product-${idx}`}
              product={product}
              skeleton={true}
            />
          );
        } else {
          return (
            <ProductCard key={product.id} product={product} skeleton={false} />
          );
        }
      })}
    </div>
  );
};

export default ProductGrid;
