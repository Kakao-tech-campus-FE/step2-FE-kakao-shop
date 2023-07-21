import Photo from "../atoms/Photo";
import { comma } from "../../utils/convert";
import "../../styles/molecules/ProductInformationColumn.css";

// style 작업 필요
const ProductInformationColumn = ({ product }) => {
  const { productName, price, image } = product;
  return (
    <div className="product-information-column border-4 rounded flex flex-col justify-center">
      <div className="col">
        <Photo
          className={"product-detail"}
          src={`http://kakao-app-env.eba-kfsgeb74.ap-northeast-2.elasticbeanstalk.com${image}`}
          alt={productName}
          style={{ width: "100px" }}
        />{" "}
      </div>
      <div className="col">
        <h3 className="product-detail-name">{productName}</h3>
        <p className="product-detail-price">{comma(price)}원</p>
      </div>
    </div>
  );
};

export default ProductInformationColumn;
