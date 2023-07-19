import { getProductsById } from "@apis/getProductsById";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import ProductInfo from "@components/molecules/ProductInfo";
import ProductOption from "@components/molecules/ProductOption";
import { styled } from "styled-components";

export interface Option {
  id: number;
  optionName: string;
  price: number;
}

export interface ProductDetail {
  id: number;
  image: string;
  options: Option[];
  price: number;
  productName: string;
  starCount: number;
}

const ProductForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery(
    [`/products/${id}`, id],
    () => getProductsById(id),
    {
      retry: false,
      onError: (err) => {
        if (err === 404) {
          navigate("/notFound");
        }
      },
    }
  );

  return (
    <div>
      {isLoading ? (
        <p>loading</p>
      ) : (
        <Wrapper>
          <ProductInfo product={data?.response} />
          <ProductOption product={data?.response} />
        </Wrapper>
      )}
    </div>
  );
};

export default ProductForm;

const Wrapper = styled.div`
  display: flex;
`;
