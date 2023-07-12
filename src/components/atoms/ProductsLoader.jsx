import { PulseLoader } from "react-spinners";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
`;

const ProductsLoader = () => {
  return (
    <Container>
      <PulseLoader color="#bbb" size={10} />
    </Container>
  );
};

export default ProductsLoader;
