import { Link } from "react-router-dom";
import Box from "../atoms/Box";

// 로그인 상태 시 로그아웃 버튼이 활성화 되도록 수정
const GNBMenuMy = () => {
  return (
    <Box>
      <Link to={"/login"}>로그인</Link>
      <div />
      <Link to={"/signup"}>회원가입</Link>
    </Box>
  );
};
export default GNBMenuMy;
