import React, { useEffect, useRef, useState } from "react";
import Footer from "../components/atoms/Footer";
import GNB from "../components/atoms/GNB";
import { Outlet, useNavigate } from "react-router-dom";

export const useEffectOnce = (effect) => {
  const destroyFunc = useRef();
  const effectCalled = useRef(false);
  const renderAfterCalled = useRef(false);
  const [val, setVal] = useState(0);

  if (effectCalled.current) {
    renderAfterCalled.current = true;
  }

  useEffect(() => {
    if (!effectCalled.current) {
      destroyFunc.current = effect();
      effectCalled.current = true;
    }

    setVal((val) => val + 1);

    return () => {
      if (!renderAfterCalled.current) {
        return;
      }
      if (destroyFunc.current) {
        destroyFunc.current();
      }
    };
  }, []);
};

const RequiredAuthLayout = () => {
  const navigate = useNavigate();

  // useEffectOnce 함수를 사용하여, alert 창이 두번 뜨는 것을 방지
  useEffectOnce(() => {
    if (localStorage.getItem("access_token") === null) {
      alert("로그인이 필요한 서비스입니다.");
      navigate("/login");
    }
  });

  return (
    <>
      <GNB />
      <Outlet />
      <Footer />
    </>
  );
};

export default RequiredAuthLayout;
