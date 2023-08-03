import { useDispatch, useSelector } from "react-redux";
import Container from "../atoms/Container";
import ProductGrid from "../organisms/ProductGrid";
import "../../styles/organisms/ProductGrid.css";
import { Suspense, useEffect, useState, useRef } from "react";
import { getProducts } from "../../store/slices/productSlice";

const MainProductTemplate = () => {
  const [page, setPage] = useState(0);
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
    {
      threshold: 1,
    }
  );

  useEffect(() => {
    io.observe(bottomObserver.current);
  }, []); // 최초 렌더링 마운트 1회만 선언

  useEffect(() => {
    dispatch(getProducts(page));
  }, [dispatch, page]);

  // 조건부 렌더링 (예전 방식)
  // if (loading) return <div>로딩중...</div>

  return (
    <Container>
      {loading ? (
        Array.from({ length: 10 }).map((_, index) => (
          <SkeletonProductCard key={index} />
        ))
      ) : (
        <ProductGrid products={products} /> // Render the actual ProductGrid component when data is loaded
      )}
      <div ref={bottomObserver}></div>
    </Container>
  );
};

export default MainProductTemplate;

export const SkeletonProductCard = () => {
  return (
    <div className="skeleton-product-card">
      <div className="skeleton-product-image"></div>
      <div className="skeleton-product-title"></div>
      <div className="skeleton-product-price"></div>
    </div>
  );
};
