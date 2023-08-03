import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/slices/productSlice";
import ProductGrid from "../organisms/ProductGrid";
import { loader } from "react-global-loader";
import SkeletonGrid from "../organisms/SkeletonGrid";
import Container from "../atoms/Container";
import Carousel from "../atoms/Carousel";

const ProductSection = () => {
  const [page, setPage] = useState(0);
  const bottomObserver = useRef(null);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.loading);
  const isEnd = useSelector((state) => state.product.isEnd);
  const io = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setPage((page) => page + 1);
        }
      });
    },
    {
      threshold: 1,
    }
  );
  const showLoader = () => {
    loader.show();
  };

  const hideLoader = () => {
    loader.hide();
  };

  useEffect(() => {
    io.observe(bottomObserver.current);
  }, []);

  useEffect(() => {
    if (!isEnd) dispatch(getProducts(page));
  }, [dispatch, page, isEnd]);

  useEffect(() => {
    if (!loading) hideLoader();
    else showLoader();
  }, [loading]);

  return (
    <Container className="product-section">
      <Carousel />
      {loading && <SkeletonGrid arr={new Array(15).fill(1)} />}
      {products && <ProductGrid products={products} />}
      <div ref={bottomObserver}></div>
    </Container>
  );
};

export default ProductSection;
