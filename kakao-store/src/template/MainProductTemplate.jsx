import { Suspense, useEffect, useState, useRef } from "react";
import Container from "../components/atoms/Container";
import ProductGrid from "../components/organisms/ProductGrid";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../store/slices/productSlice";
import { fetchProducts } from "../services/product";
import Loader from "../components/atoms/Loader";

import "../styles/Skeleton.css";

const MainProductTemplate = () => {
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const bottomObserver = useRef(null);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const error = useSelector((state) => state.product.error);
  const isEnd = useSelector((state) => state.product.isEnd);

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        if (entry.isIntersecting && bottomObserver.current && !isEnd) {
          io.unobserve(bottomObserver.current);
          setPage((prev) => prev + 1);
        }
      });
    },
    { threshold: 1 }
  );
  const time = 2000;
  useEffect(() => {
    io.observe(bottomObserver.current);
    setTimeout(() => {
      setIsLoading(false);
    }, time);
  }, [page]);

  useEffect(() => {
    dispatch(getProduct(page));
  }, [dispatch, page]);

  return (
    <Container className={"product-section"}>
      <Suspense fallback={<Loader />}>
        {isLoading && <Loader />}
        {isLoading && (
          // <SkeletonCard />
          <div className="col col-10 skeleton-field-wrapper">
            {Array.from(Array(15).keys()).map((index) => (
              <div key={index} className="skeleton"></div>
            ))}
          </div>
        )}
        {error && <p>에러가 발생했습니다.</p>}
        {!isLoading && (
          <ProductGrid products={products} isLoading={isLoading} />
        )}
        <div ref={bottomObserver}></div>
      </Suspense>
    </Container>
  );
};

export default MainProductTemplate;
