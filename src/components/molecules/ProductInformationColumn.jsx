import Photo from "../atoms/Photo";
import Box from "../atoms/Box";

const staticServerUri = process.env.REACT_APP_PATH || "";

const ProductInformationColumn = ({ product }) => {
  const { productName } = product;
  return (
    <Box className="w-[512px] m-4">
      <Photo
        className="rounded-lg"
        src={staticServerUri + product.image}
        alt={productName}
      />
    </Box>
  );
};

export default ProductInformationColumn;
