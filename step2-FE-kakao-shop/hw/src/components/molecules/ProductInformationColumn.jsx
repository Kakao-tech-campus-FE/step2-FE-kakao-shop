import "../../styles/molecules/ProductInformationColumn.css";
import { comma } from "../../utils/convert";
import Photo from "../atoms/Photo";

const ProductInformationColumn = ({ product }) => {
  const { productName, price, image } = product;
  return (
    <div className="product-information-column">
      <div className="col">
        <Photo
          src={
            "http://kakao-app-env.eba-kfsgeb74.ap-northeast-2.elasticbeanstalk.com" +
            image
          }
          alt={productName}
        />
      </div>
      <div className="col">
        <h1 className="name">{productName}</h1>
        <p className="price">{comma(price)}원</p>
      </div>
    </div>
  );
};

export default ProductInformationColumn;
