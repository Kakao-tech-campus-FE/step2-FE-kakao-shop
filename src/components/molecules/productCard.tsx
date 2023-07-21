import Photo from '../atoms/photo';
import Price from '../atoms/price';

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
      <div className="mb-2 h-40 w-full rounded-lg">
        <Photo
          src={image}
          alt={productName}
        />
      </div>
      <div className="flex grow flex-col justify-between">
        <h1 className="break-keep">
          {productName}
        </h1>
        <p className="text-sm text-gray-400">
          {description}
        </p>
        <div className="text-end text-lg font-bold">
          <Price price={price} />
        </div>
      </div>
    </div>
  );
}
