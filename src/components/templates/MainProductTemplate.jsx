import { useState, useEffect, useRef, Suspense, useMemo } from "react";
import { useInfiniteQuery } from "react-query";
import ProductGrid from "../organisms/ProductGrid";
import Loader from "../atoms/Loader";
import { fetchProducts } from "../../apis/product";
import { useParams } from "react-router-dom";
import _ from "lodash";

const MainProductTemplate = () => {
  const bottomObserver = useRef(null);

  const { page } = useParams();
  const pageNumber = useMemo(
    () => (!isNaN(page) ? parseInt(page, 10) : 0),
    [page]
  );

  const [products, setProducts] = useState([]);
  const [isEnd, setIsEnd] = useState(false);

  const { data, error, isLoading, fetchNextPage, hasNextPage } =
    useInfiniteQuery("main", ({ pageParam = 0 }) => fetchProducts(pageParam), {
      getNextPageParam: (lastPage) => {
        return lastPage.data.response.length === 9 ? pageNumber + 1 : null;
      },
    });

  useEffect(() => {
    if (data) {
      const newProducts = data.pages.flatMap((page) => page.data.response);
      setProducts((prevProducts) =>
        _.uniqBy([...prevProducts, ...newProducts], "id")
      );
      setIsEnd(!hasNextPage);
    }
  }, [data, hasNextPage]);

  useEffect(() => {
    const options = {
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isEnd) {
        fetchNextPage();
      }
    }, options);

    if (bottomObserver.current) {
      observer.observe(bottomObserver.current);
    }

    return () => {
      if (bottomObserver.current) {
        observer.unobserve(bottomObserver.current);
      }
    };
  }, [bottomObserver, fetchNextPage, isEnd]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="w-full mx-auto px-32 pt-20">
      {isLoading && <Loader />}
      <Suspense fallback={<Loader />}>
        <ProductGrid products={products} loading={isLoading} />
        <div ref={bottomObserver}></div>
      </Suspense>
    </div>
  );
};

export default MainProductTemplate;
