import ProductCard from "../molecules/ProductCard";

const ProductGrid = ({ products }) => {
  return (
    <div className="product-grid">
      {products.pages ? (
        products.pages.map((page) =>
          page.data.response.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )
      ) : (
        <p>"유효한 데이터가 없습니다"</p>
      )}
    </div>
  );
};

export default ProductGrid;
