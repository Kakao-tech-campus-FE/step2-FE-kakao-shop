import ProductCard from "components/molecules/ProductCard";

export default function ProductGrid({ products }) {
  console.dir(products)
  return (
    <div>
      {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
}
