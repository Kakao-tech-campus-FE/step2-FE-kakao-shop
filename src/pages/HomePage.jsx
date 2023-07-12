import Button from "../components/atoms/Button";
import Container from "../components/atoms/Container";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Title from "../components/atoms/Title";
import { deleteCookie } from "../store/cookies";
import { setLogin } from "../store/slices/userSlice";
const HomePage = () => {
  const movePage = useNavigate();
  const loginedUser = useSelector((state) => state.user.logined);
  const loginCheck = useSelector((state) => state.user.loginCheck);
  function gohome(url) {
    movePage(url);
  }

  return (
    <Container>
      <Title>{"환영합니다."}</Title>
      <Button
        onClick={() => {
          let url = "/login";
          if (loginedUser) {
            setLogin(false); //로그아웃 상태로 만듦
            deleteCookie("token"); //유효시간 관리하는 토큰 쿠키 삭제
            alert("logout");
            url = "/";
          }
          gohome(url);
        }}
      >
        {loginedUser ? "로그아웃" : "로그인"}
      </Button>
      <Button
        onClick={() => {
          gohome("/signup");
        }}
      >
        회원가입 이동
      </Button>
    </Container>
  );
};

export default HomePage;
