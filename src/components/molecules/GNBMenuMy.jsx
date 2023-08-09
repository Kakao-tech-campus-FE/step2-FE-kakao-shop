import { Link } from "react-router-dom";
import Box from "../atoms/Box";
import Button from "../atoms/Button";
import { useSelector } from "react-redux";
import logOut from "../../services/logout";

const GNBMenuMy = ({ className = "" }) => {
  const userInfo = useSelector((state) => state.user);
  // console.log("userinfo: ", userInfo);
  return userInfo.email && userInfo.token ? (
    <Box className={className}>
      <span className="my-auto text-sky-600 ">{userInfo.email}</span>
      <span className="after:absolute after:right-auto after:top-9 after:w-px after:h-3 after:bg-gray-400 after:inline-block after:ml-2" />
      <Button
        onClick={() => {
          // 아래 두 줄은 시행착오...
          //dispatch(logout());
          //dispatch(setEmail());
          logOut();
          // 메인 페이지로 이동
          window.location.href = "/";
        }}
        className={"min-w-fit block pt-4 pb-3 px-2 leading-7 ml-2"}
      >
        로그아웃
      </Button>
    </Box>
  ) : (
    <Box className={className}>
      <Link to={"/login"} className="block pt-4 pb-3 px-3 leading-7">
        로그인
      </Link>
      <span className="after:absolute after:right-auto after:top-9 after:w-px after:h-3 after:bg-gray-400 after:inline-block" />
      <Link to={"/signup"} className="block pt-4 pb-3 px-3 leading-7">
        회원가입
      </Link>
    </Box>
  );
};
export default GNBMenuMy;
