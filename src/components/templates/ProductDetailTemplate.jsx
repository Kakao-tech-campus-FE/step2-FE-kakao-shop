import OptionColumn from "../molecules/OptionColumn";
import ProductInformationColumn from "../molecules/ProductInformationColumn";
import styled from "styled-components";

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  &.column-product {
    width: 65%;
  }
  &.column-option {
    right: 13.9%;
    position: fixed;
  }
`;

const ProductDeatilTemplate = ({ product }) => {
  return (
    <div className="flex justify-between py-10 items-start  h-[1000px] mb-40">
      <Column className="column-product">
        <ProductInformationColumn product={product} />
      </Column>
      <Column className="column-option mt-10 bg-white p-20 border border-gray-300 w-[520px]">
        <OptionColumn product={product} />
      </Column>
    </div>
  );
};

export default ProductDeatilTemplate;
