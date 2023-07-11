import Container from "postcss/lib/container";
import ProductGrid from "../organisms/ProductGrid";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const ProductSection = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.pruducts);

  // useEffect(() => {
  //   dispatch(getProducts());
  // }, [dispatch]);
  return (
    <Container className="product-section">
      {loading && <p>Loading...</p>}
      {error && <p>Error</p>}
      <ProductGrid products={products} />
    </Container>
  );
};

export default ProductSection;
