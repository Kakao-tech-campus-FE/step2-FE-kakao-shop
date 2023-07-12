import Container from "components/atoms/Container";
import ProductGrid from "components/organisms/ProductGrid";

export default function ProductSection() {
  const { loading, products, error } = {
    loading: false,
    products: [
      { id: "id", productName: "productName", iamge: "image", price: "10000" },
    ],
    error: false,
  };
  return (
    <Container>
      {loading && <p>loading</p>}
      {error && <p>error</p>}
      <ProductGrid products={products} />
    </Container>
  );
}
