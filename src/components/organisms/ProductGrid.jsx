import { styled } from "styled-components";
import { useQuery } from "react-query";
import { fetchProducts } from "../../services/apis";
import ProductCard from "../molecules/ProductCard";

const Container = styled.main`
  height: 1000px;
  border: 2px solid red;
`;

const ProductsList = styled.section`
  border: 10px solid green;
  padding: 10px;
  display: grid;
  gap: 12px;
  grid-template-columns: 1fr 1fr 1fr;
`;

const ProductGrid = () => {
  const { isLoading, data: products } = useQuery(["products"], fetchProducts);

  const productsArr = products?.data.response;

  return (
    <Container>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ProductsList>
          {productsArr.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductsList>
      )}
    </Container>
  );
};

export default ProductGrid;
