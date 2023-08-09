import { staticServerUri } from "../../constants/serverUri";
import { comma } from "../../utils/convert";
import Card from "../atoms/Card";
import Photo from "../atoms/Photo";

const ProductCard = ({ product, skeleton }) => {
  return (
    <Card to={`/product/${product.id}`}>
      {!skeleton ? (
        <Photo
          src={staticServerUri + product.image}
          alt={product.productName}
          className={
            "block aspect-[15/9] w-[100%] overflow-hidden rounded-[10px]"
          }
          imgAnimation={
            "hover:scale-110 transition hover:ease-in duration-[250ms]"
          }
        />
      ) : (
        <div
          className={
            "block aspect-[15/9] w-[100%] overflow-hidden rounded-[10px] bg-gray-300"
          }
        ></div>
      )}

      <div className="mt-2">
        {!skeleton && (
          <span className={`bg-[#f2f6f8] p-1 text-xs text-[rgba(24,32,55,.7)]`}>
            무료배송
          </span>
        )}
      </div>
      <div
        className={`mt-2 sm:text-sm ${
          skeleton && "mt-[30px] h-[50px] rounded-md bg-gray-300 text-[0px]"
        }`}
      >
        {product.productName}
      </div>
      <div
        className={`mt-1 font-bold ${
          skeleton && "h-[30px] w-[100px] rounded-md bg-gray-300 text-[0px]"
        }`}
      >
        <span className={`mr-1 text-[#4684e9] ${skeleton && "text-[0px]"}`}>
          톡딜가
        </span>
        {comma(product.price)}원
      </div>
    </Card>
  );
};

export default ProductCard;
