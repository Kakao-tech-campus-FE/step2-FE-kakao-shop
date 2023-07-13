import { useRef, useState } from "react";
import Container from "../atoms/Container";
import ProductGrid from "../organisms/ProductGrid";
import { Suspense, useEffect } from "react";
import { fetchProducts } from "../../services/product";
import { useQuery } from "react-query";

const MainProductTemplate = () => {
  const [page, setPage] = useState(0);

  const {
    data: products,
    isLoading,
    isError,
    isFetching,
    isFetched,
  } = useQuery(`products/${page}`, () => fetchProducts(page));

  //컨텐츠 하단에 다다르면 추가적으로 데이터를 로드
  // page > 의존성 배열에 들어가야 함

  const bottomObserver = useRef(null);
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
  // 컨텐츠 하단에 다다르면 추가적으로 데이터를
  // page > 의존성 배열에 들어가야 함
  useEffect(() => {
    io.observe(bottomObserver.current); // 바로 감시를 시작한다면
  }, []); // 최초 렌더링 마운트 1회만 선언

  useEffect(() => {
    dispatch(getProducts(page));
  }, [dispatch, page]);
  //아무것도 없을 때, 빈 배열 : [], 배열에 무언가 있을 때 차이점
  // depend
  return (
    <Container>
      <ProductGrid products={products} />
      <div ref={bottomObserver}></div>
    </Container>
  );
};

export default MainProductTemplate;
