import React from "react";

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
