import React, { useEffect, Suspense, lazy } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../store/slices/detailSlice";

import Loader from "../components/atoms/Loader";
import { getProductById } from "../services/product";
import { useQuery } from "@tanstack/react-query";

const ProductInformationColumn = React.lazy(() =>
  import("../components/molecules/ProductInformationColumn")
);
const OptionColums = React.lazy(() =>
  import("../components/molecules/OptionColums")
);

const ProductDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, error, isLoading, status } = useQuery([`/product/${id}`], () =>
    getProductById(id)
  );

  console.log(status);
  if (status === "error") {
    return (
      <div id="main" class="flex h-screen items-center justify-center">
        <div class="fof items-center">
          <h1 class="animate-type text-4xl font-bold text-gray-800">
            Error 404
          </h1>
          <h2 text-4xl>해당 상품을 찾을 수 없습니다.</h2>
          <Link to="/" className="text-2xl font-bold text-gray-800">
            홈으로
          </Link>
        </div>
      </div>
    );
  }
  // const {
  //   data: detail,
  //   error,
  //   isLoading,
  // } = useQuery(`product/${id}`, () => getProductById(id)); // 구분자, API 요청 함수 / deatilSlice 필요없음

  // 비동기 함수
  // 50초랑 20초 요청이 있으면 동시에 출발
  // 여러 비동기를 다 받고 처리를 해야한다고 한다면
  // useQueries([]) 사용
  // 단일 비동기는 useQuery 사용
  const product = data?.data.response;

  return (
    <div>
      <Suspense fallback={<Loader />}>
        {product && (
          <div className="flex px-40 ">
            <span className="w-7/12">
              <ProductInformationColumn product={product} />
            </span>

            <span className="border-gray w-5/12 border-l p-10">
              <OptionColums product={product} />
            </span>
          </div>
        )}
      </Suspense>

      {/* <OptionColums product={product} /> */}
      {/* loading state 
      error state */}
      {isLoading && <Loader />}
      {error && <div>{error.message}</div>}
      {data && <div>{data.productName}</div>}
    </div>
  );
};

export default ProductDetailPage;
