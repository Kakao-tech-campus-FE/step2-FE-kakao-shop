import { comma } from "../../utils/convert";
import Photo from "../atoms/Photo";
const ProductInformationColumn = ({ product }) => {
  const { productName, price, image } = product;

  return (
    <div className="product-information-column py-10 px-5 flex bg-white">
      <div className="col w-full pt-10">
        <Photo src={image} alt={productName} />
      </div>
      <div className="col pt-10">
        <h1 className="name mt-3 ml-10 text-left">{productName}</h1>
        <h1 className="price text-left mt-10 ml-10">{comma(price)}원</h1>
      </div>
    </div>
  );
};

export default ProductInformationColumn;
