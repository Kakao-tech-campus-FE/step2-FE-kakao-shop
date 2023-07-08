import { useState } from "react";
import Container from "../atoms/Container";
import MainProductsSkeleton from "../organisms/MainProductsSkeleton";
import PageSetButton from "../molecules/PageSetButton";
import MainProducts from "../organisms/MainProducts";
import { Link } from "react-router-dom";

const MainProductsTemplate = ({isLoading, data, isError, error}) => {
  const [page, setPage] = useState(0);

  const slicedData = data?.data.response.slice(page * 6, page * 6 + 6);

  if(isLoading ) {
    return (
    <MainProductsSkeleton />
    )
  }
  if(isError) {
    return (
      <Container className="mt-10 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold mb-2">에러가 발생했습니다</span>
        <span className="text-lg mb-2">{error.message}</span>
        <Link to="/login" className="text-lg">로그인으로 돌아가기</Link>
      </Container>
    )
  }
  return (
    <Container className="flex flex-col items-center justify-center">
      <MainProducts slicedData={slicedData} />
      <PageSetButton page={data?.data.response.length} setPage={setPage} />
    </Container>
  );
}

export default MainProductsTemplate;
