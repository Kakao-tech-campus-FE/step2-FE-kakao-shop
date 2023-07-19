import ProductCard from "../molecules/ProductCard";

const ProductGrid = ({ products }) => {
  return (
    <div className="product-grid">
      {products.pages?.map((page) =>
        page.data.response.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
};

export default ProductGrid;
