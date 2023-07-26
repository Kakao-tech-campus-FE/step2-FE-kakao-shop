import { forwardRef } from 'react';
import ProductList from '../organisms/productList';
import { ProductThumbnail } from '../../types/product';
import Loader from '../atoms/loader';

interface MainProductListTemplateProps {
  products: ProductThumbnail[] | undefined;
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
        <div className="text-center">
          <Loader />
        </div>
      ) : (
        <div ref={ref} />
      )}
  </div>
));

export default MainProductListTemplate;
