import ProductCard from "@components/molecules/ProductCard";

interface Props {
  products: Product[];
}

export interface Product {
  id: number;
  productName: string;
  description: string;
  image: string;
  price: number;
}

const ProductGrid = ({ products }: Props) => {
  return (
    <>
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </>
  );
};

export default ProductGrid;
