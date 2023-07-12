import { forwardRef } from 'react';
import ProductList from '../organisms/productList';
import { ProductData } from '../../types/product';

interface MainProductListTemplateProps {
  products: ProductData[] | undefined;
  isFetchingNextPage: boolean;
}

const MainProductListTemplate = forwardRef<HTMLDivElement, MainProductListTemplateProps>(({
  products,
  isFetchingNextPage,
}, ref) => (
  <div>
    <ProductList productData={products} />
    {isFetchingNextPage
      ? (
        <div>Loading...</div>
      ) : (
        <div ref={ref} />
      )}
  </div>
));

export default MainProductListTemplate;
