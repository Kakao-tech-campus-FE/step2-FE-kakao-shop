import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
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

  const { data, error, isLoading } = useQuery(["products", id], () =>
    getProductById(id)
  );

  const product = data?.data?.response;

  const validate = () => {
    if (!product) {
      return false;
    }

    const requiredKeys = ["id", "productName"];
    const keys = Object.keys(product);

    for (let i = 0; i < requiredKeys.length; i++) {
      const requiredKey = requiredKeys[i];
      if (!keys.includes(requiredKey)) {
        alert(`product 객체에 ${requiredKey}가 존재하지 않습니다.`);
        return false;
      }
    }

    return true;
  };

  const isValidProduct = validate();

  return (
    <>
      <Gnb />
      <Container>
        {isLoading ? (
          <Loader />
        ) : isValidProduct ? (
          <ProductDetailTemplate product={product} />
        ) : (
          <p>Invalid Data</p>
        )}
        {error && <div>{error.message}</div>}
      </Container>
    </>
  );
};

export default ProductDetailPage;
