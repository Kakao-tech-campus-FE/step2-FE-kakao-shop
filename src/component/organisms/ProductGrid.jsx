import ProductCard from "../molecules/ProductCard";
import styled from "styled-components";
import Container from "../atoms/Container";

const ProductGrid = ({ products }) => {
  return (
    <Container>
      <Grid className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </Container>
  );
};

export default ProductGrid;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
`;

