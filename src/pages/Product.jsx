import { Suspense } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import GlobalTemplate from "@/components/templates/global-template/GlobalTemplate.jsx";
import ProductDetailRow from "@/components/organisms/product-detail-row/ProductDetailRow.jsx";
import ProductOptionRow from "@/components/organisms/product-option-row/ProductOptionRow.jsx";
import useGetProductByIdQuery from "@/hooks/useGetProductByIdQuery.js";
import Loader from "@/components/atoms/loader/Loader.jsx";

const Styled = {
  Container: styled.section`
    width: 100%;
    min-height: calc(100vh - 65px);

    display: grid;
    grid-template-columns: 1fr 360px;

    @media screen and (max-width: 1400px) {
      display: block;
    }
  `,
};

function Product() {
  const { productId } = useParams();
  const { data } = useGetProductByIdQuery({ productId });

  return (
    <GlobalTemplate title={data.productName}>
      <Suspense fallback={<Loader />}>
        <Styled.Container>
          <ProductDetailRow
            imgSrc={data.image}
            starCount={data.starCount}
            productName={data.productName}
            price={data.price}
          />
          <ProductOptionRow options={data.options} />
        </Styled.Container>
      </Suspense>
    </GlobalTemplate>
  );
}

export default Product;
