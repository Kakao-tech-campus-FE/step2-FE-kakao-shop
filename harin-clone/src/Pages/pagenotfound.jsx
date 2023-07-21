import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const PageNotFuond = () => {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <Container className="mx-auto w-1/2 h-1/2 align-middle">
        <div className="text-2xl m-3 mb-3">페이지를 찾을 수 없습니다</div>
        <hr />
        <div className="mt-6">
          <Link to={"/"} className="bg-yellow-300 rounded p-2">
            홈으로
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default PageNotFuond;
