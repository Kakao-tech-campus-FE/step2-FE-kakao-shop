import { comma } from '../../utils/comma';
import Photo from '../atoms/photo';

interface ProductCardprops {
  productName: string;
  description: string;
  image: string;
  price: number;
}

export default function ProductCard({
  productName, description, image, price,
}: ProductCardprops) {
  return (
    <div className="flex h-80 w-80 flex-col rounded-lg p-3
    hover:bg-stone-200"
    >
      <div className="overflow-hidden rounded-lg">
        <div className="mb-2 h-40 w-full rounded-lg transition-transform duration-300
        hover:scale-[1.05]"
        >
          <Photo
            src={image}
            alt={productName}
          />
        </div>
      </div>
      <div className="flex grow flex-col justify-between">
        <h1 className="break-keep">
          {productName}
        </h1>
        <p className="text-sm text-gray-400">
          {description}
        </p>
        <div className="text-end text-lg font-bold">
          {comma(price)}
          {' '}
          원
        </div>
      </div>
    </div>
  );
}
