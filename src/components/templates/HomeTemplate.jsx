import { styled } from "styled-components";
import GlobalNavBar from "../organisms/GlobalNavBar";
import ProductGrid from "../organisms/ProductGrid";

const Container = styled.div`
  width: 1200px;
  border: 1px solid black;
  margin: 80px auto 0;
`;

const HomeTemplate = () => {
  return (
    <>
      <GlobalNavBar />
      <Container>
        <ProductGrid />
      </Container>
    </>
  );
};

export default HomeTemplate;
