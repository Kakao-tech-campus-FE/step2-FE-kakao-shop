import { Suspense, useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../modules/product";
import ProductGrid from "../organisms/ProductGrid";
import Container from "../atoms/Container";

const MainSection = () => {
  const [page, setPage] =  useState(0);
  const bottomObserver = useRef(null);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);
  const isEnd = useSelector((state) => state.product.isEnd);

  const io = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isEnd) {
          setPage((page) => page + 1);
        }
      });
    },
    { threshold: 1 }
  );

  useEffect(() => {
    io.observe(bottomObserver.current);
  }, []);

  useEffect(() => {
    dispatch(getProducts(page));
  }, [dispatch, page]);

  return (
    <Container className="product-section">
      {error && <p>Error</p>}
      <ProductGrid products={products} loading={loading} />

      <div ref={bottomObserver}></div>
    </Container>
  );
};

export default MainSection;
