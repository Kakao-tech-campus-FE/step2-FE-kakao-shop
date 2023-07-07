import Button from "../components/atoms/Button";
import Container from "../components/atoms/Container";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setEmail } from "../store/slices/userSlice";
import Title from "../components/atoms/Title";
import { deleteCookie, setCookie } from "../store/cookies";
const HomePage = () => {
  const movePage = useNavigate();
  const loginCheck = useSelector((state) => state.user.loginCheck);
  function gohome(url) {
    movePage(url);
  }

  return (
    <Container>
      <Title>{"환영합니다."}</Title>
      <Button
        onClick={() => {
          console.log(loginCheck);
          let url = "/login";
          if (loginCheck) {
            deleteCookie("token");
            alert("logout");
            url = "/";
          }
          gohome(url);
        }}
      >
        {loginCheck === true ? "로그아웃" : "로그인"}
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
