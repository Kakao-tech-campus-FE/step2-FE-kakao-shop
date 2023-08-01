import { styled } from "styled-components";
import GlobalNavBar from "../organisms/GlobalNavBar";
import ProductsLoader from "../atoms/ProductsLoader";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import ResultList from "../organisms/ResultList";
import { getResult } from "../../services/apis";

const Container = styled.div`
  position: relative;
  top: 60px;
  width: 1200px;
  height: calc(100vh - 80px);
  margin: 0 auto;
`;

const ResultTemplate = () => {
  const navigate = useNavigate();
  const orderId = useParams();
  const { data: result, isLoading } = useQuery(
    ["result"],
    () => getResult(orderId),
    {
      onError: () => {
        alert("페이지를 찾을 수 없습니다.");
        navigate("/");
      },
    }
  );

  return (
    <>
      <GlobalNavBar height="60px" />
      <Container>
        {isLoading ? <ProductsLoader /> : <ResultList result={result} />}
      </Container>
    </>
  );
};

export default ResultTemplate;
