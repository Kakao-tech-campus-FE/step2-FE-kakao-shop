

const Input = ({error, id, value, children, type, placeholder, onBlur, onChange,className}) => {
  // 'type': input 요소의 타입을 지정하는 값 ('text', 'password', 'email' 등 )
  // 'value': input 요소의 현재 값으로, 외부 상태와 동기화되기 위해 부모 컴포넌트로부터 전달받음( 상태관리 위함 )
  // 'onChange': input 값이 변경될 때 호출되는 콜백 함수, 외부 상태 업데이트
  // 'placeholder': input 요소에 미리 표시될 임시 텍스트
  // 'className': input 요소에 추가로 적용할 CSS 클래스를 지정
  // 'id': input 요소의 고유한 식별자(ID) 지정, label과 연결하기 위해 사용
  
  return (
    <input type ={type} id ={id} value={value} placeholder={placeholder}
    onChange = {onChange} className= {className} onBlur= {onBlur} error={error}>
    {children}
    </input>
  )
}

export default Input;