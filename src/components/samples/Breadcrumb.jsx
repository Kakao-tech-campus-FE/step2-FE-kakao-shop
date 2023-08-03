import React from "react";
import { Link, useLocation } from "react-router-dom";

import '../../styles/Breadcrumb.css'

const Breadcrumb = () => {
  const location = useLocation();

  // 현재 URL로부터 "/"구분자를 분리한 문자열을 얻는다
  const pathnames = location.pathname.split("/").filter((item) => item);

  return (
    <div className="breadcrumb">
      {/* 맨 상위 디렉토리인 Home */}
      <Link to="/">Home</Link>

      {/* 분리해서 얻은 문자열을 하나하나 넣어 이동 경로를 표시한다 */}
      {/* 만약 마지막 경로에 해당하는 경로라면 그냥 표시 & 아니라면 링크 태그를 통해 이동할 수 있게 구현 */}
      {pathnames.map((path, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <span key={index}>{path}</span>
        ) : (
          <Link key={index} to={routeTo}>{path}</Link>
        );
      })}
    </div>
  );
};

export default Breadcrumb;