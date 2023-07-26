import { comma } from "../../utils/convert";
import Photo from "../atoms/Photo";
import Box from '../atoms/Box';

const ProductInformationColumn = ({ product }) => {
  const { productName, price, image } = product;
  return (
    <div className="flex">
      <Box className="w-96 m-4">
        <Photo className="rounded-lg" src={process.env.REACT_APP_API_URL + image} alt={productName} />
      </Box>
      <Box className="w-96 m-4">
        <h1 className="text-2xl font-bold">{productName}</h1>
        <p className="price">{comma(price)}원</p>
      </Box>
    </div>
  );
};

export default ProductInformationColumn;
