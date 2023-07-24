import ProductCard from "../molecules/ProductCard";

const ProductGrid = ({ products }) => {
  return (
    <div className="product-grid">
      {/* isLoading일 때 스켈레톤, 아니면 product 리턴 */}
      {products.pages?.map((page) =>
        page.data.response.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
};

export default ProductGrid;
