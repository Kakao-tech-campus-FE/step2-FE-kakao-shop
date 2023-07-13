// Input 컴포넌트
// type : input 요소의 타입 지정 (text, email, password ..)
// value : input 요소의 현재 값
// name : input요소의 이름(name) 속성 설정 : form 데이터 전송 시 이름지정가능
// className : 스타일링을 위한 propTypes
// placeholder : input요소에 표시되는 힌트텍스트
// id : Input 요소의 고유한 식별자 id : 레이블과 연결할 때 사용
import '../../styles/atoms/Input.css';
import React from 'react';

function Input({
  type,
  value,
  name,
  className,
  onChange,
  placeholder,
  id,
  message,
}) {
  return (
    <>
      <input
        id={id}
        name={name}
        className={className}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <span>{message}</span>
    </>
  );
}

export default Input;
