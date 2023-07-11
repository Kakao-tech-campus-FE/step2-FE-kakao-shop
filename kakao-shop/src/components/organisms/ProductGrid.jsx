const ProductGrid = ({ products }) => {
  // loading state
  // error state

  // presentational component: 데이터를 단순히 표기만 하는 용도
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
