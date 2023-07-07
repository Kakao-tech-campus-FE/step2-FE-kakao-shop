import { Link } from "react-router-dom";
import Box from "../atoms/Box";
import Button from "../atoms/Button";
import { useSelector } from "react-redux";
import logOut from "../../services/logout";

// 로그인 상태 시 로그아웃 버튼이 활성화 되도록 수정
const GNBMenuMy = ({ className = "" }) => {
  const userInfo = useSelector((state) => state.user);
  console.log("userinfo: ", userInfo);
  return (
    <Box className={className}>
      {userInfo.email && userInfo.token ? (
        <Button
          onClick={() => {
            // 아래 두 줄은 시행착오...
            //dispatch(logout());
            //dispatch(setEmail());
            logOut();
          }}
          className={"block pt-4 pb-3 px-3 leading-7"}
        >
          로그아웃
        </Button>
      ) : (
        <Link to={"/login"} className="block pt-4 pb-3 px-3 leading-7">
          로그인
        </Link>
      )}
      <div />
      <Link to={"/signup"} className="block pt-4 pb-3 px-3 leading-7">
        회원가입
      </Link>
    </Box>
  );
};
export default GNBMenuMy;
