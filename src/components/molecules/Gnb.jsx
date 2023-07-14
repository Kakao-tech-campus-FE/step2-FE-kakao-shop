import { useNavigate } from "react-router-dom";
import Container from "../atoms/Container";
import { useDispatch, useSelector } from "react-redux";
import Button from "../atoms/Button";
import { setLogin } from "../../store/slices/userSlice";
import { deleteCookie } from "../../store/cookies";

const GNB = ({ children }) => {
  const movePage = useNavigate();
  const loginedUser = useSelector((state) => state.user.loginCheck);
  const loginedUser2 = useSelector((state) => state.user.logined);
  const dispatch = useDispatch();
  function gohome(url) {
    movePage(url);
  }
  return (
    <Container className="pc_head inner_head fixed left-0 right-0 top-0 z-11000 border-b-2 border-gray-300 bg-white">
      <Container className="text-base leading-6 font-sans text-gray-700 mx-0 px-8"></Container>
      <Container className="text-base leading-6 font-sans text-gray-700 m-0 relative ml-auto p-14 pr-13 pt-0"></Container>
      <Container className="text-base leading-6 font-sans text-gray-700 p-0 flex w-screen h-1/7 mx-auto">
        <h1 className="block text-2xl my-4 font-bold">
          <img
            alt="톡쇼핑하기"
            className="overflow-clip-margin-content overflow-clip overflow-x-auto overflow-y-auto"
            src="https://st.kakaocdn.net/commerce_ui/front-talkstore/real/20230707/130532/assets/images/pc/pc_logo.png"
          />
        </h1>
        <Container className="text-base leading-6 font-sans text-gray-700 relative py-3 px-6">
          <Button
            className="text-base leading-7 font-sans text-black no-underline block py-3 px-0 font-semibold"
            onClick={() => {
              let url = "/login";
              if (loginedUser) {
                dispatch(setLogin(false)); //로그아웃 상태로 만듦
                deleteCookie("token"); //유효시간 관리하는 토큰 쿠키 삭제
                alert("logout");
                url = "/";
              }
              gohome(url);
            }}
          >
            {loginedUser || loginedUser2 ? "로그아웃" : "로그인"}
          </Button>
          <Button
            className="text-base leading-7 font-sans text-black no-underline block py-3 px-0 font-semibold"
            onClick={() => {
              gohome("/signup");
            }}
          >
            회원가입 이동
          </Button>
        </Container>
      </Container>
    </Container>
  );
};

export default GNB;
