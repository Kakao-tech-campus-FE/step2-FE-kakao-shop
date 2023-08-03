// Label
// children : 요소 내부에 포함될 내용
// htmlFor : <label>요소와 연결된 입력요소의 ID 설정, 레이블과 연결된 입력요소를 정확하게 식별가능
// className : 스타일링
import React from 'react';

function Label({ children, htmlFor, className }) {
  return (
    <label htmlFor={htmlFor} className={className}>
      {children}
    </label>
  );
}
export default Label;
