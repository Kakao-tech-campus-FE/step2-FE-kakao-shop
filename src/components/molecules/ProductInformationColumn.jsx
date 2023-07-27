import "../../styles/molecules/ProductInformationColumn.css";
import { comma } from "../../utils/convert";
import Photo from "../atoms/Photo";

const ProductInformationColumn = ({ product }) => {
  const { productName, price, image } = product;
  return (
    //product-information-column 3/4 width, OptionColumn 1/4 width
    <div className="flex flex-row basis-3/4">
      {/* image column 1/2 product info column 1/2*/}
      <div className="basis-1/2">
        <Photo
          className="w-full h-96 block"
          src={import.meta.env.VITE_API_URL + image}
          alt={productName}
        />
      </div>
      {/* productinfo col */}
      <div className="basis-1/2 mx-5">
        <span className="text-base underline text-sky-500">리뷰 보기</span>
        <h1 className="max-w-full text-left text-2xl font-normal text-black mb-5">
          {productName}{" "}
        </h1>
        <div className="inline-block bg-yellow rounded-3xl h-15 p-3">
          <p className="text-lg">{comma(price)}원~</p>
        </div>
      </div>
    </div>
  );
};

export default ProductInformationColumn;
