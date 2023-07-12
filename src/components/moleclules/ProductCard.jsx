import { comma } from "../../utils/convert";
import Card from "../atoms/Card";
import Photo from "../atoms/Photo";

const ProductCard = ({ product }) => {
  return (
    <Card to={`/product/${product.id}`}>
      <Photo
        src={product.image}
        alt={product.productName}
        className={"block h-[150px] w-[270px] overflow-hidden rounded-[10px]"}
        imgAnimation={
          "hover:scale-110 transition hover:ease-in duration-[250ms]"
        }
      />
      <div className="mt-2">
        <span className="bg-[#f2f6f8] p-1 text-xs text-[rgba(24,32,55,.7)]">
          무료배송
        </span>
      </div>
      <div className="mt-2 text-sm">{product.productName}</div>
      <div className="mt-1 text-xl font-bold">
        <span className="mr-2 text-lg text-[#4684e9]">톡딜가</span>
        {comma(product.price)}원
      </div>
    </Card>
  );
};

export default ProductCard;
