import React, { useEffect } from "react";
import Container from "../atoms/Container";
import Box from "../atoms/Box";
import ProductGrid from "../organisms/ProductGrid";
import { useDispatch, useSelector } from "react-redux";
import { setSearchResult } from "../../store/slices/searchResultSlice";

const SearchResultTemplate = ({ query }) => {
  const searchResult = useSelector((state) => state.searchResult.searchResult);
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const result = products.filter((product) =>
      product.productName.includes(query)
    );
    
    dispatch(setSearchResult({ searchResult: result }));
  }, []);

  return (
    <Container className="cart-list w-[981px]">
      {/* 제목 */}
      <Box className="pl-4 pb-4">
        <h1 className="text-2xl font-bold">검색결과: "{query}"</h1>
      </Box>

      {/* 검색된 상품 목록 */}
      {searchResult.length !== 0 ? (
        <ProductGrid products={searchResult} />
      ) : (
        <div>찾으시는 상품이 없습니다.</div>
      )}
    </Container>
  );
};

export default SearchResultTemplate;
