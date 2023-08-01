import PropTypes from 'prop-types';
import "../../styles/molecules/ProductInformationColumn.css";
import { comma } from "../../utils/convert";
import Photo from "../atoms/Photo";

const ProductInformationColumn = ({ product }) => {
  const { productName, price, image } = product;
  return (
    <div className="product-information-column">
      <div className="col">
        <Photo src={image} alt={productName} />
      </div>
      <div className="col">
        <h1 className="name">{productName}</h1>
        <p className="price">{comma(price)}원</p>
      </div>
    </div>
  );
};

ProductInformationColumn.propTypes = {
  product: PropTypes.shape({
    productName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductInformationColumn;

// import "../../styles/molecules/ProductInformationColumn.css";
// import { comma } from "../../utils/convert";
// import Photo from "../atoms/Photo";
// import Box from '../atoms/Box';

// const ProductInformationColumn = ({ product }) => {
//   const { productName, price, image } = product;
//   return (
//       <div className="flex">
//         <Box className="w-96 m-4">
//           <Photo className="rounded-lg" src={process.env.REACT_APP_API_URL + image} alt={productName} />
//       </Box>
//       <Box className="w-96 m-4">
//         <h1 className="text-2xl font-bold">{productName}</h1>
//         <p className="price">{comma(price)}원</p>
//       </Box>
//     </div>
//   );
// };

// export default ProductInformationColumn;