import "../../styles/molecules/ProductInformationColumn.css";
import { comma } from "../../utils/convert"; // eslint-disable-line no-unused-vars
import Photo from "../atoms/Photo";
import Box from "../atoms/Box";

const ProductInformationColumn = ({ product }) => {
  const { productName } = product;
  return (
    <Box className="w-[512px] m-4">
      <Photo
        className="rounded-lg"
        src={product.image}
        alt={productName}
      />
    </Box>
  );
};

export default ProductInformationColumn;