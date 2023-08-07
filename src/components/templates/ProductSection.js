import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getProductReq } from "apis/product.js";

import Container from "components/atoms/Container.js";
import ProductInformation from "components/molecules/ProductInformation.js";
import ProductOption from "components/molecules/ProductOption.js";

export default function ProductSection() {
  const { productId } = useParams();
  const { data } = useQuery({
    queryKey: ["products", productId],
    queryFn: () => getProductReq(productId),
    onError: (error) => {
      const states = { 3: "리다이렉션", 4: "클라이언트", 5: "서버" };
      const state = states[error.response.status / 100];
      console.log(
        `[Product Request Error] ${error.response.status}(${state}): ${error.message}`
      );
    },
  });

  return (
    <Container className="inline-flex my-8 border justify-center">
      <ProductInformation product={data.data.response} />
      <ProductOption product={data.data.response} />
    </Container>
  );
}
