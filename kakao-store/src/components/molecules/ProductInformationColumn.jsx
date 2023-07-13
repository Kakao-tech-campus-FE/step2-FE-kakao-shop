import { comma } from "../../utils/convert";
import Photo from "../atoms/Photo";

const ProductInformationColumn = ({ product }) => {
  const { ProductName, price, image } = product;
  return (
    <div className="product-information-column">
      <div className="col">
        <Photo src={image} alt={ProductName} />
      </div>
      <div className="col">
        <h1 className="name">{ProductName}</h1>
        <p className="price">{comma(price)}</p>
      </div>
    </div>
  );
};

export default ProductInformationColumn;
