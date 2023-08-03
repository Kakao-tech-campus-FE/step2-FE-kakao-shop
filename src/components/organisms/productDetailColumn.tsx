import { comma } from '../../utils/comma';
import { staticServerUri } from '../../utils/serverUri';
import Photo from '../atoms/photo';
import Rating from '../atoms/rating';

interface ProductDetailColumnProps {
  productName: string;
  description: string;
  image: string;
  price: number;
  starCount: number;
}

export default function ProductDetailColumn({
  productName,
  description,
  image,
  price,
  starCount,
}: ProductDetailColumnProps) {
  return (
    <div className="flex flex-row">
      <div className="w-[30rem] rounded px-4">
        <Photo
          src={`${new URL(image, `${staticServerUri}/api`).toString()}`}
          alt="productName"
        />
      </div>
      <div className="w-[29rem]">
        <Rating maxScore={5} currentScore={starCount} />
        <h1 className="my-4 text-2xl">{productName}</h1>
        <p>{description}</p>
        <span className="rounded-full bg-yellow-300 px-4 py-2 font-bold">
          {comma(price)}
          {' '}
          원
        </span>
      </div>
    </div>
  );
}
