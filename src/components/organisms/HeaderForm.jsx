import { useDispatch, useSelector } from "react-redux";
import Container from "../atoms/Container";
import Logo from "../atoms/Logo";
import LinkButton from "../atoms/LinkButton";
import { logout } from "../../store/slices/authSlice";
import { ReactComponent as Cart } from "../../assets/cart.svg";
import { ReactComponent as List } from "../../assets/list.svg";
import staticServerUri from "../../utils/krampoline";

/** 헤더
 *
 * @return {JSX.Element}
 */
const HeaderForm = () => {
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.auth);
  return (
    <div className="flex max-w-none h-[79px] mx-auto fixed left-0 right-0 top-0 border-b border-gray-300 bg-white z-[100]">
      <Container className="flex max-w-none w-[1280px] h-[79px] mx-auto fixed left-0 right-0 top-0 ">
        <Logo className="pt-[31px] pr-[26px]" />
        <LinkButton
          to="/"
          onClick={() => {}}
          className="pt-[25px] pb-[25px] pl-[24px] text-[16px] leading-[30px] font-bold"
        >
          홈
        </LinkButton>
        <LinkButton
          to="/"
          onClick={() => {}}
          className="pt-[25px] pb-[25px] pl-[24px] text-[16px] leading-[30px]"
        >
          브랜드데이
        </LinkButton>
        <LinkButton
          to="/"
          onClick={() => {}}
          className="pt-[25px] pb-[25px] pl-[24px] text-[16px] leading-[30px]"
        >
          베스트
        </LinkButton>
        <LinkButton
          to="/"
          onClick={() => {}}
          className="pt-[25px] pb-[25px] pl-[24px] text-[16px] leading-[30px]"
        >
          라이브
        </LinkButton>
        <LinkButton
          to="/"
          onClick={() => {}}
          className="pt-[25px] pb-[25px] pl-[24px] text-[16px] leading-[30px]"
        >
          기획전
        </LinkButton>

        <div className="w-px h-[16px] mt-[32px] mb-[32px] ml-[20px] bg-gray-300" />

        <LinkButton
          to="/"
          onClick={() => {}}
          className="pt-[25px] pb-[25px] pl-[21px] mr-auto text-[16px] leading-[30px]"
        >
          <span className="flex items-center">
            <List />
            <p className="pl-[6px] text-blue-kakao font-extrabold">카테고리</p>
          </span>
        </LinkButton>

        <LinkButton
          to="/cart"
          onClick={() => {}}
          className="cart-button leading-[30px] py-[25px]"
        >
          <Cart />
        </LinkButton>

        <div className="w-px h-[16px] mt-[32px] mb-[32px] ml-[25px] bg-gray-300" />

        {isLogin ? (
          <LinkButton
            to="/"
            onClick={() => {
              dispatch(logout());
              window.location.replace(`${staticServerUri}/`);
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
      </Container>
    </div>
  );
};

export default HeaderForm;
