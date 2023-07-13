import "../../styles/molecules/ProductInformationColumn.css";
import { comma } from "../../utils/convert";
import Photo from "../atoms/Photo";

const ProductInformationColumn = ({ product }) => {
  const { productName, price, image } = product;
  return (
    <div className="product-information-column">
      <div className="col">
        <Photo
          src={image}
          alt={productName} // 대체 텍스트가 존재해야 한다. '웹 접근성 이슈가 발생'
        />
      </div>
      <div className="col">
        <h1 className="name">{productName} </h1>
        <p className="price">{comma(price)}원</p>
      </div>
    </div>
  );
};

export default ProductInformationColumn;
