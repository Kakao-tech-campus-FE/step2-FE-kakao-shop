import { Link } from 'react-router-dom';
import { ProductThumbnail } from '../../types/product';
import ProductCard from '../molecules/productCard';

interface ProductListProps {
  productData: ProductThumbnail[] | undefined;
}

export default function ProductList({ productData }: ProductListProps) {
  return (
    <ul className="grid grid-cols-3 gap-8">
      {productData?.map(({
        id, productName, description, image, price,
      }) => (
        <li key={id}>
          <Link to={`product/${id}`}>
            <ProductCard
              productName={productName}
              description={description}
              image={`${new URL(image, process.env.REACT_APP_KAKAO_API_URL).toString()}`}
              price={price}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
