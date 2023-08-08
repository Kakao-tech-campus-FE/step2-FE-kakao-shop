import React, { useEffect, useState } from "react";
import Container from "../atoms/Container";
import Box from "../atoms/Box";
import ProductGrid from "../organisms/ProductGrid";
import { fetchProducts } from "../../services/product";
import _ from "lodash";
import Loader from "../atoms/Loader";

const staticServerUri = process.env.REACT_APP_PATH || "";

const SearchResultTemplate = ({ query }) => {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchAllProducts = async () => {
      setIsLoading(true);
      const allProducts = [];
      let page = 0;

      // 더 이상 상품이 조회되지 않을 때까지 page를 증가시키며 모든 상품 가져와서 allProducts에 저장
      while (true) {
        try {
          const response = await fetchProducts(page);

          if (response.data.response.length === 0) {
            break;
          }

          allProducts.push(...response.data.response);
          page++;
        } catch (err) {
          break;
        }
      }

      // 모든 상품 목록에서 검색어로 filter하여 result 상태 업데이트
      setResult(
        allProducts.filter((product) => product.productName.includes(query))
      );
      setIsLoading(false);
    };

    fetchAllProducts();
  }, []);

  const SearchFailed = () => {
    return (
      <div className="flex flex-col items-center gap-4 m-16">
        <img src={staticServerUri + "/search_failed.png"} alt="검색 실패" width={144} />
        <p className="text-sm">찾으시는 상품이 없습니다.</p>
      </div>
    );
  }

  return (
    <Container className="cart-list w-[981px]">
      {/* 제목 */}
      <Box className="pl-4 pb-4">
        <h1 className="text-2xl font-bold">
          검색결과 {result.length}건: "{query}"
        </h1>
      </Box>

      {/* 검색 결과 출력 */}
      {(() => {
        if (isLoading) {
          return <Loader />;
        } else {
          if (result.length === 0) {
            return <SearchFailed />;
          } else {
            return <ProductGrid products={result} />;
          }
        }
      })()}
    </Container>
  );
};

export default SearchResultTemplate;
