import ProductCard from "../molecules/ProductCard";
//import "../../styles/organisms/ProductGrid.css";
const ProductGrid = ({ products }) => {
  return (
    <div className="product-grid grid grid-cols-4 rounded-lg">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          className="rounded-lg"
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
