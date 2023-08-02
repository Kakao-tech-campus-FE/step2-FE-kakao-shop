import Group from "../atoms/Group";
import SkeletonGrid from "../organisms/SkeletonGrid";
import Loader from "../atoms/Loader";
import ProductGrid from "../organisms/ProductGrid";
import { useEffect, useRef } from "react";
import { fetchProducts } from "../../services/product";
import { useInfiniteQuery } from "@tanstack/react-query";
import _ from "lodash";

const MainProductTemplate = () => {
  const bottomObserver = useRef(null);

  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery(
    ["products"],
    ({ pageParam = 0 }) => fetchProducts(pageParam),
    {
      getNextPageParam: (currentPage, allPages) => {
        const nextPage = allPages.length;
        return nextPage > 2 ? null : nextPage;
      },
    }
  );

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLoading && hasNextPage) {
            fetchNextPage();
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

  if (data?.pages && Array.isArray(data.pages)) {
    const responseData = _.uniqBy(
      data.pages.flatMap((pages) => pages.data.response),
      "id"
    );

    return (
      <Group>
        {isLoading ? <SkeletonGrid /> : <ProductGrid products={responseData} />}
        <div style={{ height: "80px" }} ref={bottomObserver}></div>
        {isLoading && !hasNextPage && <Loader />}
      </Group>
    );
  } else {
    return null;
  }
};

export default MainProductTemplate;
