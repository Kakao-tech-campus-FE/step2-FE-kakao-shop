import "../../Styles/ProductInformationColumn.css";
import { comma } from "../../Utils/convert";
import Photo from "../Atoms/Photo";

const ProductInformationColumn = ({ product }) => {
  const { productName, price, image } = product;
  return (
    <div className="product-information-column">
      <div className="col">
        <Photo src={image} alt={productName} imgClass="mt-0 p-4" />
      </div>
      <div className="p-4">
        <h1 className="pt-4 text-2xl">{productName}</h1>
        <p className="text-center w-1/4 bg-black text-white text-lg mt-3 rounded-3xl p-2">{comma(price)}원</p>
      </div>
    </div>
  );
};

export default ProductInformationColumn;
