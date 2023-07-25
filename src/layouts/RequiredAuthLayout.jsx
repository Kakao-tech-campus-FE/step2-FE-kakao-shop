import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import GNB from "../components/atoms/GNB";

function RequiredAuthLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      alert("로그인이 필요한 서비스입니다.");
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      <div className="flex justify-center">
        {/* 로그인 버튼, 장바구니 버튼, 메인 로고 */}
        <header className="flex justify-center fixed z-50 bg-white border-gray-200 border-solid border-b-2 p-3 w-full">
          <GNB />
        </header>

        {/* 콘텐츠 영역: 페이지마다 달라지는 영역 */}
        <main className="mt-20">
          <Outlet />
        </main>
        {/* 푸터 영역 */}
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default RequiredAuthLayout;
