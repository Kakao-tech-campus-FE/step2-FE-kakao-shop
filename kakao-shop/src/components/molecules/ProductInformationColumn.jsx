import { comma } from "../../utils/convert";
import Photo from "../atoms/Photo";

const ProductInformationColumn = ({ product }) => {
  const { productName, price, image } = product;
  return (
    <div className="product-information-column">
      <div className="product-name mt-4 line-clamp-2">
        <Photo src={image} alt={productName} />
      </div>
      <div>
        <h1>{productName}</h1>
        <p className="product-price mt-2 font-bold text-xl">{comma(price)}원</p>
      </div>
      <div className="flex mt-3">
        <GoGift size="25" color="gray" />
        <GoHeart size="25" color="gray" className="ml-2" />
      </div>
    </div>
  );
};
