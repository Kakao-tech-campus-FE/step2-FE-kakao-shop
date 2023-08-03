import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import HeaderForm from "../components/organisms/HeaderForm";
import FooterForm from "../components/organisms/FooterForm";
import staticServerUri from "../utils/krampoline";

/** 로그인이 필요한 페이지 레이아웃
 *
 * @returns {JSX.Element}
 */
const RequiredAuthLayout = () => {
  const navigate = useNavigate();
  const { isLogin } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!isLogin) {
      alert("로그인이 필요한 서비스입니다.");
      navigate(`${staticServerUri}/login`);
    }
  }, [navigate]);

  return (
    <>
      <HeaderForm />
      <Outlet />
      <FooterForm />
    </>
  );
};

export default RequiredAuthLayout;
