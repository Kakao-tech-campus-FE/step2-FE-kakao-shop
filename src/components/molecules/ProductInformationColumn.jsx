import Photo from "../atoms/Photo";
import Box from "../atoms/Box";

const ProductInformationColumn = ({ product }) => {
  const { productName, image } = product;
  return (
    <Box className="w-[512px] m-4">
      <Photo
        className="rounded-lg"
        src={process.env.REACT_APP_API_URL + image}
        alt={productName}
      />
    </Box>
  );
};

export default ProductInformationColumn;
