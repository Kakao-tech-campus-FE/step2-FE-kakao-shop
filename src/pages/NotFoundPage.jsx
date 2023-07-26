import { useNavigate } from "react-router-dom"
import { styled } from 'styled-components';

const NotFoundPage = () => {
    const navigate = useNavigate();
    const goMain = () => {
        navigate("/")
    }

    return (
        <NotFoundPageContainer>
            <NotFoundPageBox>
                <h1>⚠이곳에는 아무것도 없습니다!⚠</h1>
                <h2>어떠한 에러가 발생했거나, 사라진 페이지입니다😭</h2>
                <GoMainButton onClick={goMain}>메인으로 돌아가기</GoMainButton>
            </NotFoundPageBox>
        </NotFoundPageContainer>
    );
};

export default NotFoundPage;

const NotFoundPageContainer = styled.div`
    margin-top: 180px;
`

const NotFoundPageBox = styled.div`
    width: 40%;
    margin: 0 auto;
    text-align : center;
    & > h1 { font-size : 3.2rem; }
    & > h2 { 
        font-size : 2.2rem; 
        margin: 1rem 0 1rem 0;
    }
`

const GoMainButton = styled.div`
    width: 60%;
    padding: 8px 0 8px 0;
    background-color: #ffe100;
    margin: 0 auto;
    text-align: center;
    cursor: pointer;
`