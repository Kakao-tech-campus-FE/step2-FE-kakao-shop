import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getProductReq } from "apis/product";

import Container from "components/atoms/Container";
import Loader from "components/atoms/Loader";
import ProductInformation from "components/molecules/ProductInformation";
import ProductOption from "components/molecules/ProductOption";

export default function ProductSection() {
  const { productId } = useParams();
  const { isLoading, error, data } = useQuery({
    queryKey: [`products/${productId}`],
    queryFn: () => getProductReq(productId),
  });

  return (
    <Container className="m-8 inline-flex">
      {isLoading && <Loader />}
      {error && <div>{error}</div>}
      {data && (
        <>
          <ProductInformation product={data.data.response} />
          <ProductOption product={data.data.response} />
        </>
      )}
    </Container>
  );
}
