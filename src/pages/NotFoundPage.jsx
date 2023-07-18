import Button from "../components/atoms/Button";
import { useNavigate } from "react-router-dom";
import "../styles/NotFoundPage.css"

const NotFoundPage = () => {
    const navigate = useNavigate();
    const goMain = () => {
        navigate("/")
    }

    return (
        <div className="notFoundPage">
            <h1>이곳에는 아무것도 없습니다!</h1>
            <h2>잘못된 경로인 것 같습니다😅</h2>
            <Button onClick={goMain}>메인으로 돌아가기</Button>
        </div>
    );
};

export default NotFoundPage;