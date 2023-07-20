/**
 * 입력 컴포넌트 생성
 * @param {string} type - 입력 타입
 * @param {string} value - 입력된 값
 * @param {function} onChange - 변화 핸들러 함수
 * @param {string} placeholder - 미리보기 메시지
 * @param {string} className
 * @param {string} id
 * @param {string} name
 * @returns 입력 컴포넌트
 */
const Input = ({type, value, onChange, placeholder, className, id, name}) => {
	return (
		<input 
			id={id} 
			className={`w-full outline-none ${className}`} 
			type={type} 
			name={name}
			value={value}
			onChange={onChange}
			placeholder={placeholder}>
		</input>
	);
};

export default Input;