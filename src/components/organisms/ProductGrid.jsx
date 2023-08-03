import ProductCard from '../molecules/ProductCard';
import * as Grid from '../../styles/organisms/ProductGrid';
import Loader from '../atoms/Loader';

const ProductGrid = ({ products, isFetchingNextPage }) => {
  console.log('products: ', products);
  return (
    <Grid.Product>
      {products
        ? products.map((product, idx) => (
            <ProductCard key={idx} product={product} />
          ))
        : null}
      {isFetchingNextPage && <Loader className="mainLoader" />}
    </Grid.Product>
  );
};

export default ProductGrid;
