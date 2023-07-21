import Group from "../atoms/Group";
import ProductInformationColumn from "../molecules/ProductInformationColumn";
import OptionColumn from "../molecules/OptionColumn";
import styled from "styled-components";

const Container = styled.div`
  > div {
    display: flex;
  }
`;

const StyledOptionColumn = styled(OptionColumn)`
  margin-left: 3rem;
`;

const ProductDetailTemplate = ({ product }) => {
  return (
    <Container>
      <Group>
        <ProductInformationColumn product={product} />
        <StyledOptionColumn product={product} />
      </Group>
    </Container>
  );
};

export default ProductDetailTemplate;
