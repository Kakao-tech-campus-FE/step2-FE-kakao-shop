import { comma } from "../../utils/convert";
import Photo from "../atoms/Photo";
const staticServerUri = process.env.REACT_APP_PATH || "";

const ProductInformationColumn = ({product}) => {

  const {productName, price, image} = product;
  return (
    <div className="flex pl-32">
      <div className="col">
        <Photo src={staticServerUri + image} alt={productName}/>
      </div>
      <div className="px-6 py-2 flex-col items-center border-r">
        <h1 className="text-2xl mb-2 text-black">{productName}</h1>
        <div className=" bg-stone-800 rounded-full w-24 h-12 flex items-center justify-center">
          <p className="text-lg text-white">{comma(price)}원</p>
        </div>
      </div>
    </div>
  );
};

export default ProductInformationColumn;
