import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../store/slices/userSlice";

const Home = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearUser());
    localStorage.removeItem("user");
  };

  return (
    <div>
      <h2>홈페이지</h2>
      {user && (
        <div>
          <p>사용자 정보: {user.email}</p>
          <button onClick={handleLogout}>로그아웃</button>
        </div>
      )}
    </div>
  );
};

export default Home;
