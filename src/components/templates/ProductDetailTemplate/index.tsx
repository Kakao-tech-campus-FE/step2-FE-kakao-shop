import InnerContainer from "@components/atoms/InnerContainer";
import ProductForm from "@components/organisms/ProductForm";
import { styled } from "styled-components";

const ProductDetailTemplate = () => {
  return (
    <div>
      <InnerContainer>
        <Wrapper>
          <ProductForm />
        </Wrapper>
      </InnerContainer>
    </div>
  );
};

export default ProductDetailTemplate;

const Wrapper = styled.div`
  margin-top: 80px;
  width: 1280px;
`;
