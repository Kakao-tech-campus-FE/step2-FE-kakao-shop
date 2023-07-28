import { useSelector, useDispatch } from "react-redux";
import ProductGrid from "../organisms/ProductGrid";
import { Suspense } from "react";
import { useEffect, useRef, useState } from "react";
import { getProducts } from "../../redux/product/productSlice";
import Loader from "../atoms/Loader";
import MainContainer from "../atoms/MainContainer";

const MainProductTemplate = () => {
  const [page, setPage] = useState(0);

  const products = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.loading);
  // const error = useSelector((state) => state.product.error);
  const isEnd = useSelector((state) => state.product.isEnd);

  const dispatch = useDispatch();
  const bottomObserver = useRef(null);

  /**
   * @todo redux 제외하고 react-query 적용하기
   * 1. react-query로 변경
   * 2. react-query의 useInfiniteQuery 사용
   * 3. react-query의 useInfiniteQuery의 fetchNextPage 사용
   * 4. error 처리
   */
  const io = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (
          !loading &&
          entry.isIntersecting &&
          bottomObserver.current &&
          !isEnd
        ) {
          setPage(page + 1);
        }
      });
    },
    {
      threshold: 1,
    }
  );

  useEffect(() => {
    io.observe(bottomObserver.current);
  }, []);

  useEffect(() => {
    dispatch(getProducts(page));
  }, [dispatch, page]);

  return (
    <MainContainer className="whitespace-break-spaces px-12">
      <div className="my-20">
        <span className="text-center text-2xl font-extrabold border-solid border-0 border-b-4 border-kakao-yellow">
          오늘의 딜
        </span>
      </div>
      <Suspense fallback={<Loader />}>
        <ProductGrid products={products} isLoading={loading} />
        <div ref={bottomObserver}></div>
      </Suspense>
    </MainContainer>
  );
};

export default MainProductTemplate;
