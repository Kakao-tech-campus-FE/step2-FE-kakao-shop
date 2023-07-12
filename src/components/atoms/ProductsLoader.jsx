import { FadeLoader } from "react-spinners";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const override = {
  display: "block",
};

const ProductsLoader = () => {
  return (
    <Container>
      <FadeLoader
        color="#bbb"
        width={8}
        height={8}
        radius={4}
        cssOverride={override}
      />
    </Container>
  );
};

export default ProductsLoader;
