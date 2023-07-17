import { Suspense } from "react";
import GlobalTemplate from "@/components/templates/global-template/GlobalTemplate.jsx";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import productAPI from "@/api/productAPI.js";
import styled from "styled-components";
import ProductInfoRow from "@/components/organisms/product-info-row/ProductInfoRow.jsx";

const Styled = {
  Container: styled.section`
    width: 100%;
    min-width: 1280px;
    min-height: calc(100vh - 65px);

    display: grid;
    grid-template-columns: 1fr 360px;
  `,
};

function Product() {
  const { productId } = useParams();

  const { data } = useQuery(
    "getProductById",
    async () => {
      const { data } = await productAPI.getProductById({ productId });
      return data.response;
    },
    {
      onSuccess: (data) => console.log(data),
      onError: (err) => console.log(err),
      suspense: true,
    }
  );

  return (
    <GlobalTemplate>
      <Styled.Container>
        <Suspense fallback={<div>Loading..</div>}>
          <ProductInfoRow
            imgSrc={data.image}
            starCount={data.starCount}
            productName={data.productName}
            price={data.price}
          />
          <div>hello</div>
        </Suspense>
      </Styled.Container>
    </GlobalTemplate>
  );
}

export default Product;
