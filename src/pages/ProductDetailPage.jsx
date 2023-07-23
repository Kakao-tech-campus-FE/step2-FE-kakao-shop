import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getProductById } from "../services/product";
import Loader from "../components/atoms/Loader";
import ProductDetailTemplate from "../components/templates/ProductDetailTemplate";
import Gnb from "../components/organisms/Gnb";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProductDetailPage = () => {
  const { id } = useParams();

  const { data, error, isLoading } = useQuery("products", () =>
    getProductById(id)
  );

  const product = data?.data?.response;

  return (
    <>
      <Gnb />
      <Container>
        {isLoading ? <Loader /> : <ProductDetailTemplate product={product} />}
        {error && <div>{error.message}</div>}
      </Container>
    </>
  );
};

export default ProductDetailPage;
