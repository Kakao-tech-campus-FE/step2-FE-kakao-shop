import React from "react";

const ErrorPage = () => {
  const errorNum = 404;

  return (
    <div className="notfound">
      <h1>404</h1>
      <h2>상품을 찾을 수 없습니다.</h2>
    </div>
  );
};

export default ErrorPage;
