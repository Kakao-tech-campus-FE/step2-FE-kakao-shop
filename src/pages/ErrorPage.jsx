import React from 'react';
import { useNavigate } from 'react-router-dom';

const staticServerUrl = process.env.REACT_APP_PATH || '';
export const ErrorPage = ({ message }) => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate(staticServerUrl + '/');
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-8xl absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        404 Not Found
      </h1>
      <p className="absolute top-1/2">Page not found :)</p>
      <p className="absolute top-2/3">
        페이지가 삭제되었거나 주소가 변경되었을 수 있습니다.
      </p>

      <div
        className="absolute top-3/4 underline underline-offset-1"
        onClick={goHome}
      >
        {' '}
        홈페이지 돌아가기
      </div>

      <h1> {message}</h1>
    </div>
  );
};
