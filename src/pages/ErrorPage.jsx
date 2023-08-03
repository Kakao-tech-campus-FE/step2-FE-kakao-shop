import Container from "../components/atoms/Container";
import Button from "../components/atoms/Button";
import { useNavigate } from "react-router";

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Container className="w-[870px] bg-white border border-border_gray">
                <h1>에러가 발생하였습니다.</h1>
                <Button onClick={() => {
                    navigate("/");
                }}>홈으로 이동하기</Button>
            </Container>
        </div>
    );
}

export default ErrorPage;