import { useDispatch, useSelector } from "react-redux";
import Container from "../Atoms/Container";
import ProductGrid from "../Organisms/ProductGrid";
import { useEffect, useState, useRef } from "react";
import { getProducts } from "../../Store/Slices/productSlice";
import Loader from "../Atoms/Loader";

const MainProductTemplate = () => {
  const [page, setPage] = useState(0);
  const bottomObserver = useRef(null);
  const dispatch = useDispatch();

  const products = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);
  const isEnd = useSelector((state) => state.product.isEnd);

  // const {
  //   data: products,
  //   fetchNextPage,
  //   hasNextPage,
  //   isFetchingNextPage,
  //   error,
  // } = useInfiniteQuery("users", getProducts(), {
  //   getNextPageParam: (page) => page + 1, // 다음 페이지 매개 변수 추출
  // });

  //bottomObserver.current && !loading &&  !isEnd
  // intersection observer
  const io = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        // if (!entry.isIntersecting) return;
        if (!isEnd && !loading && entry.isIntersecting && bottomObserver.current) {
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
  }, []); // 최초 마운트 시에만...

  useEffect(() => {
    dispatch(getProducts(page));
  }, [dispatch, page]);

  // const { data, fetchNextPage, hasNextPage, isLoading, isError } = useInfiniteQuery(
  //   ['page'],
  //   ({ pageParam = 0 }) => getProducts(pageParam),
  //   {
  //     getNextPageParam: (lastPage, allPages) => {
  //       const nextPage = allPages.length + 1;
  //       return lastPage.data.length === 0 ? null : nextPage;
  //   },
  //   }
  // )

  return (
    <Container className="mt-12">
      {loading && <Loader />}
      {error && <p>Error</p>}
      <ProductGrid products={products} />
      <div ref={bottomObserver}></div>
    </Container>
  );
};

export default MainProductTemplate;
