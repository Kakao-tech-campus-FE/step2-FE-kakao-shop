import OptionColumn from "../molecules/OptionColumn";
import ProductInformationColumn from "../molecules/ProductInformationColumn";
import styled from "styled-components";

const ColumnContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 0 50px 0;
  vertical-align: top;
  margin-bottom: 40px;
  height: 1000px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &.column-product {
    width: 70%;
  }
  &.column-option {
    right: 10%;
    position: fixed;
  }
`;

const ProductDeatilTemplate = ({ product }) => {
  return (
    <ColumnContainer className="columnContainer">
      <Column className="column-product">
        <ProductInformationColumn product={product} />
      </Column>
      <Column className="column-option">
        <OptionColumn product={product} />
      </Column>
    </ColumnContainer>
  );
};

export default ProductDeatilTemplate;
