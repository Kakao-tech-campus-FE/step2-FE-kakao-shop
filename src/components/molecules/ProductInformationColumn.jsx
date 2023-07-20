import { comma } from "../../utils/convert";
import Photo from "../atoms/Photo";

const ProductInformationColumn = ({ product }) => {
  return (
    <div className="product-information-column">
      <div className="col">
        <Photo
          sclassName="photo"
          src={`http://kakao-app-env.eba-kfsgeb74.ap-northeast-2.elasticbeanstalk.com${product.image}`}
          alt={product.productName}
        />
      </div>
      <div className="col">
        <h1 className="product-name">{product.productName}</h1>
        <p className="product-price">{comma(product.price)}원</p>
      </div>
    </div>
  );
};

export default ProductInformationColumn;
