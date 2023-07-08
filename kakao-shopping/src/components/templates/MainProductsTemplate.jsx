import { useState } from "react";
import Container from "../atoms/Container";
import MainProductsSkeleton from "../organisms/MainProductsSkeleton";
import PageSetButton from "../molecules/PageSetButton";
import MainProducts from "../organisms/MainProducts";

const MainProductsTemplate = ({isLoading, data}) => {
  const [page, setPage] = useState(0);

  const slicedData = data?.data.response.slice(page * 6, page * 6 + 6);

  if(isLoading ) return (
    <MainProductsSkeleton />
  )
  return (
    <Container className="flex flex-col items-center justify-center">
      <MainProducts slicedData={slicedData} />
      <PageSetButton page={data?.data.response.length} setPage={setPage} />
    </Container>
  );
}

export default MainProductsTemplate;
