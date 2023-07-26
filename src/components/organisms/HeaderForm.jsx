import { useDispatch, useSelector } from "react-redux";
import Container from "../atoms/Container";
import Logo from "../atoms/Logo";
import LinkButton from "../atoms/LinkButton";
import { logout } from "../../store/slices/authSlice";
import { ReactComponent as Cart } from "../../assets/cart.svg";

/** 헤더
 *
 * @return {JSX.Element}
 */
const HeaderForm = () => {
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.auth);
  return (
    <div className="flex max-w-none h-[79px] mx-auto fixed left-0 right-0 top-0 border-b border-gray-300 bg-white">
      <Container className="flex max-w-none w-[1280px] h-[79px] mx-auto fixed left-0 right-0 top-0 ">
        <Logo className="pt-[31px] mr-auto" />
        {isLogin ? (
          <LinkButton
            to="/cart"
            onClick={() => {}}
            className="cart-button leading-[30px] py-[25px]"
          >
            <Cart />
          </LinkButton>
        ) : (
          <LinkButton
            to="/login"
            onClick={() => {
              alert("로그인이 필요한 메뉴입니다.");
            }}
            className="cart-button leading-[30px] py-[25px]"
          >
            <Cart />
          </LinkButton>
        )}
        {isLogin ? (
          <LinkButton
            to="/"
            onClick={() => {
              dispatch(logout());
              window.location.replace("/");
            }}
            className="pt-[25px] pb-[25px] pl-[25px] text-[14px]"
          >
            로그아웃
          </LinkButton>
        ) : (
          <LinkButton
            to="/login"
            onClick={() => {}}
            className="pt-[25px] pb-[25px] pl-[25px] text-[14px]"
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
    </div>
  );
};

export default HeaderForm;
