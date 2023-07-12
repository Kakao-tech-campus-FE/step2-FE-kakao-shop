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
      <div className="mb-2 h-40 w-full rounded-lg">
        <Photo
          src={image}
          alt={productName}
        />
      </div>
      <div className="flex grow flex-col justify-between">
        <div className="break-keep">
          {productName}
        </div>
        <div className="text-sm text-gray-400">
          {description}
        </div>
        <div className="text-right text-lg font-bold">
          {price.toLocaleString('ko-KR')}
          {' '}
          원
        </div>
      </div>
    </div>
  );
}
