import { ProductData } from '../../types/product';
import ProductCard from '../molecules/productCard';

interface ProductListProps {
  productData: ProductData[] | undefined;
}

export default function ProductList({ productData }: ProductListProps) {
  return (
    <ul className="grid grid-cols-3 gap-8">
      {productData?.map(({
        id, productName, description, image, price,
      }) => (
        <li key={id}>
          <ProductCard
            productName={productName}
            description={description}
            image={`${new URL(image, process.env.REACT_APP_KAKAO_API_URL).toString()}`}
            price={price}
          />
        </li>
      ))}
    </ul>
  );
}
