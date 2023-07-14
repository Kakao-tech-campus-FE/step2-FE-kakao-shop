import ProductCard from "components/molecules/ProductCard";

import "styles/organisms/ProductGrid.css"

export default function ProductGrid({ products, children }) {
  console.dir(products);
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      {children}
    </div>
  );
}
