import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { getProductspReq } from "apis/product.js";
import Container from "components/atoms/Container.js";
import ProductGrid from "components/organisms/ProductGrid.js";
import Loader from "components/atoms/Loader.js";

export default function ProductSection() {
  const [page, setPage] = useState(0);
  const { isLoading, error, data } = useQuery({
    queryKey: ["product", page],
    queryFn: () => getProductspReq(page).then((res) => res.data.response),
    enabled: true,
  });

  return (
    <Container>
      {isLoading && <Loader />}
      {error && <p>{`Error: ${error.message}`}</p>}
      {data && <ProductGrid products={data} />}
    </Container>
  );
}
