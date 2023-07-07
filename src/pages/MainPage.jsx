import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser } from "../store/userSlice";
import { useEffect } from "react";

const MainPage = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.email);
  const dispatch = useDispatch();


 
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/main");
    
  };

  const goToLogIn = () => {
    navigate("/login");
  }
  const goToSignUp = () => {
    navigate("/signup");
  }


  return (
    <div>
      <h3>main</h3>
      {user ? (
        <>
          <p>{user}</p>
          <button onClick={handleLogout}>로그아웃</button>
        </>
      ) : (
        <>
        <button onClick={goToLogIn}>로그인</button>
        <button onClick={goToSignUp}>회원가입</button>
        </>
      )}
     
    </div>
  );
}

export default MainPage;
