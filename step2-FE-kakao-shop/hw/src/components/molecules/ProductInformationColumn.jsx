import "../../styles/molecules/ProductInformationColumn.css";
import { comma } from "../../utils/convert";
import Photo from "../atoms/Photo";

const ProductInformationColumn = ({ product }) => {
  const { productName, price, image } = product;
  return (
    <div className="product-information-column">
      <div className="w-full max-w-[300px]">
        <Photo
          src={
            "http://kakao-app-env.eba-kfsgeb74.ap-northeast-2.elasticbeanstalk.com" +
            image
          }
          alt={productName}
        />
      </div>
      <div className="border">
        <h1 className="name text-xl">{productName}</h1>
        <p className="price text-xl">{comma(price)}원</p>
      </div>
    </div>
  );
};

export default ProductInformationColumn;
