const Input = ({
  type, // input 태그의 타입
  value, // input 태그의 값
  onChange, // input 값이 변경되었을 때 호출되는 콜백 함수
  placeholder, // input에 표시되는 임시 텍스트
  className, // input 태그에 적용될 CSS 클래스 이름
  id, // input 태그의 고유 식별자 (label과 연결할 때 사용)
  name, // input 태그의 이름
}) => {
  return (
    <input
      id={id}
      // id를 포함시키는 이유는 label이라는 element와 연결해서 사용할 때 유용하기 때문
      name={name}
      className={className}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
