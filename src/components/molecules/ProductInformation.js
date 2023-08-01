import { convertToPrice } from "utils/convert";

import Image from "components/atoms/Image";
import Stars from "components/atoms/Stars";

export default function ProductInformation({ product }) {
  return (
    <div className="inline-flex border">
      <Image
        className="w-[22rem]"
        src={process.env.REACT_APP_API_URL + product.image}
        alt={product.productName}
      />
      <div className="w-96 inline-block text-left p-4 space-y-4">
        <Stars starCount={product.starCount}></Stars>
        <h3 className="text-2xl">{product.productName}</h3>
        <p className="inline-block py-1 px-5 rounded-3xl text-center bg-yellow-300 text-2xl">{convertToPrice(product.price)}~</p>
      </div>
    </div>
  );
}
