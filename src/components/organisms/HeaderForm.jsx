import { useDispatch, useSelector } from "react-redux";
import Container from "../atoms/Container";
import Logo from "../atoms/Logo";
import LinkButton from "../atoms/LinkButton";
import { logout } from "../../store/slices/authSlice";

/** 헤더
 *
 * @return {JSX.Element}
 */
const HeaderForm = () => {
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.auth);
  return (
    <Container className="flex max-w-none w-[1280px] h-[79px] mx-auto fixed left-0 right-0 top-0 border-b border-gray-300 bg-white">
      <Logo className="pt-[31px]" />
      {isLogin ? (
        <LinkButton
          to="/"
          onClick={() => {
            dispatch(logout());
            window.location.replace("/");
          }}
          className="ml-auto pt-[25px] pb-[25px] text-[14px] leading-[30px]"
        >
          로그아웃
        </LinkButton>
      ) : (
        <LinkButton
          to="/login"
          onClick={() => {}}
          className="ml-auto pt-[25px] pb-[25px] text-[14px] leading-[30px]"
        >
          로그인
        </LinkButton>
      )}
      <LinkButton
        to="/signup"
        onClick={() => {}}
        className="pt-[25px] pb-[25px] pl-[25px] text-[14px] leading-[30px]"
      >
        회원가입
      </LinkButton>
    </Container>
  );
};

export default HeaderForm;
