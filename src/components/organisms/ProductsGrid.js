import ProductCard from "components/molecules/ProductCard.js";

export default function ProductsGrid({ products, children }) {
  return (
    <div className="inline-grid m-8 grid-cols-4 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      {children}
    </div>
  );
}
