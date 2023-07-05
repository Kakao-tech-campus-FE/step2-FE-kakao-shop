import React from "react";

// props
// htmlFor: Input의 id와 연결되기 위한 ID
// children: Label에 표시될 텍스트
// className: CSS 스타일 적용 시 활용할 클래스 이름
const Label = ({ htmlFor, children, className }) => {
  return (
    <label htmlFor={htmlFor} className={className}>
      {children}
    </label>
  );
};

export default Label;
