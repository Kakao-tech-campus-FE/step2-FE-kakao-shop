import React from "react";
import { useNavigate } from "react-router-dom";

const staticServerUri = process.env.REACT_APP_PATH || "";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex justify-center flex-col gap-4 text-center border p-16">
        <img src={staticServerUri + "/icons/404.png"} alt="404 Not Found" width={200} />
        <div>페이지를 찾을 수 없습니다.</div>
        <button
          onClick={() => {
            navigate(staticServerUri + "/");
          }}
          className="p-4 rounded-lg bg-yellow-300"
        >
          돌아가기
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
