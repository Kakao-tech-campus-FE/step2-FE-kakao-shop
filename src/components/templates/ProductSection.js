import { useInfiniteQuery } from "@tanstack/react-query";

import { getProductspReq } from "apis/product.js";
import Container from "components/atoms/Container.js";
import ProductGrid from "components/organisms/ProductGrid.js";
import Loader from "components/atoms/Loader.js";

export default function ProductSection() {
  const { isLoading, data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery(["products"], ({ page = 0 }) => getProductspReq(page), {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage?.data?.response.length === 0) return undefined;
        return allPages.length;
      },
      onError: (error) => {
        console.log("[Products Error]", error.message);
      },
    });

  return (
    <Container>
      {isLoading && <Loader />}
      {data && <ProductGrid products={data.pages.flatMap(page => page.data.response)} />}
    </Container>
  );
}
