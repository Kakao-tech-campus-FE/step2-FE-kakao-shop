import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  const goToLogIn = () => {
    navigate("/login");
  }
  const goToSignUp = () => {
    navigate("/signup");
  }
  return (
    <div>
      <h3>main</h3>
      <button onClick={goToLogIn}>로그인</button>
      <button onClick={goToSignUp}>회원가입</button>
    </div>
  );
}

export default MainPage;
