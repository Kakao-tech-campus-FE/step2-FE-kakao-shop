import React from "react";

// children : Input 내부에 표시할 내용을 전달받음
// htmlFor : label 태그와 연결하기위해 for, 그중에서도 JSX에서는 htmlFor를 사용한다
// className : Label에 적용할 CSS를 위한 className
const Label = ({ children, htmlFor, className }) => {
  return (
    <>
      {/* html의 for을 JSX에서는 사용이 불가능, 따라서 대체제인 htmlFor를 사용한다 */}
      <label htmlFor={htmlFor} className={className}>
        {children}
      </label>
    </>
  );
};

export default Label;
