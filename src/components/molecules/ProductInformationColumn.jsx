import Photo from "../atoms/Photo";
import Button from "../atoms/Button";
import comma from "../../utils/convert";

const ProductInformationColumn = ({ product }) => {
  const { productName, price, image } = product;
  return (
    <div className="product-information-column flex w-[920px] pt-[30px] pr-[29px] border-r border-gray-300 bg-white">
      <div className="col">
        <Photo
          src={process.env.REACT_APP_API_URL + image.substring(1, image.length)}
          alt={productName}
          className="product-image w-[430px] h-[430px]"
        />
      </div>
      <div className="col ml-[30px] w-[430px]">
        <h1 className="product-name text-[26px]">{productName}</h1>
        <Button
          className="product-price h-[45px] mt-[15px] mb-[5px] px-[15px] rounded-full text-[16px] align-top bg-yellow-kakao"
          onClick={() => {}}
        >
          톡딜가 {comma(price)}원~
        </Button>
      </div>
    </div>
  );
};

export default ProductInformationColumn;
