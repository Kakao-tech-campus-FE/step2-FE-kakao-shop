import Group from "../atoms/Group";
import SkeletonGrid from "../organisms/SkeletonGrid";
import Loader from "../atoms/Loader";
import ProductGrid from "../organisms/ProductGrid";
import { useEffect, useRef, useState } from "react";
import { fetchProducts } from "../../services/product";
import { useInfiniteQuery } from "react-query";
import _ from "lodash";

const MainProductTemplate = () => {
  const [page, setPage] = useState(0);
  const bottomObserver = useRef(null);

  const { data, error, isLoading, fetchNextPage, hasNextPage } =
    useInfiniteQuery(
      "products",
      ({ pageParam = 0 }) => fetchProducts(pageParam),
      {
        getNextPageParam: (currentPage, allPages) => {
          const nextPage = allPages.length;
          return nextPage > 2 ? null : nextPage;
        },
      }
    );

  console.log(data);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLoading && hasNextPage) {
            fetchNextPage();
            setPage((page) => page + 1);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (bottomObserver.current) {
      io.observe(bottomObserver.current);
    }

    return () => {
      if (bottomObserver.current) {
        io.unobserve(bottomObserver.current);
      }
    };
  }, [isLoading, hasNextPage, fetchNextPage]);

  if (data) {
    const responseData = _.uniqBy(
      data.pages.flatMap((pages) => pages.data.response),
      "id"
    );

    return (
      <Group>
        <ProductGrid products={responseData} />
        {isLoading && <SkeletonGrid />}
        <div style={{ height: "80px" }} ref={bottomObserver}></div>
        {isLoading && hasNextPage && <Loader />}
      </Group>
    );
  }
  // return null;
};

export default MainProductTemplate;
