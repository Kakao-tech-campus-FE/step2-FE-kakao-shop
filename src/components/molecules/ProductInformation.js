import { convertToPrice } from "utils/convert";

import Photo from "components/atoms/Photo";
import Stars from "components/atoms/Stars";

export default function ProductInformation({ product }) {
  return (
    <div className="inline-grid grid-cols-2">
      <Photo
        className=""
        src={process.env.REACT_APP_API_URL + product.image}
        alt={product.productName}
      />
      <div className="inline-block">
        <Stars starCount={product.starCount}></Stars>
        <h3 className="">{product.productName}</h3>
        <p className="">{convertToPrice(product.price)}~</p>
      </div>
    </div>
  );
}
