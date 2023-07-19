import ProductCard from '../molecules/ProductCard';
import * as Grid from '../../styles/organisms/ProductGrid';

const ProductGrid = ({ products }) => {
  return (
    <Grid.Product>
      {products
        ? products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        : null}
    </Grid.Product>
  );
};

export default ProductGrid;
