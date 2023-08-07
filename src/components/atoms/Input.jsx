const Input = ({
  type,        // 인풋 태그의 타입
  value,       // 요소의 현재 값
  onChange,    // 값이 변경될 때 호출되는 함수
  placeholder, // placeholder
  className,   // 클래스 이름
  id,          // input 요소의 id인 동시에, label과 연결된 id
  autocomplete,// 자동완성
}) => {
  return <input
            type={type}
            id={id}
            className={className} 
            value={value} 
            onChange={onChange} 
            placeholder={placeholder}
            autoComplete={autocomplete}
             />;
}
export default Input;