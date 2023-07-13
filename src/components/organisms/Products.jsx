import { styled } from "styled-components";

const Container = styled.main`
  height: 1000px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Products = () => {
  return (
    <Container>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
    </Container>
  );
};

export default Products;
