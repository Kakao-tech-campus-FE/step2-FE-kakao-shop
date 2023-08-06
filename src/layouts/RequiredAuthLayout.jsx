import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const staticServerUrl = process.env.REACT_APP_PATH || "";

function RequiredAuthLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      alert("로그인이 필요한 서비스입니다.");
      navigate(staticServerUrl + "/login");
    }
  }, [navigate]);

  return (
    <>
      <div className="flex justify-center">
        <main>
          {/* <Header /> */}
          <Outlet />
          {/* <Footer /> */}
        </main>
      </div>
    </>
  );
}

export default RequiredAuthLayout;