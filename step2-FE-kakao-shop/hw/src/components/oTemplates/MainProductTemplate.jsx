import { useDispatch, useSelector } from "react-redux";
import Container from "../atoms/Container";
import ProductGrid from "../organisms/ProductGrid";
import { Suspense, useEffect, useRef, useState } from "react";
import { getProducts } from "../../store/slices/productSlice";

const MainProductTemplate = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const bottomObserver = useRef(null);
  const products = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.loading);
  const isEnd = useSelector((state) => state.product.isEnd);

  // 컨텐츠 하단에 다다르면 추가적으로 데이터를 로드
  // (변경이 되는 값)page > 의존성 배열에 들어가야 함

  const io = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
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
  }, [loading]);

  useEffect(() => {
    dispatch(getProducts(page));
  }, [dispatch, page]);

  return (
    <Container>
      <ProductGrid products={products} />
      {/* 렌더링이 새로 발생 */}

      <div ref={bottomObserver}></div>
    </Container>
  );
};

export default MainProductTemplate;
