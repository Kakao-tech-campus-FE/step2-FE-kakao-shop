import ProductCard from "../molecules/ProductCard";

const ProductGrid = ({ products }) => {
  // presentational component: 데이터를 단순히 표기만 하는 용도
  return (
    <div className="product-grid grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
