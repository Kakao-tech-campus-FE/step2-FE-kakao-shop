import { Outlet, useNavigate } from "react-router-dom";
import { getCookie } from "../store/cookies";
import { useEffect } from "react";
import GNB from "../components/molecules/Gnb";
import Footer from "../components/molecules/Footer";
function RequiredAuthLayout() {
  const navigate = useNavigate();
  useEffect(() => {
    if (getCookie("token") === null) {
      alert("로그인이 필요한 서비스입니다.");
      navigate("/login");
    }
  }, [navigate]);
  return (
    <>
      <GNB />
      <div style={{ marginTop: "114px" }}>
        {/* 콘텐츠 영역: 페이지마다 달라지는 영역 */}
        <Outlet />
      </div>
      {<Footer />}
    </>
  );
}

export default RequiredAuthLayout;
