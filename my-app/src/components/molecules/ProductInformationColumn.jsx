import Photo from "../atoms/Photo";
import { comma } from "../../utils/convert";
import { AiFillStar } from "react-icons/ai";

const StarCount = ({ count }) => {
  return (
    <span>
      {Array.from({ length: count }, (_, index) => (
        <AiFillStar key={index} className="inline" size="18" color="#6366f1" />
      ))}
    </span>
  );
};

const ProductInformationColumn = ({ product }) => {
  const { productName, price, image, starCount } = product;
  return (
    <div className="product-information-column border-1 rounded-4 flex flex-col justify-center px-2 h-full">
      <div className="col">
        <Photo
          className="product-detail max-w-lg"
          src={`http://kakao-app-env.eba-kfsgeb74.ap-northeast-2.elasticbeanstalk.com${image}`}
          alt={productName}
        />
      </div>
      <div className="col">
        <div className="starCount">
          <StarCount count={starCount} />
        </div> 
        <h3 className="product-detail-name text-lg font-semibold">
          {productName}
        </h3>
        <p className="product-detail-price text-lg font-semibold text-indigo-500">
          {comma(price)}원~
        </p>
      </div>
    </div>
  );
};

export default ProductInformationColumn;
