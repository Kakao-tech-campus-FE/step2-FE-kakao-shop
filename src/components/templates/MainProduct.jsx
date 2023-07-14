// MainProduct.jsx

import { useSelector, useDispatch } from "react-redux";
import Container from "../atoms/Container";
import ProductGrid from "../organisms/ProductGrid";
import { useEffect, useRef, useState } from "react";
import { getProducts } from "../../store/productSlice";

const MainProduct = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const bottomObserver = useRef(null);
  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  const io = useRef(
    new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !loading) {
            setPage((page) => page + 1);
          }
        });
      },
      {
        threshold: 1,
      }
    )
  );

  useEffect(() => {
    io.current.observe(bottomObserver.current);

    return () => {
      io.current.disconnect(); // 컴포넌트가 언마운트될 때 IntersectionObserver를 정리합니다.
    };
  }, []);

  useEffect(() => {
    dispatch(getProducts(page)); // getProducts 액션의 인자로 page 값을 전달합니다.
  }, [dispatch, page]);

  return (
    <Container>
      {error && <p>{error}</p>}
      <ProductGrid products={products} />
      <div ref={bottomObserver}></div>
    </Container>
  );
};

export default MainProduct;
